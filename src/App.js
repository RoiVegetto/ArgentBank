import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import User from './Pages/User/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/index.html" element={<Home />} />
          <Route path="/sign-in.html" element={<SignIn />} />
          <Route path="/user.html" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
