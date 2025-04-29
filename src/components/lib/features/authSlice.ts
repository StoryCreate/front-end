import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import API from '../../../services/axiosInstance';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    bio: string;
    profession: string;
    interests: string[];
    instagram: string;
    facebook: string;
    linkedin: string;
    // Add more fields as needed
}

interface AuthState {
    user: any;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

// Async Thunks
export const signUp = createAsyncThunk(
    'auth/signUp',
    async (payload: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        username?: string;
        bio?: string;
        identityFile: File | null;
    }, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('password', payload.password);
            formData.append('confirmPassword', payload.confirmPassword);
            if (payload.username) {
                formData.append('username', payload.username);
            }
            if (payload.bio) {
                formData.append('bio', payload.bio);
            }
            if (payload.identityFile) {
                formData.append('id_upload', payload.identityFile);
            }

            const response = await API.post('/api/v1/creators/auth/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (err: any) {
            console.error('Signup error:', err.response?.data || err.message);
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Signup failed. Please try again.');
        }
    }
);

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (payload: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await API.post('/api/v1/creators/auth/login', payload);
            // Return the nested data payload containing token and user
            return response.data.data || response.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Sign in failed');
        }
    }
);

// Add fetchProfile thunk
export const fetchProfile = createAsyncThunk<User, void, { state: { auth: AuthState } }>(
    'auth/fetchProfile',
    async (_, { getState, rejectWithValue }) => {
        const token = getState().auth.token;

        if (!token) {
            return rejectWithValue('No token found');
        }

        try {
            const response = await axios.get('http://localhost:3001/api/v1/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.data; // Return the user data from the response
        } catch (err: any) {
            console.error('Error fetching profile:', err);
            return rejectWithValue(err.response?.data?.message || 'Failed to fetch profile');
        }
    }
);

// Add updateProfile thunk
export const updateProfile = createAsyncThunk(
    'auth/updateProfile',
    async (
        payload: {
            firstName: string;
            lastName: string;
            profession?: string;
            bio?: string;
            location?: string;
            interests?: string[];
            instagram?: string;
            facebook?: string;
            linkedin?: string;
        },
        thunkAPI
    ) => {
        try {
            // Assuming backend accepts JSON for profile updates
            const res = await API.patch('/api/v1/users/profile', payload);
            return res.data.data || res.data;
        } catch (err: any) {
            console.error('Update profile error:', err.response?.data || err.message);
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Update profile failed');
        }
    }
);

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
        logout(state) {
            state.user = null;
            state.token = null;
            Cookies.remove('token'); // ✅ Remove token from cookie
        },
    },
    extraReducers: (builder) => {
        builder
            // Signup
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                Cookies.set('token', action.payload.token); // ✅ Save token to cookie
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Signin
            .addCase(signIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload;
                Cookies.set('token', action.payload.token); // ✅ Save token to cookie
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Fetch Profile
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
            // Update Profile
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                // Replace user with updated data
                state.user = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setToken, setUser, updateUser, logout } = authSlice.actions;
export default authSlice.reducer;