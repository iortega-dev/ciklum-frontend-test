# Ciklum Frontend Test - Ignacio Ortega

Project created with CRA (Create React App) & Typescript Template

It includes the following stack:

- [Axios](https://github.com/axios/axios)
- [Bootstrap-grid](https://getbootstrap.com/)
- [Classnames](https://jedwatson.github.io/classnames/)
- [i18next](https://www.i18next.com/)
- [Moment](https://momentjs.com/)
- [React-day-picker](https://react-day-picker.js.org/)
- [React-i18next](https://react.i18next.com/)
- [React-Router-Dom](https://reactrouter.com/)
- [React-super-responsive-table](https://react-super-responsive-table.netlify.app/)
- [Rescripts](https://github.com/harrysolovay/rescripts)
- [Styled Components](https://styled-components.com)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequeriments

#### [Node](https://nodejs.org/en/)

This project is going to use latest LTS v12.18.x

#### [Yarn](https://yarnpkg.com)

Rating
This project is using yarn as package manager please don't use npm
<hr />

## Installing

Install project dependencies with:

```sh
yarn
```
<hr />

## Developing

### Run project

Start project in development mode with:
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Languages (i18n)

The default language is english, this is indicated at the '`i18n.ts`' file.

It's neccesary to use the translation file '`en.json`' and the translation API methods.
<br /><br/>

<hr />

## Github Pages - CI

I've implemented a Github workflow, the following workflow is written [here](https://github.com/iortega-dev/ciklum-frontend-test/blob/master/.github/workflows/pushmaster.yml).

When you push to Master branch, it automatically:
* Checks out a copy of the repository to machine
* Install dependencies and make a build
* Deploys to github pages (https://github.com/marketplace/actions/deploy-to-github-pages)

<b>Note</b>: I have made a number of changes to try to make it work properly in Github Pages, such as changing the paths and the root path of the project.

<b>Note 2</b>: I will create a new branch from last commit before changes done for Github pages named "develop-local".

<hr />

# Test Statement

Create a page displaying the current EuroJackpot draw information similar to
https://www.lottoland.com/en/eurojackpot/results-winning-numbers: you can fetch the
data at run-time from https://media.lottoland.com/api/drawings/euroJackpot, and get the
results of a specific date adding a ‘/yyyymmdd’ path like
https://www.lottoland.com/api/drawings/euroJackpot/20200904).

### Task Requirements
<hr />

- Use REACT (preferred way for this job position, but you can use another framework
if you want to) to implement the page, plus any other library or framework that you
need
- The website should work on all WebKit-based devices, and should be responsive e.g.
look good on desktop as well as tablet and mobile devices
- Use a private GIT repository to host the project code
- Use software development best practices and tools based on your experience and
preferences

### Bonus points (Optional)
<hr />

If you have the time and you also want to complete the bonus parts of this task, you can try
to implement a very basic CI/CD pipeline using available free tools (e.g. GitHub Actions,
Travis CI, Circle CI).<br />

<b>Requirement 1</b>: When committing the code to the master branch, a build of the project
should be triggered, and unit tests should be run: the commit will be executed only if both
steps are successful.<br />

<b>Requirement 2</b>: When a commit is successfully executed on the master branch, a
production build of the latest code version is run, and the project is deployed on a GitHub
page.<br />


### Reviewing the project
<hr />

When you are ready, please provide access to your repo to the email addresses that our HR
will provide you or send a git bundle file so that we can replicate your repo structure in our
local machine.