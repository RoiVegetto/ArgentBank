import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../Store/UserSlice';

export function useUserProfile() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const [editableFirstName, setEditableFirstName] = useState(
    userDetails?.firstName
  );
  const [editableLastName, setEditableLastName] = useState(
    userDetails?.lastName
  );

  useEffect(() => {
    setEditableFirstName(userDetails?.firstName);
    setEditableLastName(userDetails?.lastName);
  }, [userDetails]);

  useEffect(() => {
    if (!userDetails) {
      dispatch(fetchUserProfile());
    }
  }, [userDetails, dispatch]);

  const handleUserProfileUpdate = async (
    userId,
    token,
    firstName,
    lastName
  ) => {
    if (userId && token) {
      const updatedData = {
        userId,
        firstName,
        lastName,
      };

      try {
        const resultAction = await dispatch(updateUserProfile(updatedData));
        if (updateUserProfile.fulfilled.match(resultAction)) {
          dispatch(fetchUserProfile());
        } else {
          // Gérer les erreurs ici
        }
      } catch (error) {
        console.error('Failed to update profile', error);
      }
    } else {
      console.error('User ID or token is missing');
    }
  };

  return {
    userDetails,
    editableFirstName,
    setEditableFirstName,
    editableLastName,
    setEditableLastName,
    handleUserProfileUpdate,
  };
}
