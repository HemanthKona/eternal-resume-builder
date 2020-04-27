
import React, { createContext, useState, useContext } from 'react';

// eternal
/** @jsx jsx */
import { jsx, Box, Button, Flex, Grid, ThemeProvider } from 'theme-ui';

// config
import theme from './app.theme';

// libs
import { ResumeProvider, ResumeContext,  } from './app.context';

// components
import { EternalResume } from './eternal-resume';
import { Resume } from './resume';
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
  const [grid, setGrid] = useState(['minmax(auto, 960px) 1fr']);

  console.log(resume);

  return (
    <ThemeProvider theme={theme}>
      <ResumeProvider>
        <Grid gap={0} columns={['auto 60px']}>
          <Grid gap={0} sx={{gridTemplateRows:'50vh 50vh'}}>
            <Grid gap={2} columns={grid}>
              <Resume></Resume>
              <ShowJsonOutput></ShowJsonOutput>
            </Grid>
            <ResumeBuilderForms></ResumeBuilderForms>
          </Grid>
          {/* Right side toolbar */}
          <Flex sx={{flexDirection: 'column', minHeight: '100vh'}} bg='gray.7' >
            <Button variant="elevated"> {'</>'} </Button>
          </Flex>
        </Grid>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;
