import React from 'react';

/** @jsx jsx */
import { jsx, Button, Flex } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

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
    <Flex sx={{flexDirection: 'column', px: 4, py: 3}}>
      <h1>About</h1>
      <p>
        Experimental resume builder using CSS Grid for layout.
      </p>
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
