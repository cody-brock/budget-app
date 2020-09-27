# Roadmap

## Now
- reduce logo font size for small screens
- new branch - add in extensive code comments
- make Readme nicer
- DB How to seed information
- Controller -> Models
- Beautify dashboard.
- (see budget section below)

### Next:
- DB
-- How to seed information

- User Controller
-- get logic out of controller and into models
-- reduce repitition between user/expense logic

- Starting App
-- Consolidate "npm start" and "nodemon index/server"

- README
-- Improve it for others to read!

- Dashboard
-- Finish making it look nice
-- Add some other insights or tools (saving goals, loan calculator, etc)

- To Turn into Components
-- (none at the moment)

- About Me
-- Add one, why not.  Link it from the bottom nav (and top?)

- Budget
-- Make the save button look nicer.
-- Add something after user saves - sweetalert?
-- Add a loading image for while the GET requests are being made.
-- Track if user has made changes.  If they have, warn them before leaving page.
-- Allow users without profiles to use, like a demo.  Then in order to save, create profile.

- Dashboard
-- Displays result of what user entered.
-- Forecast - calculate accumulating savings over months, or diminishing from total.  User can enter goal.



### Icebox:
- To do's - minor
-- Turn jumbotron into a component (can accept props.children for different stuff below title)
-- get rid of extra line when collapse sections on budget
-- How to organize the CSS?  One file like current?  Or split into many?
-- More things that can be turned into components?
- To do's - major
-- Improve variable naming.
-- User can delete fields (will this be possible?)
-- User can edit fields (will this be possible?)



### Ideas
- On dashboard - have loan calculator - enter loans and their interest, and enter a monthly payment amount - calculates total interest paid, helps user find how much is appropriate to put towards loans.
- When user comes to page, a series of instructions show (depending if they've been there before?  Or a button in corner of screen asking them if they'd like instructions?
- scrollspy on the budget page?
- demo version without need to sign in

### Done!
- ✓ Figure out how to structure DB.
- ✓ User can get info from DB onto the Budget component.
- ✓ User can save changes they make on the Budget component back into the DB.
- ✓ Subtotals and totals display on DOM.
- ✓ Beautify the login page.
- ✓ Beautify the signup page.
- ✓ Add a bottom navbar
- ✓ Make jumbo a component



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
