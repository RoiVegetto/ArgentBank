import React from 'react';

import './Header.css';

function Header() {
  return (
    <>
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
    </>
  )
}

export default Header;