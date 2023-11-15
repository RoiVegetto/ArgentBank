import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavbarConnected.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../Store/UserSlice';

function NavbarConnected(props) {
    const userDetails = useSelector((state) => state.user.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      localStorage.removeItem('userToken');
      dispatch(setToken(null));
      navigate('/login');
    };

  return (
    <nav className={styles['main-nav-connected']}>
      <a className={styles['main-nav-logo-connected']} href="./profile">
        <img
          className={styles['main-nav-logo-image-connected']}
          alt="Argent Bank Logo"
          src={props.logo}
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </a>
      <div className={styles['main-nav-item-container-connected']}>
        <a className={styles['main-nav-item-connected']} href="./profile">
          <i className="fa fa-user-circle"></i>
          {`${userDetails?.firstName}`}
        </a>
        <div className={styles['main-nav-item-connected']} onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </div>
      </div>
    </nav>
  );
}

NavbarConnected.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default NavbarConnected;
