# Trip Manager

A responsive web application to view, plan and manage business trips. Developed with React, React Router DOM, React Hook Form, Styled Components, Open API TypeScript Codegen, SWR and Axios.

## How to run

Assuming you have Git installed, clone the repo to your local environment with the following command.

`git clone https://github.com/GorkemSahin/trip-manager.git`

Assuming you have npm CL tools already installed, install dependencies via

`npm install` or `yarn install`

Then

`npm start` or `yarn start`

Application should be running at http://localhost:3000/.

## Known Issues

- The datepicker library I used does not support popping above or below the input field based on the current scroll position, which forces the user to scroll down or up before picking a date. I may replace it with another one later.
- Trip deletion has no visual feedback to indicate that the trip is being deleted, I may add some animated loading icon to the delete button or darken the background color during deletion later, if I decide to invest more time.
