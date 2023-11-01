import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Tony');
  const [lastName, setLastName] = useState('Jarvis');
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={styles.header}>
        {isEditing ? (
          <>
            <h1>Welcome</h1>
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input 
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <div>
              <button className={styles["save-button"]} onClick={handleSaveClick}>Save</button>
              <button className={styles["cancel-button"]} onClick={handleCancelClick}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button className={styles["edit-button"]} onClick={handleEditClick}>Edit Name</button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  )
}

export default Header;
