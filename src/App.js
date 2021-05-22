import React from "react";
import { Grommet, Box, Main } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Grommet theme={hpe} style={{ minHeight: "100%", width: "auto" }} full>
      <Box fill>
        <Header />
        <Main
          pad={{ horizontal: "medium", vertical: "small" }}
          flex
          fill={false}
        >
          Hello, World!
        </Main>
        <Footer />
      </Box>
    </Grommet>
  );
};
export default App;
