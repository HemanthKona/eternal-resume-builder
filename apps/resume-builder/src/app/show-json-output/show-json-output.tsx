import React from 'react';

// exteral
import Highlight, { defaultProps }  from 'prism-react-renderer';
import { Box } from "theme-ui";

// internal
import { data } from '@eternal-resume-builder/data';

/* eslint-disable-next-line */
export interface ShowJsonOutputProps {}


export const ShowJsonOutput = (props: ShowJsonOutputProps) => {
  return (
    <Box bg={'red'} p={'10px'}>
      <Highlight {...defaultProps} code={JSON.stringify(data, null, 2)} language="json">
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
