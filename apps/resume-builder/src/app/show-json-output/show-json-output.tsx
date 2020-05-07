import React, { useContext } from 'react';

// exteral
import Highlight, { defaultProps }  from 'prism-react-renderer';
import { Box, Link } from "theme-ui";

// internal
import { ResumeContext } from '../app.context';

/* eslint-disable-next-line */
export interface ShowJsonOutputProps {}


export const ShowJsonOutput = (props: ShowJsonOutputProps) => {
  const [state] = useContext(ResumeContext);

  return (
    <Box bg='gray.6' p={'10px'} sx={{ overflow: 'scroll'}}>
      <Link color='gray.3' href="https://jsonresume.org/" target="_blank" sx={{display: 'block', textAlign: 'right'}}>JSON Resume Spec</Link>
      <Highlight {...defaultProps} code={JSON.stringify(state, null, 2)} language="json">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default ShowJsonOutput;
