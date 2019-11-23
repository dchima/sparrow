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
    body1: ['Hey there! I’m Chima. I’m a software engineer based in Lagos, Nigeria. I spend most of my time building and designing great applications for the web. People with great ideas are all around us, searching for the right tools to help move the world forward. I’m the guy that spends his time building those tools.', <div><br /> <br/></div>, 'Here are a list of my alma maters:'],
    body2: ['After graduating from the University of Leeds, I started work with ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>, ' where I head and manage their technology department. I am currently working with ', <a href='https://youtube.com'>Fourshores Inc</a>, ' where I help develop useful tools and products ready for the Nigerian Market.', <div><br /> <br/></div>, 'Here are a few technologies I work with:'],
    body3: ['After graduating from the University of Leeds, I started work with ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>, ' where I head and manage their technology department. I am currently developing useful tools and products ready for the Nigerian Market.', <div><br /> <br/></div>, 'Here are a few technologies I work with:'],

  },
  contactText: `I look forward to hearing from you and getting 
                you closer to the world you imagine. `,
  project1: [
    {
      title: 'Site Verson 1',
      body: 'First iteration of my personal website (should be the exact page you’re on). Built with react and hosted on heroku app.',
      github: 'https://github.com/dchima/sparrow',
      externalLink: 'https://danielchima.herokuapp.com/',
      tools: ['NodeJs', 'ReactJs', 'Heroku', 'Html', 'Git'],
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
      body: 'An iOS electronics component toolbox app for calculating resistors and capacitors. Built using Objective C',
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
      body: 'A small react/node project for adding conference talks to a list. App hosted on heroku',
      github: 'https://github.com/dchima/conference-api',
      externalLink: 'https://conference-client.herokuapp.com/',
      tools: ['ReactJs', 'NodeJs', 'Postgres', 'Heroku', 'Hound', 'Travis', 'Coveralls'],
    },
  ],
  project2: [
    {
      title: 'Games on Bare Metal',
      body: 'An embedded project done on the DE1-SoC development board. Created an interactive gaming environment on bare metal.',
      github: 'https://github.com/dchima/bare-metal-game',
      document: 'https://drive.google.com/file/d/1gCzwcel9w6xTq-PHSNZ7XoDiYebEYCD-/view?usp=sharing',
      tools: ['C', 'ARM', 'Git'],
    },
    {
      title: 'SLAM Robot',
      body: 'Design of a robotic framework for real world navigation and mapping of the environment, using ROS',
      document: 'https://drive.google.com/file/d/1W-bsAlU2EXvd07LQDhvnGN33oSGxg3d-/view?usp=sharing',
      tools: ['ROS', 'Python', 'C', 'CPlus', 'RaspberryPi'],
    },
    {
      title: 'Temperature Logger',
      body: 'An embedded system to perform the function of detecting, logging and displaying of current environment temperature',
      github: 'https://github.com/dchima/temp-logger',
      document: 'https://drive.google.com/file/d/11b-tco-xchsS3UdsmAyWqAqKikqD8IXL/view?usp=sharing',
      tools: ['CPlus', 'ARM'],
    },
    {
      title: 'Alarm Clock',
      body: 'Designed an alarm system (state machine) unto an embedded processor',
      document: 'https://drive.google.com/file/d/1rP6NEZyC2cfWlet2ff4_lrCSu6sxYWAJ/view?usp=sharing',
      tools: ['C', 'ARM'],
    },
    {
      title: 'FPGA Basketball Video Game',
      body: 'Design and implementation of a basketball video game via VGA display, VHDL language and Digilent FPGA system.',
      github: 'hhttps://github.com/dchima/basketball-game.git',
      document: 'https://drive.google.com/file/d/1LmPTrmdzX_aJNc-3wMziCvBzC_Dz11ku/view?usp=sharing',
      tools: ['FPGA', 'Xilinx'],
    },
    {
      title: 'Ping Pong',
      body: 'A retro ping pong game written on the DE1-SoC board FPGA partition.',
      github: 'https://github.com/dchima/ping-pong.git',
      document: 'https://drive.google.com/file/d/1rMSqbgzzwuZfno08FbHSqS0W_yWcOIDj/view?usp=sharing',
      tools: ['Xilinx', 'FPGA', 'ARM'],
    },
  ],
};
export default content;
