import React, { useEffect, useState } from 'react';

// eternal
import { Box, Flex, Grid } from 'theme-ui';

// components
import { EternalResume } from './eternal-resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';


// libs
import { Message } from '@eternal-resume-builder/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [state, setState] = useState({});

  // useEffect(() => {
  //   fetch('/api')
  //     .then(r => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <Grid gap={2} rows={[2, '2fr 1fr']}>
      <Grid gap={2} columns={[2, '2fr 1fr']}>
        <EternalResume></EternalResume>
        <ShowJsonOutput></ShowJsonOutput>
      </Grid>
      <ResumeBuilderForms></ResumeBuilderForms>
    </Grid>

  );
};

export default App;
