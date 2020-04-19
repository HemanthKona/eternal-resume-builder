import React from 'react';

// external
import {
  Box,
  Button,
  Heading,
  Input
} from 'theme-ui';

// libs
import { ResumeContext } from '../app.context';

/* eslint-disable-next-line */
export interface ResumeBuilderFormsProps {}

export const ResumeBuilderForms = (props: ResumeBuilderFormsProps) => {
  // const { state, update } = useResumeStore();

  console.log("Resume Forms");
  const [state, setState] = React.useContext(ResumeContext);

  const update = (newState) => {
    setState(prevState => {
      return {
        ...prevState,
        ...newState
      }
    })
  }

  return (
    <Box bg={'pink'} p={'3'}>
      <Heading as="h3">Welcome to resume-builder-forms component!</Heading>
      {state.basics.name}
      <Input placeholder="First Name" value={state.basics.name}
        onChange={(event) => update({ basics: { name: event.target.value } })}
      ></Input>
      <Input defaultValue="" placeholder="Last Name"></Input>

      <Button onClick={update}></Button>

    </Box>
  );
};

export default ResumeBuilderForms;
