import React, { useEffect, useState } from 'react';

// eternal
import {
  Box
} from 'grommet';

// components
import { EternalResume } from './eternal-resume';
import { ResumeBuilderForms } from './resume-builder-forms';

// libs
import { Message } from '@eternal-resume-builder/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <Box>
      <EternalResume></EternalResume>
      <ResumeBuilderForms></ResumeBuilderForms>
    </Box>
  );
};

export default App;
