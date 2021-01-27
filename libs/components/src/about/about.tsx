import React from 'react';
import { Redirect } from 'react-router-dom';

/** @jsx jsx */
import { jsx, Box, Button, Flex } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// components
import { EtLinkButton } from '../elements';

/* eslint-disable-next-line */
export interface AboutProps {
  gotoView: (v: string) => void;
  pdf: () => void;
  theme: any;
}

const menuItems = [
  {
    name: 'forms',
    title: 'Edit Resume',
    faIcon: faKeyboard,
    prop: 'gotoView',
    gotoView: 'forms',
    show: true,
    routerLink: true,
  },
  {
    name: 'code',
    title: 'Export JSON',
    icon: '</>',
    prop: 'gotoView',
    gotoView: 'code',
    show: true,
    routerLink: true,
  },
  {
    name: 'pdf',
    title: 'Export PDF',
    faIcon: faDownload,
    prop: 'pdf',
    show: false,
    routerLink: false,
  },
];

export const About = (props: AboutProps) => {
  console.log(props);
  return (
    <Flex sx={{ flexDirection: 'column', height: '100%', px: 4, py: 3 }}>
      <h1>About</h1>
      <h3>
        [Work In Progress] <br />
        Resume Builder.
      </h3>
      <Box sx={{ flexGrow: 1 }}></Box>
      {/* <Button sx={{width: "100%"}} variant="elevated" mb='2' onClick={e => props.gotoView('forms')}> Edit Resume </Button>
      <Button sx={{width: "100%"}} variant="elevated" mb='2' onClick={e => props.gotoView('code')}> Export Resume </Button> */}
      {/* <Button variant="elevated" onClick={e => props.pdf()}> Generate HTML </Button> */}
      {menuItems.map((item, index) =>
        item.routerLink ? (
          <EtLinkButton to={`/${item.name}`} key={index} theme={props.theme}>
            {/* { view[item.name] ? <span > {`.`} </span> : `` } */}
            {item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : ``}
            {item.icon ? item.icon : ``}
            &nbsp;
            {item.title}
          </EtLinkButton>
        ) : (
          <Button
            key={index}
            variant="elevated"
            sx={{ width: '100%', fontWeight: '700' }}
            mt="2"
            mb="2"
            onClick={(e) => {
              return item.gotoView
                ? props[item.prop](item.gotoView)
                : props[item.prop]();
            }}
          >
            {item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : ``}
            {item.icon ? item.icon : ``}
            &nbsp;
            {item.title}
          </Button>
        )
      )}
    </Flex>
  );
};

export default About;
