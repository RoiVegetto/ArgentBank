import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../Store/UserSlice';
import styles from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [editableFirstName, setEditableFirstName] = useState(userDetails?.firstName);
  const [editableLastName, setEditableLastName] = useState(userDetails?.lastName);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!userDetails) {
      dispatch(fetchUserProfile()).then(() => {
        console.log('User profile fetched');
      }).catch((error) => {
        console.error('Error fetching user profile', error);
      });
    }
  }, [userDetails, dispatch]);

  useEffect(() => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
  }, [userDetails]);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
    setIsEditing(false);
  };
  

  const handleSaveClick = async () => {
    const userId = userDetails.id; // Supposons que l'ID est stocké dans userDetails
    
    if (userId && token) {
      const updatedData = {
        userId,
        firstName: editableFirstName,
        lastName: editableLastName,
      };
  
      try {
        const resultAction = await dispatch(updateUserProfile(updatedData));
        if (updateUserProfile.fulfilled.match(resultAction)) {
          // Gestion de la réussite
          setIsEditing(false);
          // Dispatchez une action pour rafraîchir les informations de l'utilisateur si nécessaire
          dispatch(fetchUserProfile());
        } else {
          // Gestion de l'échec
          if (resultAction.payload) {
            console.error('Update failed: ', resultAction.payload);
          } else {
            console.error('Update failed: ', resultAction.error);
          }
        }
      } catch (error) {
        console.error('Failed to update profile', error);
      }
    } else {
      console.error('User ID or token is missing', userDetails);
    }
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


/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../Store/UserSlice';
import styles from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [editableFirstName, setEditableFirstName] = useState(userDetails?.firstName);
  const [editableLastName, setEditableLastName] = useState(userDetails?.lastName);

  useEffect(() => {
    if (!userDetails) {
      dispatch(fetchUserProfile()).then(() => {
        console.log('User profile fetched');
      }).catch((error) => {
        console.error('Error fetching user profile', error);
      });
    }
  }, [userDetails, dispatch]);
  

  useEffect(() => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
  }, [userDetails]);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    try {
      const token =  récupérez le token d'authentification depuis le state Redux ou votre système de stockage ;
      const userId = userDetails.id; // Assurez-vous d'avoir l'ID de l'utilisateur
      const updatedData = {
        firstName: editableFirstName,
        lastName: editableLastName,
      };
  
      const resultAction = await dispatch(updateUserProfile({ token, ...updatedData }));
      if (updateUserProfile.fulfilled.match(resultAction)) {
        // Gestion de la réussite
        setIsEditing(false);
        // Vous voudrez peut-être aussi actualiser les informations de l'utilisateur dans l'état
      } else {
        if (resultAction.payload) {
          // Gérer l'erreur de la réponse payload si elle existe
          console.error('Update failed: ', resultAction.payload);
        } else {
          console.error('Update failed: ', resultAction.error);
        }
      }
    } catch (error) {
      console.error('Failed to update profile', error);
    }
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

export default Header;*/