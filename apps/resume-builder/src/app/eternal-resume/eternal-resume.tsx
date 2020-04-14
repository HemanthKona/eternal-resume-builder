import React from 'react';

// external
import { Box, Heading } from 'theme-ui';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

export const EternalResume = (props: EternalResumeProps) => {
  return (
    <Box bg={'green'}>
      <Heading as="h1">Welcome to eternal-resume component!</Heading>
    </Box>
  );
};

export default EternalResume;
