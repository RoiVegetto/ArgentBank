import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <>
        <div className={styles.header}>
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className={styles["edit-button"]}>Edit Name</button>
        </div>
        <h2 className={styles["sr-only"]}>Accounts</h2>
    </>
  )
}

export default Header;
