import React from "react";
import { ExperienceBox, Typography, Footer, Link } from ".";
import styled from "@emotion/styled";
import { StyledLayoutMixin, StyledBgGradientMixin } from "../styles/mixins";

const StyledExperienceWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0 40px;
  ${StyledBgGradientMixin};
  ${StyledLayoutMixin};
`;

const StyledExperienceHeader = styled(Typography)`
  color: white;
`;

const experienceContent = [
  {
    company: "Saphetor",
    jobTitle: "Front End Developer",
    jobDuration: "August 2020 - Now",
    jobDescription: (
      <Typography as="p">
        Saphetor is creating tools for large-scale NGS data analysis. Being a
        part of the Front End team the great challenge is how to display all
        these data in a way that a biologist or a doctor can use them. If you
        are interested in genomics you can take a look in{" "}
        <Link href="https://varsome.com/">varsome</Link>.
      </Typography>
    ),
    technologies: ["JavaScript ES6", "React", "Redux"],
  },
  {
    company: "Fieldscale",
    jobTitle: "Front End Developer",
    jobDuration: "June 2018 - July 2020",
    jobDescription: (
      <React.Fragment>
        <Typography as="p">
          In Fieldscale I was working in a web application that tried to make
          the simulation of a capacitive touch sensor easier. There I was the
          main Front End Developer and my focus was in:
        </Typography>
        <ul>
          <Typography as="li">
            Setting up the development process for the project
          </Typography>
          <Typography as="li">
            Creation, styling and maintaining of the web interface
          </Typography>
          <Typography as="li">Suggesting UI and UX solutions</Typography>
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
          In DataTeam I was the only Front End Developer assigned for the
          creation of the user interface of an ECM web application. Part of my
          responsibilities was:
        </Typography>
        <ul>
          <Typography as="li">Setting up the development process</Typography>
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

const Experience = () => (
  <StyledExperienceWrapper id="experience">
    <StyledExperienceHeader as="h1">
      &#9670; Experience &#9670;
    </StyledExperienceHeader>
    {experienceContent.map((t, index) => (
      <ExperienceBox
        key={index}
        company={t.company}
        jobTitle={t.jobTitle}
        jobDescription={t.jobDescription}
        jobDuration={t.jobDuration}
        placement={index % 2 === 0 ? "left" : "right"}
        technologies={t.technologies}
      />
    ))}
    <Footer />
  </StyledExperienceWrapper>
);

export default Experience;
