# Trip Manager

A responsive web application to view, plan and manage business trips. Developed with React, React Router DOM, React Hook Form, Styled Components, SWR and Axios. A brief demonstration can be seen here: https://youtu.be/SGXrALCHoV8

## How to run

Assuming you have Git installed, clone the repo to your local environment with the following command.

`git clone https://github.com/GorkemSahin/trip-manager.git`

Assuming you have npm CL tools already installed, install dependencies via

`npm install` or `yarn install`

Then

`npm start` or `yarn start`

Application should be running at http://localhost:3000/.

## Notes

This web application was developed using Google Chrome.

Initially I wanted to get going with Redux, Saga, Reselect and Ant Design but Ant Design was too opinionated to reach the same look on the design guideline. I'd like to demonstrate app state management with a context provider, an async middleware, memoized selectors but for an application of this size those felt like an overkill, and you had already seen some of my previous work where I implemented these.

I had not worked with SWR, Styled Components or react-hook-form before, but since these were mentioned on the assignment paper, I thought now would be a good time to get some practice in with these tools. I read through the documentations and did some additional reading on how the community utilizes these tools, but I believe I may have missed out on some best practices due to my lack of experience with the mentioned libraries. This was also my first time coding a responsive layout without using any 3rd party libraries such as Ant Design or Bootstrap.
