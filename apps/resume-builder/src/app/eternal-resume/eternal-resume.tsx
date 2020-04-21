import React, { useContext } from 'react';

// external
import { Box, Heading, Grid } from 'theme-ui';

// internal
import { ResumeContext } from '../app.context';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

export const EternalResume = (props: EternalResumeProps) => {
  const [state] = useContext(ResumeContext);

  return (
    <Grid gap={2}>
      <Grid gap={2} columns={[2, '2fr 1fr']}>
        <Box bg='purple'>
          <Heading as="h1">{state.basics.name}</Heading>
          <br/>
          <Heading as="h2">{state.basics.label}</Heading>
          </Box>
          <Box bg='yellow'>
          <Heading as="h3">{state.basics.email}</Heading>
          <br/>
          <Heading as="h3">{state.basics.phone}</Heading>
        </Box>
      </Grid>

    </Grid>

  );
};

export default EternalResume;

  {/*
    <Box bg={'blue'}>
  <Heading as="h1">{state.basics.name}</Heading>
  <br/>
  <Heading as="h2">{state.basics.label}</Heading>
  <br/>
  <Heading as="h3">{state.basics.picture}</Heading>
  <br/>
  <Heading as="h3">{state.basics.email}</Heading>
  <br/>
  <Heading as="h3">{state.basics.phone}</Heading>
  <br/>
  <Heading as="h3">{state.basics.website}</Heading>
    </Box>
  */}
