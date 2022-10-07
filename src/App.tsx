import "./App.css"; // tailwind 사용 위해 import

import TopFixedBar from "./common/components/TopFixedBar";
import MainPages from "./pages/MainPages";

function App() {
  return (
    <div>
      <TopFixedBar />

      <MainPages />
    </div>
  );
}

export default App;
