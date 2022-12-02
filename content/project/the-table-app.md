---
title: "The Table App"
date: 2022-08-19T22:16:38-04:00
description: The Table is a web application that provides Dungeons and Dragons players with the resources necessary to play the game online with friends. 
draft: false
github: "https://github.com/JeremyParson/the-table-app-mono-repo"
demolink: "http://thetable.us-east-1.elasticbeanstalk.com/"
active: false
menu:
  main:
    title: "The Table App"
    parent: "Projects"
    weight: 130
---
The Table app hosts simple tools for creating campaigns, session management, character creation, and much more. I made this app because I enjoy playing Dungeons and Dragons with friends and sometimes you can't meet up in person.

<h2>Demo</h2>
You can visit the site by clicking here. Once you create an account you can access the apps features through the dashboard. You can create a campaign, characters, and handouts to give to players.

<h2>Technologies</h2>
This app was built with the following technologies: React JS Express JS Mongoose Socket IO

<b>Frontend</b>
The frontend uses a Presentation, Domain, and Data layer architecture to allow separation of concerns in large stateful components.

<b>Backend</b>
The backend is a REST api that uses an ORM that interfaces with a remote mongo database.

Bugs and missing features.
Character creation needs more polishing
Campaign resources cannot be edited
Server does not parse list data properly
Socket io updates are buggy between mobile and desktop
Certain resources should not be visible to players in session
GM should be able to see additional information

<img src="/images/homepage.png" />
<img src="/images/game.png" />
<br/>