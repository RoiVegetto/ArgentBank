import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import './User.css';
import Header from '../../Components/Header/Header';
import Account from '../../Components/Account/Account';


function User() {
  return (
    <>
      <Navbar logo="Images/argentBankLogo.png" />
      <main className="main bg-dark">
        <Header />
        <Account 
            title="Argent Bank Checking (x8349)" 
            amount="$2,082.79"
            amountDescription="Available Balance"
            transactionButton="View Transactions"/>
        <Account 
            title="Argent Bank Savings (x6712)" 
            amount="$10,928.42"
            amountDescription="Available Balance"
            transactionButton="View Transactions"/>       
        <Account 
            title="Argent Bank Credit Card (x8349)" 
            amount="$184.30"
            amountDescription="Current Balance"
            transactionButton="View Transactions"/>
      </main>
      <Footer />
    </>
  )
}

export default User;