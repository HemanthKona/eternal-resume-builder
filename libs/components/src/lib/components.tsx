import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Welcome to components!</h1>
    </StyledComponents>
  );
}

export default Components;
