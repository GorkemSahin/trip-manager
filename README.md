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

## Known Issues

* Nested fields (address.zip and address.country) do not get re-validated in real time after the initial submit attempt as intended due to what I think is a bug caused by react-hook-form. I debugged it using getValues and errors, both of which are acquired through the useForm() hook. Even though the values were updated, these changes were not reflected upon the nested fields' errors like they are for others. I also checked the useTripValidation hook and made sure the errors array it returned was updated correctly. I have already contacted the development team of react-hook-form and am waiting for their response. Please see: https://i.imgur.com/3zk5D2n.jpg
* The datepicker library I used does not support popping above or belov the input field based on the current scroll position, which forces the user to scroll down or up before picking a date. I may replace it with another one later.
* react-hook-form can't auto-scroll to controlled components without an actual input since it relies on onFocus. The dropdown selector I coded is not based on an <input/> element, so it can't be automatically scrolled to upon an error. The component can be re-designed (which would be better in terms of semantics as well) or a custom solution such as scrollToTop() can be implemented if more time is to be invested in this project.

## Notes

* This web application was developed using Google Chrome. I didn't do extensive testing with other browsers but I believe they'd do fine as well.
* Initially I wanted to get going with Redux, Saga, Reselect and Ant Design but Ant Design was too opinionated to reach the same look on the design guideline. I'd like to demonstrate app state management with a context provider, an async middleware and memoized selectors but for an application of this size those felt like an overkill, and you had already seen some of my previous work where I implemented these (mobile-movies-browser and currency-converter).
* I had not worked with SWR, Styled Components or react-hook-form before, but since these were mentioned on the assignment paper, I thought now would be a good time to get some practice in with these tools. I read through the documentations and did some additional reading on how the community utilizes these tools, but I believe I may have missed out on some of the best practices due to my lack of experience with the mentioned libraries. This was also my first time coding a responsive website without using Bootstrap or Ant Design.

## Modules and Components

### /api

The default configuration consisting of a base URL and an authorization header for all API calls are implemented via Axios.

### /assets

Here are the SVG icons exported from Figma. These are all exported as ReactComponents.

### /components

Dummy components with limited responsibility, mostly used for visual purposes.

#### /button

A button component that can be used with text and icon or only an icon based on the props. Some of the styling was achieved with CSS attribute selectors defined in styled-components' global styles.

#### /datepicker

Styled and customized version of react-datetime.

#### /field

Enhances child input elements with a label and an error message. Also disables all pointer events and changes the background color of input elements if the parent <fieldset> is disabled.

#### /placeholders

These placeholders replace the actual content of the pages while they are loading or an error has occured. The hard-coded tips and tricks displayed on the right sidebar is also here.

#### /selectWithIcon

I decided to code my own reusable and customizable dropdown menu instead of opting for a 3rd party solution to achieve the same look on the design guideline.

#### /trip

Serves as some sort of a high-order component (not exactly a HOC since it doesn't receive a component as prop) that returns a card or a row based on the device and props, and populates them with data.

### /constants

Here are the constant values used for theming, API calls, validation schema and menu items.

### /containers

Smart components that consist of multiple components and have relatively more responsibility and business logic.

#### /countrySelector

This container populates the aforementioned selectorWithIcon with countries and placeholders. Options are memoized since the calculation is costly. The list of countries were supposed to be fetched from the back-end but the icons were stored locally so I decided to code a small getFlag() util function at /assets/index.js. In a PROD env. I'd expect the flags to be served from the back-end as well and this would not be necessary.

#### /tripForm

Receives trip, editable and onSubmit props. Provides visual form, populates it with data if a trip prop was passed, enables or disables interaction based on the editable prop and executes the onSubmit prop upon submission.

### /hooks

##### useResponsiveness

Returns isMobile and hideInfoSideBar values based on current window width.

##### useTitle

Returns the title to display on the header based on current route.

##### useCountries, useTrip, useTrips

A layer of abstraction on top of SWR. Dispatches an action to fetch new values, returns the cached values until a response is acquired and then validates.

##### useCountryVisuals

Provides the flag and label visuals for a given country code.

##### useTripValidation

Returns a memoized callback function for the validation of tripForm using react-hook-form.

### layout

#### /content

All react-douter-dom navigation takes place within this component. Scrolls to top upon navigaiton.

#### /navSideBar

A responsive sidebar for navigation. Can be toggled on or off using the menuButton when on mobile.

### /pages

Consists of a switch of react-router-dom, routes and corresponding pages.

#### /details

Displays a tripForm container after fetching the trip. Decides if the form is editable or not and passes an onSubmit prop to the form. onSubmit function puts the updated trip with an HTTP request and mutates the cached data for the request if no errors occur and the response is 2XX. Navigates back to the /list page but also passes the id and data related to the updated trip so that the changes can be reflected visually almost immediately.

#### /list

Fetches and lists all trips ordered by start_date. Mutates the cached list when props are received via react-router-dom from /details or /new pages, adding a new trip or replacing an existing one based on whether there's an id prop or not, and finally validating the changes.

#### /new

Displays a tripForm container for the user to add a new trip. /details and /new pages are seperated for development convenience because /details contain a lot of business logic not required by /new. This did not cause a violation of the DRY principle since tripForm is quite reusable.



