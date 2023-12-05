import React from "react";
import { Button, MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom";
import { Root } from "postcss";

const input: React.FC = () => {
  return (
    <>
      <Button>Button</Button>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));


export default input;
