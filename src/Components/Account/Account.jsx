import React from 'react';

import './Account.css';

function Account({title, amount, amountDescription, transactionButton}) {
  return (
    <section class="account">
        <div class="account-content-wrapper">
            <h3 class="account-title">{title}</h3>
            <p class="account-amount">{amount}</p>
            <p class="account-amount-description">{amountDescription}</p>
        </div>
        <div class="account-content-wrapper cta">
            <button class="transaction-button">{transactionButton}</button>
        </div>
    </section>
  )
}

export default Account;