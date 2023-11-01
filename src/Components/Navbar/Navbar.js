import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={styles['main-nav']}>
      <a className={styles['main-nav-logo']} href="./index.html">
        <img
          className={styles['main-nav-logo-image']}
          alt="Argent Bank Logo"
          src={props.logo}
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </a>
      <div>
        <a className={styles['main-nav-item']} href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Navbar;
