## App deployed to https://heath-test-app.netlify.app/

## Notes:
1. Send a POST request to the same routes to create a new resident and a new program
2. Attend the new resident to the new program

The UI and API integartion added based on these requirements, but API returns error:

`"Error: \nInvalid prisma.program.create() invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. No 'Applicant' record(s) (needed to inline the relation on 'Program' record(s)) was found for a nested connect on one-to-many relation 'ApplicantToProgram'."`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


test