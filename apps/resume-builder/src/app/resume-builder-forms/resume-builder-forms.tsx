import React from 'react';

// external
import {
  Box,
  Heading,
  Input
} from 'theme-ui';

// internal
import { updateData } from '@eternal-resume-builder/data';

/* eslint-disable-next-line */
export interface ResumeBuilderFormsProps {}

export const ResumeBuilderForms = (props: ResumeBuilderFormsProps) => {
  return (
    <Box bg={'pink'} p={'3'}>
      <Heading as="h3">Welcome to resume-builder-forms component!</Heading>

      <Input defaultValue="" placeholder="First Name" onChange={(event) => updateData(event.target.value)}></Input>
      <Input defaultValue="" placeholder="Last Name"></Input>


    </Box>
  );
};

export default ResumeBuilderForms;
