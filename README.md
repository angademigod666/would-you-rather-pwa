# would-you-rather-pwa
The Would you rather (react-nd-would-you-rather) app deployed as a PWA.

# Live app link: 
https://wouldyouratherreactpwa.firebaseapp.com/login


# react-nd-would-you-rather
The "Would You Rather?" Project, is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.  In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

# Would You Rather - IInd Project ReactND - ANGAD BINDRA

This is the final assessment project for Udacity's React REdux course. 

To get the app running right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
|
└── src
    ├── actions
    |		├── authedUser.js
    |		├── questions.js
    |		├── shared.js
    |		└── users.js
    |
    ├── assets
    |		├── michael.jpg
    |		├── ryan.jpg
    |		└── tyler.jpg
    |
    ├── middleware
    |		├── index.js
    |		└── logger.js
    |
    ├── reducers
    |		├── index.js
    |		├── wyrAuthedUser.js
    |		├── wyrQuestions.js
    |		└── wyrUsers.js
    |
    ├── utils
    |		├── _DATA_WYR.js
    |		├── api.js
    |		└── helpers.js
    |
    ├── wyr-components
    |		├── App-WYR.js
    |		├── Home.js
    |		├── LeaderBoard.js
    |		├── Login.js
    |		├── Nav.js
    |		├── NewQuestion.js
    |		├── Question.js
    |		├── QuestionDetails.js
    |		├── User.js
    |		└── ViewPoll.js
    |
    ├── index.css
    └── index.js

```

## MOCK Backend Server present inside src/utils/_DATA_WYR.js and src/utils/api.js 

To simplify the development process, a MOCK backend server is present to run the app against. 
The file [`_DATA_WYR.js` , `api.js`](src/utils/_DATA_WYR.js and src/utils/api.js) 
contains the methods we will need to perform necessary operations on the backend:

* [`getWYRInitialData`](#_getUsers and #_getQuestions)
* [`saveQuestion`](#_saveQuestion)
* [`saveQuestionAnswer`](#_saveQuestionAnswer)

### `getAll`
Method Signature:
```js
getWYRInitialData()
```
* Returns a Promise which resolves to a JSON object containing an object of users and questions objects.
* This collection represents all the data currently in the app.



### `update`
Method Signature:
```js
saveQuestion(info)
```
* Returns a Promise which resolves to a JSON object containing the response data of the POST request



### `update`
Method Signature:
```js
saveQuestionAnswer(info)
```
* Returns a Promise which resolves to a JSON object containing a collection of book objects.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
