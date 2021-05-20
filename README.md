## Chapter One: Setup your application with Grommet and grommet-theme-hpe
### Objective
---------------------------------------
At the end of this chapter, you will:
1. Understand the roles of Grommet, grommet-theme-hpe, and React in the HPE Design System ecosystem
2. Have installed the necessary HPE Design System dependencies
3. Have a “Hello World” application that we build-out into a richer application in subsequent chapters
### Fundamentals
---------------------------------------
React, Grommet, grommet-theme-hpe, and an undestanding of their respective roles in the HPE Design System ecosystem are fundamental to confidently and successfully building this starter application. Below, we’ll cover what each of these is and how they all work together to create the HPE Design System development experience.
#### NPM or Yarn?
You can use npm or [yarn](https://classic.yarnpkg.com/en/docs/getting-started) as your package manager. The HPE Design System uses `yarn`, but both will work.
#### What is React ?
React is an open source JavaScript library. Grommet, which is explained more below, is built using React. While having past experience with React is not necessary to developing with the HPE Design System, gaining some familiarity with the library will make the learning curve easier. If React is new to you, we would recommend taking a look at some of the [React documentation](https://reactjs.org/docs/getting-started.html).
#### What is Grommet ?
Grommet is a React-based component library that provides the components for the HPE Design System. The [Design System documentation site](https://design-system.hpe.design/components) provides specific guidance, best practices, and patterns that are recommended for implementing these components, while a comprehensive list of all available component properties can be found on the [Grommet site](https://v2.grommet.io/components?theme=hpe).
#### What is grommet-theme-hpe?
From component states to font-sizes and more, grommet-theme-hpe determines how the various Grommet components should be styled.
All of the styling defined in grommet-theme-hpe aligns with the styles defined in the [HPE Design System Figma Library](https://www.figma.com/files/815326206297160627/project/6604789/Library?fuid=797166555291394156). By keeping the theme aligned with Figma, we aim to create a shared language between designers and developers that expedites the design to development hand-off.
If you ever find yourself adding your own custom styling (either in an inline “style” tag, as a styled-component, or as a custom theme), this should be a warning that something is wrong or not in sync with recommended Design System guidance. We would suggest you reach out to your designer or the #hpe-design-system Slack channel for recommendations before proceeding with custom styles.
## Let’s get started with the application setup!
---------------------------------------
Now that you have a grasp on the building blocks, let’s start by getting __Grommet__ and all of the necessary dependencies installed into our Create React App.
### Installing the dependencies
We will need to add:
* [grommet](https://github.com/grommet/grommet)
* [grommet-theme-hpe](https://github.com/grommet/grommet-theme-hpe)
* [grommet-icons](https://icons.grommet.io//)
* [styled-components](https://styled-components.com/)
```
$ yarn add grommet styled-components grommet-icons grommet-theme-hpe
```
or for npm users
```
$ npm install grommet styled-components grommet-icons grommet-theme-hpe --save
```
### Running the application
Now that we have all the dependencies we need installed, let’s start the application! :tada:
1. To start the application, run `yarn start` or `npm start`
2. Once your application starts running, you should see the React logo and a note stating __Edit src/App.js and save to reload__.
### Removing unnecessary files and code
Let’s get rid of any clutter by removing  files we won’t be using.
1. In your code editior, go to the `src` folder and delete: ``` App.css, index.css, logo.svg ```
    *  Note: CSS files should not be necessary anywhere in your application because all styling should be coming from the theme.
1. In `App.js`, delete the unused imports: ``` import logo from ‘./logo.svg’; import ‘./App.css’;```
2. In `index.js`, delete the unused import: 
```import './index.css';```
3. In `App.js`, delete all of the following code, we will be replacing it with Grommet code shortly
```
      <header className=“App-header”>
        <img src={logo} className=“App-logo” alt=“logo” />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className=“App-link”
          href=“https://reactjs.org”
          target=“_blank”
          rel=“noopener noreferrer”
        >
          Learn React
        </a>
      </header>
```
At this point, you should be left with just the `div` tag
```
  <div className=“App”>
  </div>
```
### Let’s import React and Grommet
Lets start by adding the necessary imports of React and Grommet, the backbone of our application. The `Grommet` component is going to be the top-level wrapper for the application.
At the top of your `App.js` file, add:
```
import React from ‘react’;
import { Grommet } from ‘grommet’;
```
Now, replace the `div` with `Grommet` and add some simple text like, “Hello, World!“. Your `App.js` file should look like the following:
```
import React from ‘react’;
import { Grommet } from ‘grommet’;
const App = () => {
  return (
    <Grommet>
       Hello, World!
    </Grommet>
  );
}
export default App;
```
### Adding grommet-theme-hpe to your application
Lastly, we will now need to add grommet-theme-hpe to our Grommet tag.
Under the import for `Grommet`, add:
`import { hpe } from ‘grommet-theme-hpe’;`
The Grommet component allows users to specify a theme by adding a `theme` prop. In our case, we will add: ```theme={hpe}```
```
import React from ‘react’;
import { Grommet } from ‘grommet’;
import { hpe } from ‘grommet-theme-hpe’;
const App = () => {
  return (
    <Grommet theme={hpe}>
       Hello, World!
    </Grommet>
  );
}
export default App;
```
We will also need a few other props to the `Grommet` component in order for the container to fill the page. There are a few other styles in which we will need in order to fill the whole page. ```style={{ height: ’100%’, width: ‘auto’ }}``` and `full`
Note: This is one of the only times an inline style tag should be used.
Your code now it should look like the following:
```
import React from ‘react’;
import { Grommet } from ‘grommet’;
import { hpe } from ‘grommet-theme-hpe’;
const App = () => {
  return (
    <Grommet theme={hpe} style={{ height: ’100%’, width: ‘auto’ }} full>
        Hello, World!
    </Grommet>
  );
}
export default App;
```
The application should still be running on `http://localhost:3000/` and your app should looking something like:
(Let’s add a screenshot)
If this is the case, you’re ready to move on to the next chapter! :tada: (edited) 