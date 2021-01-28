import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ThemeProvider, Box, Button, Flex, Grid } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faInfo,
  faDownload,
  faKeyboard,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

import {
  AppSettingsProvider,
  ResumeProvider,
} from '@eternal-resume-builder/util';
import { defaultTheme } from '@eternal-resume-builder/themes';
import { Resume } from '@eternal-resume-builder/components';

import './styles.css';

const menuItems = [
  {
    name: '',
    title: 'About',
    faIcon: faInfo,
    show: true,
  },
  {
    name: 'forms',
    title: 'Forms',
    faIcon: faKeyboard,
    show: true,
  },
  {
    name: 'code',
    title: 'Code',
    faIcon: faCode,
    show: true,
  },
  {
    name: 'export',
    title: 'Export',
    faIcon: faDownload,
    show: false,
  },
  // {
  //   name: 'designx',
  //   title: 'DesignX',
  //   faIcon: faPalette,
  //   show: true,
  // },
];

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [grid, setGrid] = useState(['minmax(auto, 960px) 1fr']);
  const theme = defaultTheme;

  const gotoPage = (page: string) => {
    // to view index page use two forward slash
    page === '' ? router.push('/', '/') : router.push(page);
  };

  return (
    <>
      <Head>
        <title>Resumer.dev!</title>
      </Head>
      <div className="app">
        <header className="flex"></header>
        <main>
          <AppSettingsProvider nextjs>
            <ThemeProvider theme={theme}>
              <ResumeProvider>
                <Grid gap={0} columns={['auto 60px']}>
                  <Grid gap={0} sx={{ gridTemplateRows: '100vh' }}>
                    <Grid gap={2} columns={grid}>
                      <Resume></Resume>
                      <Box
                        sx={{
                          bg: 'gray.3',
                          height: '100vh',
                          overflow: 'scroll',
                        }}
                      >
                        <Component {...pageProps} />
                      </Box>
                    </Grid>
                  </Grid>
                  {/* Right side toolbar */}
                  <Flex
                    sx={{
                      flexDirection: 'column',
                    }}
                    bg="gray.5"
                  >
                    {menuItems.map((item, index) =>
                      item.show ? (
                        <Button onClick={() => gotoPage(item.name)} key={index}>
                          {/* { view[item.name] ? <span > {`.`} </span> : `` } */}
                          {item.faIcon ? (
                            <FontAwesomeIcon icon={item.faIcon} />
                          ) : (
                            ``
                          )}
                        </Button>
                      ) : (
                        ``
                      )
                    )}
                  </Flex>
                </Grid>
              </ResumeProvider>
            </ThemeProvider>
          </AppSettingsProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
