import React, { useContext } from 'react';

// external
import { jsx, Box, Heading, Grid, Text } from 'theme-ui';

// internal
import { ResumeContext } from '../app.context';

/* eslint-disable-next-line */
export interface EternalResumeProps {}

export const EternalResume = (props: EternalResumeProps) => {
  const [state] = useContext(ResumeContext);

  return (
    <Grid gap={2} m='2' sx={{ boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.5)', overflowY: 'scroll'}}>
      <Grid gap={2} columns={[2, '2fr 1fr']}>
        <Box bg='gray.4'>
          <Heading as="h1">{state.basics.name}</Heading>
          <Heading as="h2">{state.basics.label}</Heading>
          <Text as="h4">{state.basics.email}</Text>
          <Text as="h4">{state.basics.phone}</Text>
          <Text as="h4">{state.basics.website}</Text>
          <Text as="h4">{state.basics.summary}</Text>
          <Text as="h4">{state.basics.location.address}</Text>
          <Text as="h4">{state.basics.location.postalCode}</Text>
          <Text as="h4">{state.basics.location.city}</Text>
          <Text as="h4">{state.basics.location.countryCode}</Text>
          <Text as="h4">{state.basics.location.region}</Text>
          <Heading as="h2">profiles</Heading>
          <Text as="h4">{state.basics.profiles[0].network}</Text>
          <Text as="h4">{state.basics.profiles[0].username}</Text>
          <Text as="h4">{state.basics.profiles[0].url}</Text>
          <Text as="h4">{state.basics.profiles[1].network}</Text>
          <Text as="h4">{state.basics.profiles[1].username}</Text>
          <Text as="h4">{state.basics.profiles[1].url}</Text>
          <Heading as="h2">work</Heading>
          <Text as="h4">{state.work[0].company}</Text>
          <Text as="h4">{state.work[0].position}</Text>
          <Text as="h4">{state.work[0].website}</Text>
          <Text as="h4">{state.work[0].startDate}</Text>
          <Text as="h4">{state.work[0].endDate}</Text>
          <Text as="h4">{state.work[0].summary}</Text>
          <Heading as="h2">highlights</Heading>
          <Text as="h4">{state.work[0].highlights[0]}</Text>
          <Heading as="h2">volunteer</Heading>
          <Text as="h4">{state.volunteer[0].organization}</Text>
          <Text as="h4">{state.volunteer[0].position}</Text>
          <Text as="h4">{state.volunteer[0].website}</Text>
          <Text as="h4">{state.volunteer[0].startDate}</Text>
          <Text as="h4">{state.volunteer[0].endDate}</Text>
          <Text as="h4">{state.volunteer[0].summary}</Text>
          <Heading as="h2">highlights</Heading>
          <Text as="h4">{state.volunteer[0].highlights[0]}</Text>
          <Heading as="h2">education</Heading>
          <Text as="h4">{state.education[0].institution}</Text>
          <Text as="h4">{state.education[0].area}</Text>
          <Text as="h4">{state.education[0].studyType}</Text>
          <Text as="h4">{state.education[0].startDate}</Text>
          <Text as="h4">{state.education[0].endDate}</Text>
          <Text as="h4">{state.education[0].gpa}</Text>
          <Heading as="h2">courses</Heading>
          <Text as="h4">{state.education[0].courses[0]}</Text>
          <Text as="h4">{state.education[0].courses[1]}</Text>
          <Heading as="h2">awards</Heading>
          <Text as="h4">{state.awards[0].title}</Text>
          <Text as="h4">{state.awards[0].date}</Text>
          <Text as="h4">{state.awards[0].awarder}</Text>
          <Text as="h4">{state.awards[0].summary}</Text>
          <Heading as="h2">publications</Heading>
          <Text as="h4">{state.publications[0].name}</Text>
          <Text as="h4">{state.publications[0].publisher}</Text>
          <Text as="h4">{state.publications[0].releaseDate}</Text>
          <Text as="h4">{state.publications[0].website}</Text>
          <Text as="h4">{state.publications[0].summary}</Text>
          <Heading as="h2">skills</Heading>
          <Text as="h4">{state.skills[0].name}</Text>
          <Text as="h4">{state.skills[0].level}</Text>
          <Text as="h4">{state.skills[0].keywords[0]}</Text>
          <Text as="h4">{state.skills[0].keywords[1]}</Text>
          <Text as="h4">{state.skills[0].keywords[2]}</Text>
          <Text as="h4">{state.skills[1].name}</Text>
          <Text as="h4">{state.skills[1].level}</Text>
          <Text as="h4">{state.skills[1].keywords[0]}</Text>
          <Text as="h4">{state.skills[1].keywords[1]}</Text>
          <Text as="h4">{state.skills[1].keywords[2]}</Text>
          <Heading as="h2">languages</Heading>
          <Text as="h4">{state.languages[0].language}</Text>
          <Text as="h4">{state.languages[0].fluency}</Text>
          <Heading as="h2">interests</Heading>
          <Text as="h4">{state.interests[0].name}</Text>
          <Text as="h4">{state.interests[0].keywords[0]}</Text>
          <Text as="h4">{state.interests[0].keywords[1]}</Text>
          <Heading as="h2">references</Heading>
          <Text as="h4">{state.references[0].name}</Text>
          <Text as="h4">{state.references[0].reference}</Text>
        </Box>
      </Grid>
    </Grid>

  );
};

export default EternalResume;

  {/*
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
  */}
