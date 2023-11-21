import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Store/UserSlice';

function Navbar(props) {
    const token = useSelector((state) => state.user.token);
    const userDetails = useSelector((state) => state.user.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
      dispatch(logoutUser());
      navigate('/login');
    };

    const isLoggedIn = !!token;

    return (
      <nav className={styles['main-nav']}>
        <a className={styles['main-nav-logo']} href={"./"}>
          <img
            className={styles['main-nav-logo-image']}
            alt="Argent Bank Logo"
            src={props.logo}
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </a>
        <div className={isLoggedIn ? styles['main-nav-item-container-connected'] : ''}>
          {isLoggedIn ? (
            <>
              <a className={styles['main-nav-item-connected']} href="./profile">
                <i className="fa fa-user-circle"></i>
                {userDetails?.firstName}
              </a>
              <div className={styles['main-nav-item-connected']} onClick={handleSignOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </div>
            </>
          ) : (
            <a className={styles['main-nav-item']} href="./login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
        </div>
      </nav>
    );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Navbar;
