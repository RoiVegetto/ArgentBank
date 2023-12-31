import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/UserSlice';
import { useNavigate } from 'react-router-dom';

import styles from './SignInForm.module.css';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.user);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLoginEvent = (e) => {
    e.preventDefault();
    const userCredentials = { email, password };

    dispatch(loginUser(userCredentials))
      .unwrap()
      .then((token) => {
        if (rememberMe) {
          localStorage.setItem('userToken', token);
        } else {
          sessionStorage.setItem('userToken', token);
        }
        navigate('/profile');
      })
      .catch((err) => {
        console.error('Failed to login:', err);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={styles["sign-in-content"]}>
      <i className={`fa fa-user-circle ${styles["sign-in-icon"]}`}></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLoginEvent}>
      <div className={styles["input-wrapper"]}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={email} onChange={handleEmailChange} />
    </div>
    <div className={styles["input-wrapper"]}>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
    </div>
    <div className={styles["input-remember"]}>
      <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
      <label htmlFor="remember-me">Remember me</label>
    </div>
        <button href="./profile" className={styles["sign-in-button"]}>
          {loading?'loading...':'Login'}
        </button>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error.message ? error.message : 'An unknown error occurred'}
          </div>
        )}
      </form>
    </section>
  );
}

export default SignInForm;
