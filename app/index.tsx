import { Redirect } from 'expo-router';
import { ROUTES } from "../src/routes";
import { useAppDispatch } from '../src/store';
import { PostsActions } from '../src/store/features/posts';
import { POSTS } from '../src/data/posts';
import { useEffect } from 'react';

const Root = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(PostsActions.addPosts(POSTS));
  }, []);

  return <Redirect href={ROUTES.ROOT} />;
}

export default Root;

