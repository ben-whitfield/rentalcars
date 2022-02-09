# RentalCars

Hey :wave:

Thanks for taking the time to look at this.

## Built with
* React
* Typescript

## Points to note
* Included Typescript and Eslint to enforce type checking and general standards of code practice.
* I didn't try to remake the entire page, I just focused on the top part of the UI.
* The UI is not optimised for mobile devices. I have tested this on the device I have available and it is functional but would either:
** need additional media queries
or 
** be designed responsively from the beginning
* I included a selection of tests, this is not a comprehensive list and many more would need to be written to cover all aspects
* Tests are using live data (no stub data or mocked endpoints) due to time constraints. I would not do this in a production project.
* With more time I would have included unit tests to check specific functionality such as the retrieve
* With more time I would have included screenshot and behaviour tests (via puppeteer or something similar)
* Normally I prefer to use SASS for the components to aid maintainability but it seemed unnecessary for this project
* I decided to go with modular CSS to keep components atomic


## Building and Running the app
Should be as simple as cloning the Git repo and running `npm ci`.
This would be followed with `npm run start`
This should give you a locally accessible versio of the app.

## Running the test
`npm run test`

## Live Demo
https://inspiring-poitras-77b63a.netlify.app/
