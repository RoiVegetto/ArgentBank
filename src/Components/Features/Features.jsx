import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Features.module.css';

function Features({ titleItem, content, url }) {
  return (
    <>
      <h2 className={styles["sr-only"]}>Features</h2>
      <div className={styles["feature-item"]}>
        <img src={url} alt="Chat Icon" className={styles["feature-icon"]} />
        <h3 className={styles["feature-item-title"]}>{titleItem}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}

Features.propTypes = {
  titleItem: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Features;
