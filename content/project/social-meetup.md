---
title: "Social Meet Up"
date: 2022-08-19T22:16:38-04:00
description: The Social Meet Up App is a web application where users setup events at public locations and can find events associated with certain hobbies. The app was made to promote outdoor activities and leaving the house after the pandemic.
draft: false
github: "https://github.com/JeremyParson/social-meet-up-monorepo"
demolink: ""
active: false
menu:
  main:
    title: "Social Meet Up"
    parent: "Projects"
    weight: 130
---
<h2>Demo</h2>
<p>You can visit the site here.<p>

<h2>Technologies</h2>
The app's frontend was built using React.js for client side rendering and Tailwind CSS for styling.

<p>The backend uses Node JS and Express JS to handle api calls.<p>

<h2>Setup</h2>
Follow the instructions below to get an instance of the app working on your setup.

Prerequisites:
<br>
  <p><b> Must have PGAdmin4 installed </b><p>
  <p><b> Must have Node JS installed </b><p>

<h3>Backend</h3>
<ul>
  <li>In PGAdmin4 create a new database for the app</li>
  <li>First fork this repository and clone it to your computer</li>
  <li>CD into the backend folder and run npm install</li>
  <li>Open config.js in the configuration folder and under the "development" configuration fill in your database configuration info.</li>
  <li>Run npx sequelize db:migrate:all to migrate the necessary tables database</li>
  <li>The backend is now ready, run npm run dev to start your app using the development configuration.</li>
</ul>
<h3>Frontend</h3>
<ul>
  <li>CD into the frontend folder and run npm install</li>
  <li>Create a .env file with the variable REACT_APP_SERVER_URL and set it to the url of the backend server (by default it's http://localhost:3001)</li>
  <li>Run npm run start to start the react app</li>
</ul>

