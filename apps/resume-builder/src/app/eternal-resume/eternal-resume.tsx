import React, { useContext } from 'react';

// external
import { jsx, Box, Divider, Heading, Grid, Text } from 'theme-ui';

// internal
import { ResumeContext } from '@eternal-resume-builder/util';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

export const EternalResume = (props: EternalResumeProps) => {
  const { state } = useContext(ResumeContext);

  return (
    <Grid
      gap={2}
      m="2"
      sx={{ boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.5)', overflowY: 'scroll' }}
    >
      <Grid gap={2} columns={['1fr']}>
        <Box bg="gray.4" p="5">
          <Heading as="h1">{state.basics.name}</Heading>
          <Heading as="h2">{state.basics.label}</Heading>
          <Text as="h4">{state.basics.email}</Text>
          <Text as="h4">{state.basics.phone}</Text>
          <Text as="h4">{state.basics.url}</Text>
          <Divider></Divider>
          <Text as="p">{state.basics.summary}</Text>
          <Text as="p">{state.basics.location.address}</Text>
          <Text as="p">{state.basics.location.postalCode}</Text>
          <Text as="p">{state.basics.location.city}</Text>
          <Text as="p">{state.basics.location.countryCode}</Text>
          <Text as="p">{state.basics.location.region}</Text>
          <Divider></Divider>

          <Heading as="h2">Profiles</Heading>
          <Divider></Divider>
          <Text as="p">{state.basics.profiles[0].network}</Text>
          <Text as="p">{state.basics.profiles[0].username}</Text>
          <Text as="p">{state.basics.profiles[0].url}</Text>
          <Text as="p">{state.basics.profiles[1].network}</Text>
          <Text as="p">{state.basics.profiles[1].username}</Text>
          <Text as="p">{state.basics.profiles[1].url}</Text>
          <Divider></Divider>

          <Heading as="h2">Work</Heading>
          <Divider></Divider>
          <Text as="h4">{state.work[0].name}</Text>
          <Text as="p">{state.work[0].position}</Text>
          <Text as="p">{state.work[0].url}</Text>
          <Text as="p">{state.work[0].startDate}</Text>
          <Text as="p">{state.work[0].endDate}</Text>
          <Text as="p">{state.work[0].summary}</Text>
          <Heading as="h4">Highlights</Heading>
          <ul>
            <li>{state.work[0].highlights[0]}</li>
          </ul>
          <Divider></Divider>

          <Heading as="h2">Volunteer</Heading>
          <Divider></Divider>
          <Text as="h4">{state.volunteer[0].organization}</Text>
          <Text as="p">{state.volunteer[0].position}</Text>
          <Text as="p">{state.volunteer[0].url}</Text>
          <Text as="p">{state.volunteer[0].startDate}</Text>
          <Text as="p">{state.volunteer[0].endDate}</Text>
          <Text as="p">{state.volunteer[0].summary}</Text>
          <Heading as="h4">Highlights</Heading>
          <ul>
            <li>{state.volunteer[0].highlights[0]}</li>
          </ul>
          <Divider></Divider>

          <Heading as="h2">Education</Heading>
          <Divider></Divider>
          <Text as="h4">{state.education[0].institution}</Text>
          <Text as="p">{state.education[0].area}</Text>
          <Text as="p">{state.education[0].studyType}</Text>
          <Text as="p">{state.education[0].startDate}</Text>
          <Text as="p">{state.education[0].endDate}</Text>
          <Text as="p">{state.education[0].score}</Text>
          <Heading as="h4">Courses</Heading>
          <ul>
            <li>{state.education[0].courses[0]}</li>
            <li>{state.education[0].courses[1]}</li>
          </ul>
          <Divider></Divider>

          <Heading as="h2">Awards</Heading>
          <Divider></Divider>
          <Text as="h4">{state.awards[0].title}</Text>
          <Text as="p">{state.awards[0].date}</Text>
          <Text as="p">{state.awards[0].awarder}</Text>
          <Text as="p">{state.awards[0].summary}</Text>
          <Divider></Divider>

          <Heading as="h2">Publications</Heading>
          <Divider></Divider>
          <Text as="h4">{state.publications[0].name}</Text>
          <Text as="p">{state.publications[0].publisher}</Text>
          <Text as="p">{state.publications[0].releaseDate}</Text>
          <Text as="p">{state.publications[0].url}</Text>
          <Text as="p">{state.publications[0].summary}</Text>
          <Divider></Divider>

          <Heading as="h2">Skills</Heading>
          <Divider></Divider>
          <Text as="h4">{state.skills[0].name}</Text>
          <Text as="p">{state.skills[0].level}</Text>
          <ul>
            <li>{state.skills[0].keywords[0]}</li>
            <li>{state.skills[0].keywords[1]}</li>
            <li>{state.skills[0].keywords[2]}</li>
          </ul>
          <Text as="h4">{state.skills[1].name}</Text>
          <Text as="p">{state.skills[1].level}</Text>
          <ul>
            <li>{state.skills[1].keywords[0]}</li>
            <li>{state.skills[1].keywords[1]}</li>
            <li>{state.skills[1].keywords[2]}</li>
          </ul>
          <Divider></Divider>

          <Heading as="h2">Languages</Heading>
          <Divider></Divider>
          <Text as="h4">{state.languages[0].language}</Text>
          <Text as="p">{state.languages[0].fluency}</Text>
          <Divider></Divider>

          <Heading as="h2">Interests</Heading>
          <Divider></Divider>
          <Text as="h4">{state.interests[0].name}</Text>
          <ul>
            <li>{state.interests[0].keywords[0]}</li>
            <li>{state.interests[0].keywords[1]}</li>
          </ul>
          <Divider></Divider>

          <Heading as="h2">References</Heading>
          <Divider></Divider>
          <Text as="h4">{state.references[0].name}</Text>
          <Text as="p">{state.references[0].reference}</Text>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EternalResume;

{
  /*
    <Box bg={'blue'}>
  <Heading as="h1">{state.basics.name}</Heading>
  <br/>
  <Heading as="h2">{state.basics.label}</Heading>
  <br/>
  <Heading as="h3">{state.basics.picture}</Heading>
  <br/>
  <Heading as="h3">{state.basics.email}</Heading>
  <br/>
  <Heading as="h3">{state.basics.phone}</Heading>
  <br/>
  <Heading as="h3">{state.basics.website}</Heading>
    </Box>
  */
}
