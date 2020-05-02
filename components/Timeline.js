import React from "react";
import { TimelineBox } from "../components";
import styled from "@emotion/styled";

const TimelineWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 100px 0;
  flex-direction: column;
  background-image: linear-gradient(#fff, #fff);
  background-size: 4px 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const timelineContent = [
  {
    company: "Fieldscale",
    jobTitle: "Front End Developer",
    jobDescription: "",
  },
  {
    company: "KissMyButton.gr",
    jobTitle: "Front End Developer",
    jobDescription: "",
  },
  {
    company: "DataTeam Solutions",
    jobTitle: "Front End Developer",
    jobDescription: "",
  },
  {
    company: "Rhombus Software Solutions",
    jobTitle: "Front End Developer",
    jobDescription: "",
  },
  {
    company: "Tsakoumis Consultants & Enginners",
    jobTitle: "GIS Analyst / GIS Developer",
    jobDescription: "",
  },
  {
    company: "Positive Engineering CO",
    jobTitle: "Sales and Marketing Assistant",
    jobDescription: "",
  },
];

const Timeline = () => (
  <TimelineWrapper id="timeline">
    {timelineContent.map((t, index) => (
      <TimelineBox
        key={index}
        company={t.company}
        jobTitle={t.jobTitle}
        jobDescription={t.jobDescription}
        placement={index % 2 === 0 ? "left" : "right"}
      />
    ))}
  </TimelineWrapper>
);

export default Timeline;
