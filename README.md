# Understanding the fundamentals: Node, package management, code editors, and more


## Objective
At the end of this chapter, you will:

1. Have your system setup with everything you will need to start developing
2. Understand the basics of HTML, CSS, and JavaScript fundamentals (including ES6 features).
3. Understand the basics of React and Styled Components
4. Be ready to start developing with the HPE Design System! 🎉


## System Setup

Before starting with any development work, let's make sure your local environment is all setup and ready to go. 

### Node.js 

First, you will need to install [Node.js](https://nodejs.org/en/download/) on your local machine. What Node.js does is it takes all of our JavaScript code and coverts to a faster machine code, in which the computer can run on. 

### Choosing a package manager

A package manager is "a collection of tools that automate the process of installing, upgrading, configuring, and removing computer programs in a consistent manner." Often times, applications rely on various packages to run and each of these packages could have different releases and versions. A package manager ensures the version you have specified is what is run in your application.

There are two main package managers: NPM and Yarn. Let's discuss each one a little bit.

### NPM

[NPM](https://docs.npmjs.com/about-npm) comes bundled with Node.js. If you've already installed Node with the steps above, then you will already have NPM installed as well.

NPM allows you to:
- You can use NPM to add packages of code for your application. 
- Manage multiple versions of code and their dependencies.
- Update applications easily when there are updates on code. 

### Yarn

Yarn, like NPM, is a package manager that can be used with Node.js. However, Yarn is not already bundled with Node.js, so it requires an additional installation step. The installation is simple, and you can follow the [Yarn Installation Guide](https://yarnpkg.com/getting-started/install) to install it on your system.

### NPM vs Yarn

So, which package manager should you use? There are many blogs that talk about the differences between [NPM and Yarn](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/). We would recommend reading some blogs and deciding which is best for your team. NPM is extremely popular because it is the default package manager that comes with Node.js, but Yarn has continued to gain popularity because of enhancements it has made surrounding performance and security.

Ultimately, it is your choice between NPM and Yarn. The HPE Design System team uses Yarn, but some product teams consuming the HPE Design System use NPM. Both will work with the HPE Design System.

### Code Editor

Now that you have Node.js and your package manager installed, let's move on to installing a code editor if you don't already have one. The code editor is where you will be able to locally edit/write code.


There are many code editors to choose from, but we would recommend __Visual Studio Code__. If you don't already have a code editor installed, go ahead and [download Visual Studio Code](https://code.visualstudio.com/). With an integrated terminal and various plugins, Visual Studio Code makes it easy to run/test your application locally, push/pull code directly to and from Github, and leverage various plugins to expedite/enhance your local development process.

## Development Fundamentals

Let's talk code! The following concepts are fundamental to developing with the HPE Design System. Before jumping straight into building an application, let's go over how these building blocks set the stage for developing with the HPE Design System.

### HTML & CSS

HTML and CSS are the most foundational web development languages.
* [HTML](https://www.w3schools.com/html/html_intro.asp#:~:text=HTML%20stands%20for%20Hyper%20Text,how%20to%20display%20the%20content), Hyper Text Markup Language, describes the structure of a webpage. You can think of it as the skeleton that says what is contained in a page (header, paragraph, button, footer).
* [CSS](https://www.w3schools.com/css/), Cascading Style Sheets, describes how the elements of a webpage should be styled. For example, should the paragraph be green? Should the button in a row with the text or below it? etc.

If HTML and CSS are brand new to you, we would recommend you spend some time with the introductory tutorials linked above.


### JavaScript 

* [JavaScript](https://www.w3schools.com/js/default.asp) is used to motify the content of websites too behave a certain way. 

JavaScript is the programming language that will add interactivity to your elements on your website. Knowing the [basics in JavaScript](https://www.freecodecamp.org/news/getting-started-with-react-a-modern-project-based-guide-for-beginners-including-hooks-2/#basicjavascript) will help you understand the way React works. I would also recommend looking into the [ES6 features](https://www.w3schools.com/js/js_es6.asp). 

### React

React is an open source JavaScript library. Grommet, which is explained more in the next chapter, is built using React. While having past experience with React is not necessary to developing with the HPE Design System, gaining some familiarity with the library will make the learning curve easier. If React is new to you, we would recommend taking a look at some of the [React documentation](https://reactjs.org/docs/getting-started.html).
