import { configureStore } from '@reduxjs/toolkit';
import currentPost from './features/currentPost';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    currentPost,
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