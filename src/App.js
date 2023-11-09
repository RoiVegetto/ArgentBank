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

  useEffect(() => {
    dispatch(restoreUserSession());
  }, [dispatch]);

  const PrivateRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);
    return token ? children : <Navigate to="/sign-in.html" />;
  };

  return sessionRestored ? (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/sign-in.html" element={<SignIn />} />
        <Route
          path="/user.html"
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
