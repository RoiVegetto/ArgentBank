import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Account.module.css';

function Account({ title, amount, amountDescription, transactionButton }) {
  return (
    <section className={styles.account}>
      <div className={styles["account-content-wrapper"]}>
        <h3 className={styles["account-title"]}>{title}</h3>
        <p className={styles["account-amount"]}>${amount}</p>
        <p className={styles["account-amount-description"]}>{amountDescription}</p>
      </div>
      <div className={`${styles["account-content-wrapper"]} ${styles.cta}`}>
        <button className={styles["transaction-button"]}>{transactionButton}</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountDescription: PropTypes.string.isRequired,
  transactionButton: PropTypes.string.isRequired,
};

export default Account;
