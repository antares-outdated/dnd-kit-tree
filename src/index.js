import React from "react";
import { render } from "react-dom";
import { grommet, Box, Heading, Grommet, Paragraph } from "grommet";

import App from "./App";
const App1 = () => (
  <Grommet theme={grommet}>
    <Box pad="small">
      <Heading level={3}>
        <strong>Hello World</strong>
      </Heading>
      <Paragraph>Hello from a Grommet page!</Paragraph>
      <App />
    </Box>
  </Grommet>
);

render(<App1 />, document.getElementById("root"));
