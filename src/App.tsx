import "./App.css"; // tailwind 사용 위해 import
import { Routes, Route } from "react-router-dom";

import TopFixedBar from "./common/components/TopFixedBar";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <div>
      <TopFixedBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
