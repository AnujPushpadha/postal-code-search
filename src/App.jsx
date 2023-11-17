import { useState } from "react";

import "./App.css";
import Search from "./features/search/components/Search";
import Display from "./features/search/components/Display";
function App() {
  return (
    <>
      <h1>Postal Code Search</h1>
      <Search></Search>
      <Display></Display>
    </>
  );
}

export default App;
