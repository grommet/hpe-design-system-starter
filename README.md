# Chapter Two: Setup a Header, Main and Footer in our application!

## Objective

At the end of this chapter, you will:

1. Understand the basics of `Box` and how it is used.
2. Understand the importance of layout specific DOM tags such as `<header>`, `<main>`, and `<footer>`
3. Understand how to use `Header`, `Main`, and `Footer` components.
6. Have the scaffolding of your app layout built, which will include a Header, Main, and Footer.

## Fundamentals

Before we get into the specific layout components, we will start with understanding one of Grommet's most fundamental components: `Box`.

### Box

[Box](https://v2.grommet.io/box?theme=hpe#props) is where it all starts. Think of Box as a container that you fill with content, leveraging Box properties to instruct how the content will be laid out. Grommet Box component is built on top of [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). This means that any CSS Flexbox attributes such as `flex-direction` have a corresponding Box prop such as `direction`.

You may notice that Grommet has simplified the naming of these properties and their respective values (as is seen with `flex-direction` --> `direction`), but all Flexbox flexibility is possible.

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

## Let’s get started with the application setup!

1. To start the application, run `yarn start` or `npm start`

If you can recall from our last chapter you should have left off with the followinig in your code. 


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
### Let’s explore Header

Now, we can look at our [Design-System](https://design-system.hpe.design/components/header#header-with-navigation-buttons) to grab a header. Later in our tutorial we are going to address routing so having a header with navigation is what we want for this application. When you go to the link you can see the example as well as a __Show Code__ option under the example. In there we have the following:

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

Before we put this into our code lets talk about a few of these components a little more...

### Button
Within this `Header` we have a `Button` that is wrapping the `logo` as well as the `HPE App Name`. This is an option to have this route back to your main page in the application as the application gets more routes and pages within it. 

### useContext
You can see that `useContext` is added in as being imported from [React](https://reactjs.org/docs/hooks-reference.html#usecontext). You will need this in order to use the `ResponsiveContext`. [ResponsiveContext](https://v2.grommet.io/responsivecontext?theme=hpe) is something we will use often. This allows us to get get the current size of the window to determine if we show mobile view or full screen. In the code we are setting a value of `size` in which will determine weather or not we render something different based on the size. 

### Nav 
Nav is also made from `Box`. This is just the container that holds the `Button` for the different routes. 

### Menu 
We are using `Menu` in order to have a drop that will contain the `Button` routes when in mobile view. 

### HPE Logo

Lucky for us we dont need to do anything special in order to have our Hpe logo at the left side of our `Header` all we do is `import { Hpe } from 'grommet-icons';` Then you can place `<Hpe color="brand" >` in our code.

## Best Practices 
You may think we can just go head and stick this code above our `Hello World`. We can and it would work just fine however we want our code to be organized and clean. Lets start by creating a folder in our `src` folder. This folder will be called `components` Within the `components` folder we can create a file that we can name `header.js`. In here we will copy and paste the code from the [Design-System](https://design-system.hpe.design/components/header#header-with-navigation-buttons).


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

![Chapter-01-Screen](./Chapter-02-first-screen.png)

Definity not the prettiest screen but dont worry we are making great progress! :smiley:

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

![Chapter-01-Screen](./Chapter-02-second-screen.png)

If this is the case, you’re ready to move on to the next chapter! :tada:
