---
title: "Restrant"
date: 2022-08-19T22:16:38-04:00
description: REST-Rant is an app where users can review restaurants.
draft: false
github: "https://github.com/JeremyParson/rest-rant-typescript-monorepo.git"
demolink: ""
active: false
menu:
  main:
    title: "The Conceptiverse"
    parent: "Projects"
    weight: 130
---
<h2>Setup</h2>
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a .env file inside of backend. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)

<div class="block-qoute">
PORT=5000<br/>
DB_USERNAME=rest_rant_user<br/>
DB_PASSWORD=password<br/>
DB_DATABASE=rest_rant<br/>
</div>

Next, cd into frontend, and run npm install to install dependencies for the React app.

Finally, in separate terminals, run npm start in each folder so that the API and React app are running at the same time.