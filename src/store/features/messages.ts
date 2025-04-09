import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../model/message';

type MessagesInitialState = {
    [key: string]: Message;
};

const initialState: MessagesInitialState = {}

export const messages = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessages: (state, action: PayloadAction<Message[]>) => {
            action.payload.map(message => {
                state[message.id] = message;
            });
        },
    },
});

export const MessagesActions = messages.actions;

export default messages.reducer;