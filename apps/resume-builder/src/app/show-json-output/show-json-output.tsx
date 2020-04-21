import React, { useContext } from 'react';

// exteral
import Highlight, { defaultProps }  from 'prism-react-renderer';
import { Box } from "theme-ui";

// internal
import { ResumeContext } from '../app.context';

/* eslint-disable-next-line */
export interface ShowJsonOutputProps {}


export const ShowJsonOutput = (props: ShowJsonOutputProps) => {
  const [state] = useContext(ResumeContext);

  return (
    <Box bg={'#afafaf'} p={'10px'} sx={{ overflow: 'scroll'}}>
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
