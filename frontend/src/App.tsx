import React from "react";
import { Navigation } from "./template/Navigation";
import { Content } from "./template/Content";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../frontend/src/style.css";

function App() {
  return (
    <>
      <Navigation />
      <Content />
    </>
  );
}

export default App;
