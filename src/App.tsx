import React from "react";
import "./App.css"; // tailwind 사용 위해 import

import TopFixedBar from "./components/TopFixedBar";
import Main from "./pages/main/Main";

function App() {
  return (
    <div>
      <TopFixedBar />

      {/* <Main /> */}
    </div>
  );
}

export default App;
