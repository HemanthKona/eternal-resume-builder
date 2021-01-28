import React from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Flex, useThemeUI } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { downloadPDF } from '@eternal-resume-builder/util';
// components
import { EtLinkButton } from '@eternal-resume-builder/components';

/* eslint-disable-next-line */
export interface AboutProps {}

const menuItems = [
  {
    name: 'forms',
    title: 'Edit Resume',
    faIcon: faKeyboard,
    prop: 'gotoView',
    gotoPage: 'forms',
    show: true,
    routerLink: true,
  },
  {
    name: 'code',
    title: 'Export JSON',
    icon: '</>',
    prop: 'gotoView',
    gotoPage: 'code',
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
  const context = useThemeUI();
  const router = useRouter();

  const gotoPage = (page: string) => {
    router.push(page);
  };

  return (
    <Flex sx={{ flexDirection: 'column', height: '100%', px: 4, py: 3 }}>
      <h1>About</h1>
      <h3>
        [Work In Progress] <br />
        Resume Builder.
      </h3>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Button
        sx={{ width: '100%' }}
        variant="elevated"
        mb="2"
        onClick={(e) => gotoPage('forms')}
      >
        Edit Resume
      </Button>
      {/* <Button
        sx={{ width: '100%' }}
        variant="elevated"
        mb="2"
        onClick={(e) => gotoPage('designx')}
      >
        Edit Design
      </Button> */}
      <Button
        sx={{ width: '100%' }}
        variant="elevated"
        mb="2"
        onClick={(e) => gotoPage('code')}
      >
        Export JSON
      </Button>
      <Button variant="elevated" onClick={(e) => downloadPDF()}>
        {' '}
        Export PDF{' '}
      </Button>
    </Flex>
  );
};

export default About;
