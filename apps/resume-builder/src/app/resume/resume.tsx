import React, { useContext } from 'react';

// external
import { jsx, Box, Divider, Heading, Grid, Text, ThemeProvider } from 'theme-ui';

// internal
import { AppSettingsContext, ResumeContext } from '../app.context';
import { theme as defaultTheme, nord } from '@eternal-resume-builder/themes';

/* eslint-disable-next-line */
export interface ResumeProps {}

export const Resume = (props: ResumeProps) => {
  const [state] = useContext(ResumeContext);
  const [settings] = useContext(AppSettingsContext);
  // const state = sample;

  let theme = defaultTheme;

  switch(settings.theme) {
    case "default": theme = defaultTheme; break;
    case "nord": theme = nord; break;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid gap={2} m='2' sx={{ width: '960px', boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.5)', overflowY: 'scroll'}}>
        <Grid id='et-resume' gap={2} columns={['1fr']} sx={{
          borderLeft: settings.theme === 'nord' ?`5px solid ${theme.colors.primary}` : `none`,
          borderRight: settings.theme === 'nord' ?`5px solid ${theme.colors.primary}` : `none`
        }}>
          <Box p='5'>
            <Heading as="h1" variant="heading">{state?.basics?.name}</Heading>
            <Heading as="h2" variant="heading2">{state?.basics?.label}</Heading>
            <Text variant='text' as="h4">{state?.basics?.email}</Text>
            <Text as="h4">{state?.basics?.phone}</Text>
            <Text as="h4">{state?.basics?.website}</Text>
            <Text as="p">{state?.basics?.location?.address}</Text>
            <Text as="p">{state?.basics?.location?.postalCode}</Text>
            <Text as="p">{state?.basics?.location?.city}</Text>
            <Text as="p">{state?.basics?.location?.countryCode}</Text>
            <Text as="p">{state?.basics?.location?.region}</Text>

            { state?.summary ?
              <>
                <Divider variant="styles.hr"></Divider>
                <Text as="p">{state?.basics?.summary}</Text>
              </> : ``
            }

            { state?.basics?.skillsList?.length ?
              <>
                <Divider></Divider>
                <Heading as="h2">Professional Summary</Heading>
                <Divider></Divider>
              </> : ``
            }

            <ul>
              {
                state?.basics?.skillsList?.map((item, itemIndex) => <li key={itemIndex}>{item}</li> )
              }
            </ul>

            {
              state?.basics?.profiles?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Profiles</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.basics?.profiles?.map((profile, profileIndex) => {
                return (
                  <Box key={profileIndex}>
                    <Text as="p">{profile?.network}</Text>
                    <Text as="p">{profile?.username}</Text>
                    <Text as="p">{profile?.url}</Text>
                  </Box>
                )
              })
            }

            {
              state?.work?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Work</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.work?.map((work, workIndex) => {
                return (
                  <Box key={workIndex}>
                    <Text as="h4">{work?.company}</Text>
                    <Text as="p">{work?.position}</Text>
                    <Text as="p">{work?.website}</Text>
                    <Text as="p">{work?.startDate}</Text>
                    <Text as="p">{work?.endDate}</Text>
                    <Text as="p">{work?.summary}</Text>
                    { work?.highlights.length > 0 ? <Heading as="h4">Highlights</Heading> : '' }
                    <ul>
                      {
                        work?.highlights?.map((highlight, highlightIndex) => <li key={highlightIndex}>{highlight}</li>)
                      }
                    </ul>
                  </Box>
                )
              })
            }

            {
              state?.skills?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Skills</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.skills?.map((skill, skillIndex) => {
                return (
                  1  ?
                    (<Box key={skillIndex}>
                      <strong> {skill.name} </strong> : { skill.keywords.join(',') }
                    </Box>)
                    :
                    (<Box key={skillIndex}>
                      <Text as="h4">{skill?.name}</Text>
                      <Text as="p">{skill?.level}</Text>
                      <ul>
                        { skill?.keywords.map((keyword, keywordIndex) => <li key={keywordIndex}>{keyword}</li> )}
                      </ul>
                    </Box>)
                )
              })
            }

            {
              state?.education?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Education</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.education?.map((education, educationIndex) => {
                return (
                  <Box key={educationIndex}>
                    <Text as="h4">{education?.institution}</Text>
                    <Text as="p">{education?.area}</Text>
                    <Text as="p">{education?.studyType}</Text>
                    <Text as="p">{education?.startDate}</Text>
                    <Text as="p">{education?.endDate}</Text>
                    <Text as="p">{education?.gpa}</Text>
                    { education?.courses?.length > 0 ? <Heading as="h4">Courses</Heading> : '' }
                    <ul>
                      {
                        education?.courses?.map((course, courseIndex) => <li key={courseIndex}>{course}</li> )
                      }
                    </ul>
                  </Box>
                )
              })
            }

            {
              state?.volunteer?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Volunteer</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.volunteer?.map((volunteer, volunteerIndex) => {
                return (
                  <Box key={volunteerIndex}>
                    <Text as="h4">{volunteer?.organization}</Text>
                    <Text as="p">{volunteer?.position}</Text>
                    <Text as="p">{volunteer?.website}</Text>
                    <Text as="p">{volunteer?.startDate}</Text>
                    <Text as="p">{volunteer?.endDate}</Text>
                    <Text as="p">{volunteer?.summary}</Text>
                    { volunteer?.highlights.length > 0 ? <Heading as="h4">Highlights</Heading> : '' }
                    <ul>
                      {
                        volunteer?.highlights?.map((highlight, highlightIndex) => <li key={highlightIndex}>{highlight}</li>)
                      }
                    </ul>
                  </Box>
                )
              })
            }

            {
              state?.awards?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Awards</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.awards?.map((award, awardIndex) => {
                return (
                  <Box key={awardIndex}>
                    <Text as="h4">{award?.title}</Text>
                    <Text as="p">{award?.date}</Text>
                    <Text as="p">{award?.awarder}</Text>
                    <Text as="p">{award?.summary}</Text>
                  </Box>
                )
              })
            }

            {
              state?.publications?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Publications</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.publications?.map((publication, publicationIndex) => {
                return (
                  <Box key={publicationIndex}>
                    <Text as="h4">{publication?.name}</Text>
                    <Text as="p">{publication?.publisher}</Text>
                    <Text as="p">{publication?.releaseDate}</Text>
                    <Text as="p">{publication?.website}</Text>
                    <Text as="p">{publication?.summary}</Text>
                  </Box>
                )
              })
            }

            {
              state?.languages?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">Languages</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.languages?.map((language, languageIndex) => {
                return (
                  <Box key={languageIndex}>
                    <Text as="h4">{language?.language}</Text>
                    <Text as="p">{language?.fluency}</Text>
                  </Box>
                )
              })
            }

            {
              state?.interests?.length > 0 ?
              <>
                <Divider></Divider>
                <Heading as="h2">Interests</Heading>
                <Divider></Divider>
              </> : ``
            }

            {
              state?.interests?.map((interest, interestIndex) => {
                return (
                  <Box key={interestIndex}>
                    <Text as="h4">{interest?.name}</Text>
                    <ul>
                      {
                        interest?.keywords?.map((keyword, keywordIndex) => <li key={keywordIndex}>{keyword}</li>)
                      }
                    </ul>
                  </Box>
                )
              })
            }

            {
              state?.references?.length > 0 ?
                <>
                  <Divider></Divider>
                  <Heading as="h2">References</Heading>
                  <Divider></Divider>
                </> : ``
            }

            {
              state?.references?.map((reference, referenceIndex) => {
                return (
                  <Box key={referenceIndex}>
                    <Text as="h4">{reference?.name}</Text>
                    <Text as="p">{reference?.reference}</Text>
                  </Box>
                )
              })
            }

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
};

export default Resume;
