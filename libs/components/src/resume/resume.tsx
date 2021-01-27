import React, { useContext } from 'react';

// external
import {
  jsx,
  Box,
  Divider,
  Flex,
  Heading,
  Grid,
  Text,
  useThemeUI,
  Badge,
} from 'theme-ui';

// internal
import {
  AppSettingsContext,
  ResumeContext,
} from '@eternal-resume-builder/util';
import { defaultTheme, nord } from '@eternal-resume-builder/themes';

/* eslint-disable-next-line */
export interface ResumeProps {}

export const Resume = (props: ResumeProps) => {
  const { state } = useContext(ResumeContext);
  const [settings] = useContext(AppSettingsContext);
  const context = useThemeUI();
  // const state = sample;

  return (
    <Grid
      gap={2}
      m="2"
      sx={{
        width: '960px',
        boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.5)',
        overflowY: 'scroll',
      }}
    >
      <Grid
        id="et-resume"
        gap={2}
        columns={['1fr']}
        sx={{
          background: `${context.theme.colors.background}`,
          borderLeft:
            settings.theme === 'nord'
              ? `5px solid ${context.theme.colors.primary}`
              : `none`,
          borderRight:
            settings.theme === 'nord'
              ? `5px solid ${context.theme.colors.primary}`
              : `none`,
        }}
      >
        <Box p="5">
          <Flex>
            <Box sx={{ flex: '1 1 auto' }}>
              <Heading as="h1" variant="heading">
                {state?.basics?.name}
              </Heading>
              <Heading as="h2" variant="heading2">
                {state?.basics?.label}
              </Heading>
              <Text as="span" sx={{ color: context.theme.colors.text }}>
                {state?.basics?.location?.city}
              </Text>
              , &nbsp;
              <Text as="span" sx={{ color: context.theme.colors.text }}>
                {state?.basics?.location?.region}
              </Text>
              , &nbsp;
              <Text as="span" sx={{ color: context.theme.colors.text }}>
                {state?.basics?.location?.countryCode}
              </Text>{' '}
              &nbsp;
              <Text as="span" sx={{ color: context.theme.colors.text }}>
                {state?.basics?.location?.postalCode}
              </Text>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Text variant="text" as="h4">
                {state?.basics?.email}
              </Text>
              <Text as="h4">{state?.basics?.phone}</Text>
              <Text as="h4">{state?.basics?.url}</Text>
            </Box>
          </Flex>

          {state?.basics.summary ? (
            <>
              <Divider variant="styles.hr"></Divider>
              <Text as="p">{state?.basics?.summary}</Text>
            </>
          ) : (
            ``
          )}

          {/* {state?.basics?.skillsList?.length ?
            <>
              <Divider></Divider>
              <Heading as="h2">Professional Summary</Heading>
              <Divider></Divider>
            </> : ``
          }

          <ul>
            {
              state?.basics?.skillsList?.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)
            }
          </ul> */}

          {/* {
              state?.basics?.profiles?.length > 0 ?
                <Box>
                  <Divider></Divider>
                  <Heading as="h2">Profiles</Heading>
                  <Divider></Divider>
                </Box> : ``
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
            } */}

          {state?.skills?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Skills</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.skills?.map((skill, skillIndex) => {
            return 1 ? (
              <Box key={skillIndex}>
                <strong> {skill.name} </strong> : {skill.keywords.join(',')}
              </Box>
            ) : (
              <Box key={skillIndex}>
                <Text as="h4">{skill?.name}</Text>
                <Text as="p">{skill?.level}</Text>
                <ul>
                  {skill?.keywords.map((keyword, keywordIndex) => (
                    <li key={keywordIndex}>{keyword}</li>
                  ))}
                </ul>
              </Box>
            );
          })}

          {state?.work?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Work</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.work?.map((work, workIndex) => {
            return (
              <Box key={workIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">{work?.name}</Text>
                    <Text as="p">{work?.position}</Text>
                    <Text as="p">{work?.url}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="span">{work?.startDate}</Text> - &nbsp;
                    <Text as="span">{work?.endDate}</Text>
                  </Box>
                </Flex>
                <Text as="p">{work?.summary}</Text>
                {work?.highlights.length > 0 ? (
                  <Heading as="h4">Highlights</Heading>
                ) : (
                  ''
                )}
                <ul>
                  {work?.highlights?.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </Box>
            );
          })}

          {state?.projects?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Projects</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.projects?.map((project, projectIndex) => {
            return (
              <Box key={projectIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">
                      {project?.name}
                      <Badge as="span" m="1">
                        {project?.entity}
                      </Badge>
                      <Badge as="span">{project?.type}</Badge>
                    </Text>
                    <Text as="p">{project?.description}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="span">{project?.startDate}</Text> - &nbsp;
                    <Text as="span">{project?.endDate}</Text>
                    <Text as="p">{project?.url}</Text>
                  </Box>
                </Flex>

                {project?.highlights?.length > 0 ? (
                  <Heading as="h4">Highlights</Heading>
                ) : (
                  ''
                )}
                <ul>
                  {project?.highlights?.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>

                {project?.roles?.length > 0 ? (
                  <Heading as="h4">
                    Roles
                    {project?.roles?.map((role, roleIndex) => (
                      <Badge key={roleIndex} m="1">
                        {role}
                      </Badge>
                    ))}
                  </Heading>
                ) : (
                  ''
                )}

                {project?.keywords?.length > 0 ? (
                  <Heading as="h4">
                    Keywords
                    {project?.keywords?.map((keyword, keywordIndex) => (
                      <Badge key={keywordIndex} m="1">
                        {keyword}
                      </Badge>
                    ))}
                  </Heading>
                ) : (
                  ''
                )}
              </Box>
            );
          })}

          {state?.education?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Education</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.education?.map((education, educationIndex) => {
            return (
              <Box key={educationIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">{education?.institution}</Text>
                    <Text as="p">{education?.area}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="span">{education?.startDate}</Text> - &nbsp;
                    <Text as="span">{education?.endDate}</Text>
                  </Box>
                </Flex>
                <Text as="p">{education?.studyType}</Text>
                <Text as="p">{education?.score}</Text>
                {education?.courses?.length > 0 ? (
                  <Heading as="h4">Courses</Heading>
                ) : (
                  ''
                )}
                <ul>
                  {education?.courses?.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </Box>
            );
          })}

          {state?.volunteer?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Volunteer</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.volunteer?.map((volunteer, volunteerIndex) => {
            return (
              <Box key={volunteerIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">{volunteer?.organization}</Text>
                    <Text as="p">{volunteer?.position}</Text>
                    <Text as="p">{volunteer?.url}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="span">{volunteer?.startDate}</Text> - &nbsp;
                    <Text as="span">{volunteer?.endDate}</Text>
                  </Box>
                </Flex>
                <Text as="p">{volunteer?.summary}</Text>
                {volunteer?.highlights.length > 0 ? (
                  <Heading as="h4">Highlights</Heading>
                ) : (
                  ''
                )}
                <ul>
                  {volunteer?.highlights?.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </Box>
            );
          })}

          {state?.awards?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Awards</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.awards?.map((award, awardIndex) => {
            return (
              <Box key={awardIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">{award?.title}</Text>
                    <Text as="p">{award?.awarder}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="p">{award?.date}</Text>
                  </Box>
                </Flex>
                <Text as="p">{award?.summary}</Text>
              </Box>
            );
          })}

          {state?.publications?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Publications</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.publications?.map((publication, publicationIndex) => {
            return (
              <Box key={publicationIndex}>
                <Flex>
                  <Box sx={{ flex: '1 1 auto' }}>
                    <Text as="h3">{publication?.name}</Text>
                    <Text as="p">{publication?.publisher}</Text>
                    <Text as="p">{publication?.url}</Text>
                  </Box>
                  <Box sx={{ textAlign: 'end' }}>
                    <Text as="p">{publication?.releaseDate}</Text>
                  </Box>
                </Flex>
                <Text as="p">{publication?.summary}</Text>
              </Box>
            );
          })}

          {state?.languages?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Languages</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.languages?.map((language, languageIndex) => {
            return (
              <Box key={languageIndex}>
                <Text as="h3">{language?.language}</Text>
                <Text as="p">{language?.fluency}</Text>
              </Box>
            );
          })}

          {state?.interests?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">Interests</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.interests?.map((interest, interestIndex) => {
            return (
              <Box key={interestIndex}>
                <Text as="h3">{interest?.name}</Text>
                <ul>
                  {interest?.keywords?.map((keyword, keywordIndex) => (
                    <li key={keywordIndex}>{keyword}</li>
                  ))}
                </ul>
              </Box>
            );
          })}

          {state?.references?.length > 0 ? (
            <>
              <Divider></Divider>
              <Heading as="h2">References</Heading>
              <Divider></Divider>
            </>
          ) : (
            ``
          )}

          {state?.references?.map((reference, referenceIndex) => {
            return (
              <Box key={referenceIndex}>
                <Text as="h3">{reference?.name}</Text>
                <Text as="p">{reference?.reference}</Text>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Resume;
