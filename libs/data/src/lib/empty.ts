import { ResumeSchema } from './resume';

export const empty: ResumeSchema = {
  basics: {
    name: '',
    label: '',
    image: '',
    email: '',
    phone: '',
    url: '',
    summary: '',
    location: {
      address: '',
      postalCode: '',
      city: '',
      countryCode: '',
      region: '',
    },
    profiles: [
      {
        network: '',
        username: '',
        url: '',
      },
    ],
  },
  work: [
    {
      name: '',
      position: '',
      url: '',
      description: '',
      location: '',
      startDate: '',
      endDate: '',
      summary: '',
      highlights: [],
    },
  ],
  volunteer: [
    {
      organization: '',
      position: '',
      url: '',
      startDate: '',
      endDate: '',
      summary: '',
      highlights: [],
    },
  ],
  education: [
    {
      institution: '',
      area: '',
      studyType: '',
      startDate: '',
      endDate: '',
      score: '',
      courses: [],
      url: '',
    },
  ],
  awards: [
    {
      title: '',
      date: '',
      awarder: '',
      summary: '',
    },
  ],
  publications: [
    {
      name: '',
      publisher: '',
      releaseDate: '',
      url: '',
      summary: '',
    },
  ],
  skills: [
    {
      name: '',
      level: '',
      keywords: [],
    },
  ],
  languages: [
    {
      language: '',
      fluency: '',
    },
  ],
  interests: [
    {
      name: '',
      keywords: [],
    },
  ],
  references: [
    {
      name: '',
      reference: '',
    },
  ],
  certificates: [
    {
      name: '',
      date: '',
      issuer: '',
      url: '',
    },
  ],
  projects: [
    {
      name: '',
      description: '',
      endDate: '',
      entity: '',
      highlights: [],
      keywords: [],
      roles: [],
      startDate: '',
      type: '',
      url: '',
    },
  ],
};
