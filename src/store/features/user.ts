import { createSlice } from '@reduxjs/toolkit';
import {User} from '../../model/user';

type UserInitialState = User;

const initialState: UserInitialState = {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    bio: ''
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
    },
});

export const UserActions = user.actions;

export default user.reducer;