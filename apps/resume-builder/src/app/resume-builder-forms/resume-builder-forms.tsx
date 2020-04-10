import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ResumeBuilderFormsProps {}

const StyledResumeBuilderForms = styled.div`
  color: pink;
`;

export const ResumeBuilderForms = (props: ResumeBuilderFormsProps) => {
  return (
    <StyledResumeBuilderForms>
      <h1>Welcome to resume-builder-forms component!</h1>
    </StyledResumeBuilderForms>
  );
};

export default ResumeBuilderForms;
