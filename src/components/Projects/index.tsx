import React from "react";
import { Button } from "../ButtonElement";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH2,
  ProjectsThumbnail,
  ProjectsP,
  ProjectsButtons,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="work">
      <ProjectsH1>These are some of my projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsH2>Movies and Shows</ProjectsH2>
          <ProjectsThumbnail src="\svg-1.svg"></ProjectsThumbnail>
          <ProjectsP>
            Fetches top search results from a REST API using Axios, stores them
            using Redux Toolkit and renders through React and SASS
          </ProjectsP>
          {/* <ProjectsButtons>
            <Button>View Source Code</Button>
            <Button>View Live Demo</Button>
          </ProjectsButtons> */}
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Drum Machine</ProjectsH2>
          <ProjectsThumbnail src="\svg-1.svg"></ProjectsThumbnail>
          <ProjectsP>
            Built using React and SASS, plays two different drum kits' sounds
            when clicked on / corresponding keys are pressed
          </ProjectsP>
          {/* <ProjectsButtons>
            <Button>View Source Code</Button>
            <Button>View Live Demo</Button>
          </ProjectsButtons> */}
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Random Quote Machine</ProjectsH2>
          <ProjectsThumbnail src="\svg-1.svg"></ProjectsThumbnail>
          <ProjectsP>
            Built using React and SASS, displays a random quote pulled from a
            stored JSON file and offers the ability to instantly tweet it
          </ProjectsP>
          {/* <ProjectsButtons>
            <Button>View Source Code</Button>
            <Button>View Live Demo</Button>
          </ProjectsButtons> */}
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
