import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StudyGroups from './pages/StudyGroups';
import GroupDetail from './pages/GroupDetail';
import Profile from './pages/Profile';
import LiveSession from './pages/LiveSession';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<StudyGroups />} />
          <Route path="/groups/:id" element={<GroupDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/session/:id" element={<LiveSession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;