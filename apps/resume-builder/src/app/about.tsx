import React from 'react';

/** @jsx jsx */
import { jsx, Box, Button, Flex } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface AboutProps {
  gotoView: (v: string) => void;
  pdf: () => void;
}

const menuItems = [{
  name: 'forms',
  title: 'Edit Resume',
  faIcon: faKeyboard,
  prop: 'gotoView',
  gotoView: 'forms',
  show: true
},
{
  name: 'code',
  title: 'Export JSON',
  icon: '</>',
  prop: 'gotoView',
  gotoView: 'code',
  show: true
},
{
  name: 'pdf',
  title: 'Export PDF',
  faIcon: faDownload,
  prop: 'pdf',
  show: true
}]

export const About = (props: AboutProps) => {
  return (
    <Flex sx={{flexDirection: 'column', height: '100%', px: 4, py: 3}}>
      <h1>About</h1>
      <h3>
        [Work In Progress] <br />
        Resume Builder.
      </h3>
      <Box sx={{flexGrow: 1}}></Box>
      {/* <Button sx={{width: "100%"}} variant="elevated" mb='2' onClick={e => props.gotoView('forms')}> Edit Resume </Button>
      <Button sx={{width: "100%"}} variant="elevated" mb='2' onClick={e => props.gotoView('code')}> Export Resume </Button> */}
      {/* <Button variant="elevated" onClick={e => props.pdf()}> Generate HTML </Button> */}
      {
        menuItems.map((item, index) =>
          item.show ?
          <Button
            key={index}
            sx={{width: "100%"}}
            variant="elevated"
            mb='2'
            onClick={e => {
              return item.gotoView ? props[item.prop](item.gotoView) : props[item.prop]()
            }}>

            { item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : `` }
            { item.icon ? item.icon  : `` }
            &nbsp;
            {item.title}

          </Button>
            : ``
        )
      }

    </Flex>
  );
};

export default About;
