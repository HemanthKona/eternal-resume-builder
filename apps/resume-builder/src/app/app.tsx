import React, { useEffect, useState } from 'react';

// eternal

// components
import { EternalResume } from './eternal-resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';

// libs
import { Message } from '@eternal-resume-builder/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [state, setState] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <Box>
      <EternalResume></EternalResume>
      <ShowJsonOutput></ShowJsonOutput>
      <ResumeBuilderForms></ResumeBuilderForms>
    </Box>
  );
};

export default App;
