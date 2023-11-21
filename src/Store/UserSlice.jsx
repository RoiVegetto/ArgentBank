import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ firstName, lastName }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    const userId = state.user.userDetails.id;

    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }
    if (!userId) {
      return thunkAPI.rejectWithValue('User ID is missing');
    }

    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', 
        { firstName, lastName },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.status !== 200) {
          return thunkAPI.rejectWithValue('Error updating user profile');
      }
  
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response ? error.response.data.message : error.message);
    }
  }
);

export const restoreUserSession = createAsyncThunk(
  'user/restoreUserSession',
  async (_, { dispatch }) => {
    const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
    if (token) {
      dispatch(setToken(token));
      dispatch(fetchUserProfile());
    }
  }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
            const { data } = response;
            if (data && data.body && data.body.token) {
                sessionStorage.setItem('userToken', data.body.token);
                return data.body.token;
            } else {
                return rejectWithValue('No user token found');
            }
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'An unknown error occurred');
        }
    }
)

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    dispatch(setToken(null));
  }
);

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const token = getState().user.token;
    if (!token) {
      return rejectWithValue('No token found');
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(logoutUser());
      }
      return rejectWithValue(error.response ? error.response.data : 'An unknown error occurred');
    }
  }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
      loading: false,
      token: null,
      userDetails: null,
      error: null,
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
      },
    },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Could not log in';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        console.log('fetchUserProfile.fulfilled', action.payload);
        state.userDetails = action.payload.body;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.userDetails = null;
        state.token = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload || 'Could not fetch user profile';
      });
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
