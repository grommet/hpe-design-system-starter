# Chapter Two: Setup a Header, Main and Footer in our application!

## Objective

At the end of this chapter, you will:

1. Understand the basics of `Box` and how it is used.
2. Understand the importance of layout specific DOM tags such as `<header>`, `<main>`, `<footer>`, and `<nav>`
3. Understand how to use `Header`, `Main`, `Nav`, and `Footer` components.
4. Understand how to leverage `useContext` and `ResponsiveContext` to create responsive layouts
5. Understand t-shirt sizing and why you should use it instead of custom px values
6. Have the scaffolding of your app layout built, which will include a Header, Main, and Footer.

## Fundamentals

Before we get into the specific layout components, we will start with understanding one of Grommet's most fundamental components: `Box`.

### Box

[Box](https://v2.grommet.io/box?theme=hpe#props) is where it all starts. Think of Box as a container that you fill with content, leveraging Box properties to instruct how the content will be laid out. Grommet Box component is built on top of [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). This means that any CSS Flexbox attributes such as `flex-direction` have a corresponding Box prop such as `direction`.

You may notice that Grommet has simplified the naming of these properties and their respective values (as is seen with `flex-direction` / `direction`), but all Flexbox flexibility is possible.

If you're brand new to Grommet or CSS Flexbox, you may enjoy this [interactive Flexbox Froggy game](https://flexboxfroggy.com/) which can help familiarize you with how the various properties affect the content layout.

Now that you're more familiar with Box, let's get into some of the more layout-specific components.

### Header

Header is a `Box` with some predefined props to help make it easier to use, including an `as="header"` prop which ensures it appears as `<header>` in the DOM. In the [Design System](https://design-system.hpe.design/components/header) you will find different examples of Header populated with various kinds of content. We will be using one of these examples in our application. 

### Main

Main is also a `Box` with predefined props, including an `as="main"` prop which ensures it appears as `<main>` in the DOM.

### Footer

Footer is also a `Box` with predefined props, including an `as="footer"` prop which ensures it appears as `<footer>` in the DOM. We will be using a [Design System Footer](https://design-system.hpe.design/components/footer) to help us build our application footer. 

### Why is it important to use Header, Main, and Footer components as opposed to just Box?

You should use these layout-specific components to ensure that they appear as `<header>`, `<main>`, and `<footer>` in the DOM. This allows screen readers and other assistive technologies to properly interpret the application's content structure. The HPE Design System holds [accessibility](https://design-system.hpe.design/foundation/accessibility) as a core principle because we want all users to have enjoyable experiences using our applications.

If for whatever reason you are not interested in using the layout-specific components and would rather just use Box, make sure you add the appropriate `as` prop so that the Box appears as either a `<header>`, `<main>`, or `<footer>` in the DOM.

Throughout this guide, we will be referencing guidance from WCAG (Web Content Accessibility Guidelines) which is a robust set of accessibility design guidelines for software and web-based products. If you'd like to read more about page regions, you can do so on the [WCAG Page Regions documentation](https://www.w3.org/WAI/tutorials/page-structure/regions/).

## Let’s get started!

To start the application, run `yarn start` or `npm start`

Right now, your code should look like: 

```
const App = () => {
  return (
    <Grommet theme={hpe} style={{ height: ’100%’, width: ‘auto’ }} full>
        Hello, World!
    </Grommet>
  );
}
export default App;

```

### Remember to consider the user's task when selecting a component or pattern

Within the HPE Design System site, there are various examples of how to implement the various components and patterns. As you are building your own application, it's important to **consider what the user is aiming to do** and then choose the combination of components that will best aid that experience.

Often, there may be multiple components or patterns that can "get the job done", but the aim of this guide is to equip you with the knowledge to decide why one component or pattern is better than another for a given use case.

### Let’s add a Header

For our application, the user will need to be able to navigate between various pages. Looking at the documentation for [Header](https://design-system.hpe.design/components/header#header-with-navigation-buttons), you'll see that there are many examples shown. For our use case, the [Header with navigation buttons](https://design-system.hpe.design/components/header#header-with-navigation-buttons) will be most fitting. 

When you go to the above link for "Header with navigation buttons", you will see the example as well as a __Show Code__ option under the example. The intent of these code snippets is to give you a "best practice" reference for a given pattern. In this guide, we'll be copying and pasting various examples as starting points and then modifying them to meet our application's specific needs.

When you expand the "Show Code" section you should see the following:

```
import React, { useContext } from 'react';
import {
  Box,
  Button,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Hpe } from 'grommet-icons';

const items = [
  { label: 'Label 1' },
  { label: 'Label 2' },
  { label: 'Label 3' },
];

export const HeaderNavigationExample = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Header fill="horizontal">
      <Button>
        <Box
          direction="row"
          align="start"
          gap="medium"
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: 'small' }}
          responsive={false}
        >
          <Hpe color="brand" />
          <Box direction="row" gap="xsmall" wrap>
            <Text color="text-strong" weight="bold">
              HPE
            </Text>
            <Text color="text-strong">App Name</Text>
          </Box>
        </Box>
      </Button>
      {size !== 'small' ? (
        <Nav direction="row">
          {items.map(item => (
            <Button label={item.label} key={item.label} />
          ))}
        </Nav>
      ) : (
        <Menu label="Menu" items={items} />
      )}
    </Header>
  );
};
```

### Breaking down what's in this Header example
Before we put this into our code, let's talk about a few of these components a little more...

### 1. Button

`Button` is another fundamental component that is used frequently throughout apps. In this Header, `Button` serves as an interactive element that will enable navigation. Button is used in two ways in this example:
* First, we have a `Button` that is wrapping what we refer to as the AppIdentity, which consists of the HPE Element as well as the application name (In this case, "HPE App Name"). This button should route back to the main page of the application. 
* Second, we use `Button` to create the additional app navigational elements. As of now, they don't route anywhere, but we'll be getting to that in a future chapter. 

### 2. Nav 
Nav, like Header, is another specialized `Box` with some predefined props including an `as="nav"` prop which ensures it appears as `<nav>` in the DOM. The `<nav>` tag indicates to assitive technologies that the elements contained in that region are specific to navigation.

Any time you have a group of navigation related elements, you should wrap them in Nav. In our case, Nav is the container that holds the various Buttons that will later route to different pages. 

### What does "small", "medium", "large" mean for prop values? (t-shirt sizing)

If you haven't already noticed, Grommet uses t-shirt sizing for various prop values. Each t-shirt size corresponds to a specific `px` value that comes from the theme that is applied to the application. For various kinds of styles such as borders, padding, widths, text sizes, and more, t-shirt sizes are defined to help create a more cohesive and consistent visual experience.

When developing with the HPE Design System, you should always use t-shirt sizes. If you find yourself adding custom `px` values to any properties, this should be a warning that you need to consult with your designer about why a custom value is needed. In nearly every case, designs and developement should be using t-shirt sizes.

If you're curious about the exact `px` values of these t-shirt sizes, you can explore [`base.js`](https://github.com/grommet/grommet/blob/master/src/js/themes/base.js) in Grommet. Some of the properties to look would be `edgeSize` (which drives padding and margin values), `borderSize`, and `size` (which drives the width of components such as Box).

For example, in `base.js`, `global.size` contains the following values:
```
xxsmall: `${baseSpacing * 2}px`, // 48
xsmall: `${baseSpacing * 4}px`, // 96
small: `${baseSpacing * 8}px`, // 192
medium: `${baseSpacing * 16}px`, // 384
large: `${baseSpacing * 32}px`, // 768
xlarge: `${baseSpacing * 48}px`, // 1152
xxlarge: `${baseSpacing * 64}px`, // 1536
full: '100%',
```

`baseSpacing` is a value that is used to set the baseline sizing. In our case, `baseSpacing` is 24. Given this, if you were to implement the following code, you would have a Box with width of "192px" and height of "384px".
```
<Box width="small" height="medium" /> 
// width = 192px, height = 384px
```
### 3. React Context, useContext, and ResponsiveContext

Creating experiences that are enjoyable on a range of screen sizes is critical to application development. In order to make this process easier, Grommet has a context called `ResponsiveContext` that provides a way to differ your application's rendering behavior based on the screen resolution.

If you are unfamiliar with contexts, [React Context](https://reactjs.org/docs/context.html) "provides a way to pass data through the component tree without having to pass props down manually at every level." React also provides a hook called [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) that makes it easy to retrieve the current value of a given context.

Grommet's [ResponsiveContext](https://v2.grommet.io/responsivecontext?theme=hpe) is a context that tracks the current size of the user's window. The various screen breakpoints come from `base.js` under [`global.breakpoints`](https://github.com/grommet/grommet/blob/master/src/js/themes/base.js#L164).

The corresponding pixel values are as follows. For example, a screen would be considered "small" anytime the window is less than or equal to 768px wide:
```
small (mobile): 0-768px
medium (tablet): 769px-1536px
large (desktop): > 1536px
```

In development, we frequently want to track when the screen size is "small" or not because this would indicate a shift to mobile screen size, which likely will require layout changes. We often use `size` to determine if an element should appear on the screen or not or if the element's properties should be altered based on the screen size.

In the case of the Header example shared above, you'll see:
```
{size !== 'small' ? (
    <Nav direction="row">
        {items.map(item => (
            <Button label={item.label} key={item.label} />
        ))}
    </Nav>
 ) : (
     <Menu label="Menu" items={items} />
)}
```
This says, "If the screen size is not small, render the entire Nav. Otherwise, if the screen size is small, just render the Menu."

### Menu 

When the user is on mobile, there will likely not be enough screen width to show all navigation items in a row like we do on desktop. Therefore, we want to adjust the rendering of our application on mobile to create a clean experience for the user. In this case, we will condense all the navigation items under a single Menu. 

Menu should be used when the user needs to perform an action from a list of actions. In this case, that action will be navigation to different routes of the app.

When a user clicks on the `Menu`, the different routes will open in a dropdown. Upon clicking an option, the user will be navigated to that route associated with that option. 

In our example we are using a few `Menu` props that we'll talk about below. However, if you'd like to read more about [Menu guidance](https://design-system.hpe.design/components/menu#guidance), you can do so on the Design System site.

 1. The `label` prop is the text the user sees in the Menu button. 
 2. The `items` is an array of objects of what should appear in the Menu dropdown. The object values can be any Button properties. For now, we have set items to the following, but we will be adding other properties in the future once we incorporate the routing:
 ```
  [
  { label: 'Label 1' },
  { label: 'Label 2' },
  { label: 'Label 3' },
];
```

### HPE Element

When you're using icons in your application, you should be able to find them in [Grommet Icons](https://icons.grommet.io//). Icons take `size` and `color` properties to adjust how they look. More often than not, you will be able to use the default size and color. 

For our case, we need the `Hpe` icon. All we do is `import { Hpe } from 'grommet-icons';`. Then you can place `<Hpe color="brand" >` in our code.

## Best Practices 
You may think we can just go ahead and stick this code above our `Hello World`. We can and it would work just fine however we want our code to be organized and clean. Lets start by creating a folder in our `src` folder. This folder will be called `components` Within the `components` folder we can create a file that we can name `header.js`. In here we will copy and paste the code from the [Design-System](https://design-system.hpe.design/components/header#header-with-navigation-buttons).


## Naming convention

In our case `HeaderNavigationExample` does not make sense for our  application so let go ahead and rename this. If we make our way to our `header.js` file then we can edit out the name of the file. To keep our imports simple lets go a head and change the name from `HeaderNavigationExample` to `HeaderNavigation`

+ `export const HeaderNavigation = () => {`

## Importing Header
Now that we have a better naming convention we can import this into our `App.js` file.
 
Your imports should look like the following:

```
import React from "react";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
+ import { HeaderNavigation } from './components/header'

```

Now we can place `HeaderNavigation` right above our `Hello World!` 

```
import React from "react";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import {HeaderNavigation} from './components/header'

const App = () => {
  return (
    <Grommet theme={hpe} style={{ height: "100%", width: "auto" }} full>
    +  <HeaderNavigation />
      Hello, World!
    </Grommet>
  );
};
export default App;

```

The file should now look like the above code in `App.js` 

The application should still be running on `http://localhost:3000/` and your app should looking something like:

![Chapter-02-first-Screen](https://github.com/grommet/hpe-design-system-starter/blob/chapter-02/public/Chapter-02-first-screen.png)

Definitely not the prettiest screen yet, but don't worry we are making great progress! :smiley:

## Footer

### Lets use the similar steps to add in our footer
If we go back to our [Design-System](https://design-system.hpe.design/components/footer) again we will grab a footer from the examples given. In this case we will grab the first example and open up the __Show Code__ to be able to copy the code given. 

Below is the code given for the simple example:

```
import React, { useContext } from 'react';
import { Box, Button, Footer, ResponsiveContext, Text } from 'grommet';

export const FooterExample = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Security' },
    { label: 'Feedback' },
  ];
  return (
    <Footer
      background="background-front"
      direction={size !== 'small' ? 'row' : 'column'}
      align={size !== 'small' ? 'center' : undefined}
    >
      <Box
        direction={size !== 'small' ? 'row' : 'column'}
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
      >
        <Text size="small">
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box
        direction="row"
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {footerLinks.map(link => (
          <Button key={link.label} label={link.label} />
        ))}
      </Box>
    </Footer>
  );
};

```

### Lets stop and understand the code
The footer is very similar to the `Header` in the way that they both use `size` to determine how things are rendered on different screen sizes.

### Making a new file
Just like how we created a new file in our `components` folder we will add a `footer.js` in there as well and paste the code into the new file.

### Import footer in main app
For this example `FooterExample` is fine to keep for the name. We now can add this import under the `HeaderNavigation` 

```
import React from "react";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { HeaderNavigation } from "./components/header";
+ import { FooterExample } from "./components/footer";

```

Once we have this import we can use this within our code. We will add this under our `Hello World` Our App.js should match the following:

```
import React from "react";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { HeaderNavigation } from "./components/header";
+ import { FooterExample } from "./components/footer";

const App = () => {
  return (
    <Grommet theme={hpe} style={{ height: "100%", width: "auto" }} full>
      <HeaderNavigation />
      Hello, World!
    +  <FooterExample />
    </Grommet>
  );
};
export default App;

```

## Adding Main 

For now we can use the `Main` wrapper from grommet. We will use this to wrap around the `Hello World!`

We need to import this from grommet. So this will come after grommet. 

`import { Grommet, Main } from "grommet";`

This main component will also have to match the pad of the `Header` and `Footer` so you will place the following after `HeaderNavigation` and before `FooterExample` 

```
<Main
    pad={{ horizontal: "medium", vertical: "small" }}
    flex
    fill={false}
>
    {" "}
    Hello, World!
</Main>

```

Lets do a quick sanity check and look at our application you should have something like this.

![Chapter-02-Second-Screen](https://github.com/grommet/hpe-design-system-starter/blob/chapter-02/public/Chapter-02-second-screen.png)


If this is the case, you’re ready to move on to the next chapter! :tada:
