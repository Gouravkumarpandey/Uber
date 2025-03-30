import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './components/CaptainProtectWrapper';
import CaptainLogout from './components/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import ErrorBoundary from './components/ErrorBoundary'; // Add ErrorBoundary
import 'remixicon/fonts/remixicon.css'; // Ensure this is correct

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/user/login" element={<UserLogin />} /> {/* Correct route path */}
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
          <Route path="/user/logout" element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
          <Route path="/riding" element={<Riding />} />

          <Route path="/captain-login" element={<Captainlogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
          <Route path="/captain/logout" element={<CaptainProtectWrapper><CaptainLogout /></CaptainProtectWrapper>} />
          <Route path="/captain-riding" element={<CaptainRiding />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;