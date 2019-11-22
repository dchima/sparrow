/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import React from 'react';

const content = {
  name: 'Daniel Chima.',
  siteUrl: 'https://danielchima.com',
  email: 'mailto:dcnnad@gmail.com',
  desc: 'I’m a software engineer based in Lagos, Nigeria. I spend most of my time building great applications and tinkering with clocks',
  desc2: 'Let’s build together.',
  about: {
    body1: ['Hey there! I’m Chima. I’m a software engineer based in Lagos, Nigeria. I spend most of my time building and designing great applications for the web. People with great ideas are all around us, searching for the right tools to help move the world forward. I’m the guy that spends his time building these tools.', <div><br /> <br/></div>, 'Here are a list of my alma maters:'],
    body2: ['After graduating from the University of Leeds, I started work with ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>, ' where I head and manage their technology department. I am currently working with ', <a href='https://youtube.com'>Fourshores Inc</a>, ' where I help develop useful tools and products ready for the Nigerian Market.', <div><br /> <br/></div>, 'Here are a few technologies I work with:'],
    body3: ['After graduating from the University of Leeds, I started work with ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>, ' where I head and manage their technology department. I am currently developing useful tools and products ready for the Nigerian Market.', <div><br /> <br/></div>, 'Here are a few technologies I work with:'],

  },
  contactText: `I look forward to hearing from you and getting 
                you closer to the world you imagine. `,
  project1: [
    {
      title: 'Site Verson 1',
      body: 'First iteration of my personal website (should be the exact page you’re on). Build with react and hosted on heroku app.',
      github: 'https://github.com/dchima/sparrow',
      externalLink: 'https://danielchima.herokuapp.com/',
      tools: ['NodeJs', 'ReactJs', 'Heroku', 'Html'],
    },
    {
      title: 'Casper',
      body: 'Backend of a travel and accomodation app for companies and third party suppliers.',
      github: 'https://github.com/casper-inc/casper-backend',
      tools: ['NodeJs', 'Postgres', 'Docker', 'Hound', 'Travis', 'Swagger', 'Heroku', 'Coveralls'],
    },
    {
      title: 'Kampe Sports Group',
      body: 'API for collecting data for aspiring football talents looking for agent representation. Backend hosted on heroku',
      externalLink: 'https://dchima.github.io/kampe-frontend/',
      tools: ['NodeJs', 'ReactJs', 'Postgres', 'Docker', 'Heroku', 'Travis'],
    },
    {
      title: 'ResCap',
      body: 'An iOS electronics component toolbox app for calculating resistors and capacitors. Build using Objective C',
      github: 'https://github.com/dchima/ios-application',
      document: 'https://drive.google.com/file/d/1PNeJ4FtRw4_6eYLa5aQ9HaXqgiFtsHEd/view?usp=sharing',
      tools: ['ObjectiveC', 'XCode'],
    },
    {
      title: 'Wayfarer',
      body: 'API for a bus routing and booking platform for costumers to book and manage local trips.',
      github: 'https://github.com/dchima/WayFarer',
      tools: ['NodeJs', 'Postgres', 'Travis', 'Swagger', 'Coveralls', 'Postman'],
    },
    {
      title: 'Conference Client',
      body: 'A small react project for adding conference talks to a list, api hosted on heroku app',
      github: 'https://github.com/dchima/conference-api',
      externalLink: 'https://conference-client.herokuapp.com/',
      tools: ['ReactJs', 'Postgres', 'Heroku', 'Hound', 'Travis', 'Coveralls'],
    },
  ],
  project2: [
    {
      title: 'Koala League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      externalLink: 'https://www.youtube.com/',
      tools: ['NodeJs', 'ReactJs', 'Postgres'],
    },
    {
      title: 'Damon League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      tools: ['NodeJs', 'ReactJs', 'Postgres'],
    },
    {
      title: 'Ulser League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      tools: ['NodeJs', 'ReactJs', 'Python', 'Css', 'Docker', 'Postgres'],
    },
    {
      title: 'Frezi League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      tools: ['NodeJs', 'ReactJs', 'Postgres', 'Python', 'Html', 'Css'],
    },
    {
      title: 'Mango League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      tools: ['Heroku', 'NodeJs', 'ARM', 'Postgres'],
    },
    {
      title: 'Weck League',
      body: 'After graduating from the University of Leeds, I started work with Zicli Synergy, where I head and manage their technology department.',
      github: 'https://www.youtube.com/',
      document: true,
      tools: ['Html', 'ReactJs', 'Python', 'Css'],
    },
  ],
};
export default content;
