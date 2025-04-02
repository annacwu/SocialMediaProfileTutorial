import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import currentPost from './features/currentPost';
import currentUser from './features/currentUser';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import user from './features/user';
import posts from './features/posts';

const store = configureStore({
  reducer: {
    /***
     * When the User visits the PostDetailPage, the currentPost slice of state is updated with the current post.
     */
    currentPost,
    /***
     * When the User visits the UserDetailPage, the currentUser slice of state is updated with the current user.
     */
    currentUser,
    /***
     * The currently logged in user is stored in the user slice of state.
     */
    user,
    /**
     * posts dump
     */
    posts,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


/***
 * Used throughout the app to write to redux
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/***
 * Used throughout the app to read from redux
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<R> = ThunkAction<R, RootState, unknown, Action<any>>;