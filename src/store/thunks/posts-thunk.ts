import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { createPostDocument, getPostsForUser } from "../../services/post";
import { PostsActions } from "../features/posts";

export const getPostsForUserThunk = (id: string): AppThunk<void> => {
return async (dispatch, state) => {
    const user = state().user;

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