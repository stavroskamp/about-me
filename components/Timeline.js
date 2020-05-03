import React from "react";
import { TimelineBox, Typography } from "../components";
import styled from "@emotion/styled";
import { StyledLayoutMixin } from "../styles/mixins";

const TimelineWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 14px 0;
  background-color: #2f3f5f;
  background-image: linear-gradient(#fff, #fff);
  background-size: 4px 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
  ${StyledLayoutMixin};
`;

const StyledCircle = styled.div`
  display: flex;
  align-self: center;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border-radius: 50%;
`;

const timelineContent = [
  {
    company: "Fieldscale",
    jobTitle: "Front End Developer",
    jobDuration: "June 2018 - Now",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          Fieldscale is a startup that tries to make the simulation of a
          capacitive touch sensor easier. Here I am the main Front End Developer
          and my focus is:
        </Typography>
        <ul>
          <Typography as="li">
            Setting up the development process for the projects
          </Typography>
          <Typography as="li">
            Creation and maintenance of the interface web components
          </Typography>
          <Typography as="li">Creation of prototypes</Typography>
          <Typography as="li">
            Helping other developers with the front end technology stack
          </Typography>
          <Typography as="li">
            Working closely with the product owner, back end developers and the
            QA
          </Typography>
        </ul>
      </React.Fragment>
    ),
    technologies: [
      "JavaScript ES6",
      "React",
      "Redux",
      "Styled Components",
      "Material UI",
      "Three.js",
    ],
  },
  {
    company: "KissMyButton.gr",
    jobTitle: "Front End Developer",
    jobDuration: "March 2017 - May 2018",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          While being in KissMyButton I was part of a team of Front End
          Developers working remotely for a customers NLU web application. My
          responsibilities were:
        </Typography>
        <ul>
          <Typography as="li">
            Creating and styling the web interface
          </Typography>
          <Typography as="li">
            Cooperating remotely with managers and back end developers
          </Typography>
          <Typography as="li">
            Cooperating closely with designers for the UI and UX of the app
          </Typography>
        </ul>
      </React.Fragment>
    ),
    technologies: [
      "JavaScript ES6",
      "React",
      "Redux",
      "Angular.js",
      "Socket.io",
      "Sass",
    ],
  },
  {
    company: "DataTeam Solutions",
    jobTitle: "Front End Developer",
    jobDuration: "March 2016 - March 2017",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          In DataTeam I was the only Front End Developer responsible for the
          creation of the user interface of an ECM web application. Part of my
          responsibilities was:
        </Typography>
        <ul>
          <Typography as="li">Setting up the build process</Typography>
          <Typography as="li">
            Creating and styling the web interface
          </Typography>
          <Typography as="li">
            Helping other developers with the front end development
          </Typography>
          <Typography as="li">Tweaking the UI and UX</Typography>
          <Typography as="li">Updating the company's webpage</Typography>
        </ul>
      </React.Fragment>
    ),
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "jQuery",
      "Bootstrap",
      "Kendo UI",
      "git",
    ],
  },
  {
    company: "Rhombus Software Solutions",
    jobTitle: "Front End Developer",
    jobDuration: "June 2015 - February 2016",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          I joined this startup part-time as a Front End Developer to help
          create a web application for dentists. I was responsible for:
        </Typography>
        <ul>
          <Typography as="li">
            Setting up, creating and styling the front end of autonomous parts
            of the app
          </Typography>
          <Typography as="li">Creating the UI and UX of these apps</Typography>
          <Typography as="li">Creating the company's webpage</Typography>
        </ul>
      </React.Fragment>
    ),
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "jQuery",
      "Bootstrap",
      "Fabric.js",
      "git",
    ],
  },
  {
    company: "Tsakoumis Consultants & Enginners",
    jobTitle: "GIS Analyst / GIS Developer",
    jobDuration: "December 2012 - September 2014",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          I joined the company for my internship and later continued working on
          some projects. In my time there Ι:
        </Typography>
        <ul>
          <Typography as="li">
            Scanned, georeferenced and digitized analogs maps
          </Typography>
          <Typography as="li">Developed a plugin for QGIS</Typography>
          <Typography as="li">
            Developed an interactive map web application
          </Typography>
        </ul>
      </React.Fragment>
    ),
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Google Maps API",
      "Leaflet.js",
      "Python",
      "ArcMap",
      "QGIS",
    ],
  },
  {
    company: "Positive Engineering CO",
    jobTitle: "Sales and Marketing Assistant",
    jobDuration: "May 2012 - December 2012",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          I was a member of a small team that was selling photovoltaic
          equipment. I was responsible for:
        </Typography>
        <ul>
          <Typography as="li">
            Creating and updating the customer database
          </Typography>
          <Typography as="li">Creating of newsletters</Typography>
          <Typography as="li">Creation of offers</Typography>
          <Typography as="li">
            Communicating with logistics companies for the transportation of the
            equipment
          </Typography>
        </ul>
      </React.Fragment>
    ),
  },
];

const Timeline = () => (
  <TimelineWrapper id="timeline">
    <StyledCircle />
    {timelineContent.map((t, index) => (
      <TimelineBox
        key={index}
        company={t.company}
        jobTitle={t.jobTitle}
        jobDescription={t.jobDescription}
        jobDuration={t.jobDuration}
        placement={index % 2 === 0 ? "left" : "right"}
        technologies={t.technologies}
      />
    ))}
    <StyledCircle />
  </TimelineWrapper>
);

export default Timeline;