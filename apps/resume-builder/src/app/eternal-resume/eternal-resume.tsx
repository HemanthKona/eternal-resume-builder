import React from 'react';

// external
import { Box, Heading, Grid } from 'theme-ui';

// internal
import { data } from '@eternal-resume-builder/data';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

export const EternalResume = (props: EternalResumeProps) => {
  return (
    <Grid gap={2} rows={[2, '2fr 1fr']}>
      <Grid gap={2} columns={[2, '2fr 1fr']}>
        <Box bg='blue'>
        <Heading as="h1">{data.basics.name}</Heading>
        <br/>
        <Heading as="h2">{data.basics.label}</Heading>
        </Box>
        <Box bg='green'>
        <Heading as="h3">{data.basics.email}</Heading>
        <br/>
        <Heading as="h3">{data.basics.phone}</Heading>
        </Box>
      </Grid>
    </Grid>

  );
};

export default EternalResume;

  {/*
    <Box bg={'blue'}>
  <Heading as="h1">{data.basics.name}</Heading>
  <br/>
  <Heading as="h2">{data.basics.label}</Heading>
  <br/>
  <Heading as="h3">{data.basics.picture}</Heading>
  <br/>
  <Heading as="h3">{data.basics.email}</Heading>
  <br/>
  <Heading as="h3">{data.basics.phone}</Heading>
  <br/>
  <Heading as="h3">{data.basics.website}</Heading>
    </Box>
  */}
