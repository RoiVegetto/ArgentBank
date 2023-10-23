import React from 'react';
import styles from './SignInForm.module.css';

function SignInForm() {
  return (
    <section className={styles["sign-in-content"]}>
      <i className={`fa fa-user-circle ${styles["sign-in-icon"]}`}></i>
      <h1>Sign In</h1>
      <form>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles["input-remember"]}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        <a href="./user.html" className={styles["sign-in-button"]}>Sign In</a>
        {/* SHOULD BE THE BUTTON BELOW */}
        {/* <button className={styles["sign-in-button"]}>Sign In</button> */}
      </form>
    </section>
  );
}

export default SignInForm;
