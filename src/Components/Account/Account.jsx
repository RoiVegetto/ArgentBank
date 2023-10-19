import React from 'react';

import './Account.css';

function Account({title, amount, amountDescription, transactionButton}) {
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">{transactionButton}</button>
        </div>
    </section>
  )
}

export default Account;