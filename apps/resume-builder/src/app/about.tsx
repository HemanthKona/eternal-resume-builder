import React from 'react';

/** @jsx jsx */
import { jsx, Button, Styled } from 'theme-ui';

/* eslint-disable-next-line */
export interface AboutProps {
  gotoView: (v: string) => void;
  pdf: () => void;
}

export const About = (props: AboutProps) => {
  return (
    <Styled.div sx={{px: 4, py: 3}}>
      <h1>About</h1>
      <p>
        Experimental resume builder using CSS Grid for layout.
      </p>
      <Button variant="elevated" mr='2' onClick={e => props.gotoView('forms')}> Edit Resume </Button>
      <Button variant="elevated" onClick={e => props.gotoView('code')}> Export Resume </Button>
      {/* <Button variant="elevated" onClick={e => props.pdf()}> Generate HTML </Button> */}
    </Styled.div>
  );
};

export default About;
