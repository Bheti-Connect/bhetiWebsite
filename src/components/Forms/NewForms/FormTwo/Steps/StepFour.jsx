import React from "react";
import styled from "styled-components";
import { Field, FileInput, StyledLabel, StyledStar } from "../../FormikFields/FormikFields";
import attach from "../../formAssets/Attach.svg";
import drop from "../../formAssets/drop-file.svg";

const StepFour = (props) => {
  const {
    formField: { sectorForActivity, presentation },
  } = props;

  return (
    <>
      <StyledLabel htmlFor="files">
        Quel secteur correspond le mieux à votre activité ? <StyledStar>*</StyledStar> 
      </StyledLabel>
        <div>
          <FileInput name={sectorForActivity.name} type="file" id="files" />
        </div>
        <Flex>
          <StyledLabelFile htmlFor="files">
            <img src={attach} alt="attach" />
            Joindre le fichier
          </StyledLabelFile>
          <StyledDropFile>
            <img src={drop} alt="drop file" />
            Drop files here
          </StyledDropFile>
      </Flex>
      <Field label={presentation.label} name={presentation.name} type="text" />
    </>
  );
};

const StyledLabelFile = styled.label`
  background-color: #641c1c;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: "Roboto Slab", serif;
  font-size: 0.9rem;
  border-radius: 0.8rem;
  padding: 0.7em 1em;
  width: max-content;
  cursor: pointer;
  margin-bottom: 1.5em;
`;

const StyledDropFile = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 0.9rem;
  color: #641c1c;
  display: flex;
  align-items: center;
  margin-left: 3em;
  @media only screen and (max-width: 450px) {
    margin-left: 0em;
    margin-bottom: 2em;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: baseline;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export default StepFour;