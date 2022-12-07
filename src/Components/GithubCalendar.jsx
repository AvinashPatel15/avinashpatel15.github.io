import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="AvinashPatel15"
          transformData={selectLastHalfYear}
          blockSize={20}
          fontSize={20}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div style={{ margin: "auto" }}>
        <a href="https://github.com/AvinashPatel15">
          <img
            style={{ height: "100%", width: "100%" }}
            align="left"
            src="https://github-readme-activity-graph.cyclic.app/graph?username=avinashpatel15&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
            alt="streak"
          />
        </a>
      </div>
    </div>
  );
};

export default Calender;
