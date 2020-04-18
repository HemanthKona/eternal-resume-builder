import React from 'react';

// eternal
import { Button, Box, Grid, ThemeProvider } from 'theme-ui';

// components
import { EternalResume } from './eternal-resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';

// libs
import { useResume } from './app.context';
import theme from './app.theme';

export const App = () => {
  const resume = useResume();
  const { state, update } = useResume();

  console.log(state);

  function clickButton() {

    update();

    // setState(state => {
    //   return {
    //     ...state,
    //     count: state.count++
    //   }
    // })

  }

  return (
    <ThemeProvider theme={theme}>
      <Grid gap={2} >
        <Grid gap={2} columns={[2, '2fr 1fr']}>
          <EternalResume></EternalResume>
          <ShowJsonOutput></ShowJsonOutput>
        </Grid>
        <ResumeBuilderForms></ResumeBuilderForms>
        <Box bg={'green'}>
          <Button onClick={clickButton}> {resume.state.count} </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
