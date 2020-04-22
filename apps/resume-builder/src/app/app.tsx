
import React, { createContext, useState, useContext } from 'react';

// eternal
import { Button, Box, Grid, ThemeProvider } from 'theme-ui';

// config
import theme from './app.theme';

// libs
import { ResumeProvider, ResumeContext,  } from './app.context';

// components
import { EternalResume } from './eternal-resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';


// const ResumeContext = React.createContext({init: 1});

// const ResumeProvider = props => {
//   // const [state, setState] = useState<any>({ count: 0, name: {first: 'f', last: 'l'}});

//   // const resumeApi = useMemo(() => [state, resumeFactory({ state, setState })], [state]);


//   return (
//     <ResumeContext.Provider value={{def: 2}} {...props} />
//   )
// }

export const App = () => {
  const resume = React.useContext(ResumeContext);

  console.log(resume);

  return (
    <ThemeProvider theme={theme}>
      <ResumeProvider>
        <Grid gap={0} sx={{gridTemplateRows:'50vh 50vh'}}>
          <Grid gap={2} columns={[0, '2fr 1fr']}>
            <EternalResume></EternalResume>
            <ShowJsonOutput></ShowJsonOutput>
          </Grid>
          <ResumeBuilderForms></ResumeBuilderForms>
        </Grid>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;
