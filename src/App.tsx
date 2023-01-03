import './App.css'; // tailwind 사용 위해 import
import { Routes, Route } from 'react-router-dom';

import TopFixedBar from './common/components/TopFixedBar';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import WritingPage from './pages/WritingPage';

function App() {
  return (
    <div>
      <TopFixedBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
    </div>
  );
}

export default App;
