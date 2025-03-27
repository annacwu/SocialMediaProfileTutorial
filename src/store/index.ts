import { configureStore } from '@reduxjs/toolkit';
import currentPost from './features/currentPost';
import currentUser from './features/currentUser';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import user from './features/user';

const store = configureStore({
  reducer: {
    currentPost,
    currentUser,
    user,
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