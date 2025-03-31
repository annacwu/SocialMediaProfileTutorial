import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../model/post';

type PostsInitialState = {
    [key: string]: Post;
};

const initialState: PostsInitialState = {}

export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, action: PayloadAction<Post[]>) => {
            action.payload.map(post => {
                state[post.id] = post;
            });
        },
    },
});

export const PostsActions = posts.actions;

export default posts.reducer;