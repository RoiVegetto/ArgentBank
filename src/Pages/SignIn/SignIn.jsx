import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SignInForm from '../../Components/SignInForm/SignInForm';
import Footer from '../../Components/Footer/Footer';

import styles from './SignIn.module.css';

function SignIn() {
  return (
    <>
      <Navbar logo="Images/argentBankLogo.png" />
      <main className={`${styles.main} ${styles["bg-dark"]}`}>
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}

export default SignIn;
