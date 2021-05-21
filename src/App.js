import React from "react";
import { Grommet, Box, Main } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { HeaderNavigation } from "./components/header";
import { FooterExample } from "./components/footer";

const App = () => {
  return (
    <Grommet theme={hpe} style={{ minHeight: "100%", width: "auto" }} full>
      <Box fill>
        <HeaderNavigation />
        <Main
          pad={{ horizontal: "medium", vertical: "small" }}
          flex
          fill={false}
        >
          {" "}
          Hello, World!
        </Main>
        <FooterExample />
      </Box>
    </Grommet>
  );
};
export default App;
