import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { useUserProfile } from '../../Hook/useUserProfile';

function Header() {
  const { userDetails, editableFirstName, setEditableFirstName, editableLastName, setEditableLastName, handleUserProfileUpdate } = useUserProfile();
  const [isEditing, setIsEditing] = useState(false);
  const token = useSelector((state) => state.user.token);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
    setIsEditing(false);
  };
  
  const handleSaveClick = async () => {
    await handleUserProfileUpdate(userDetails.id, token, editableFirstName, editableLastName);
    setIsEditing(false);
  };

  return (
    <div className={styles.header}>
      {isEditing ? (
                <>
                <h1>Welcome back</h1>
                <input 
                  type="text"
                  value={editableFirstName || ''}
                  onChange={(e) => setEditableFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input 
                  type="text"
                  value={editableLastName || ''}
                  onChange={(e) => setEditableLastName(e.target.value)}
                  placeholder="Last Name"
                />
                <div>
                  <button className={styles["save-button"]} onClick={handleSaveClick}>Save</button>
                  <button className={styles["cancel-button"]} onClick={handleCancelClick}>Cancel</button>
                </div>
              </>
      ) : (
        <>
          <h1>Welcome back<br />{`${userDetails?.firstName} ${userDetails?.lastName}`}</h1>
          {userDetails && <button className={styles["edit-button"]} onClick={handleEditClick}>Edit Name</button>}
        </>
      )}
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
}

export default Header;