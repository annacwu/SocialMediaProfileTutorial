import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { createPostDocument, getAllPosts, getPostsForUser } from "../../services/post";
import { PostsActions } from "../features/posts";

export const getAllPostsThunk = (): AppThunk<void> => {
    return async (dispatch, state) => {
        try {
            const posts = await getAllPosts();
            if (posts) {
                dispatch(PostsActions.addPosts(posts));
            }
        } catch (error) {
            console.log('Could not retrieve posts', error);
        }
    };
};

export const getPostsForUserThunk = (id: string): AppThunk<void> => {
    return async (dispatch, state) => {
        try {
            const postsForUser = await getPostsForUser(id);
            if (postsForUser) {
                dispatch(PostsActions.addPosts(postsForUser));
            }
        } catch (error) {
            console.log('Could not retrieve posts for the user', id, error);
        }
    };
};