import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

const StyledEternalResume = styled.div`
  color: pink;
`;

export const EternalResume = (props: EternalResumeProps) => {
  return (
    <StyledEternalResume>
      <h1>Welcome to eternal-resume component!</h1>
    </StyledEternalResume>
  );
};

export default EternalResume;
