import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import User from './Pages/User/User';
import { restoreUserSession } from './Store/UserSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [sessionRestored, setSessionRestored] = useState(false);

  useEffect(() => {
    dispatch(restoreUserSession()).then(() => setSessionRestored(true));
  }, [dispatch]);

  const token = useSelector((state) => state.user.token);

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return sessionRestored ? (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
