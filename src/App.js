import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import User from './Pages/User/User';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/sign-in.html" element={<SignIn />} />
        <Route path="/user.html" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
