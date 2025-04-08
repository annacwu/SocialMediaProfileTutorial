import { createDocumentWithId } from "../api/firestore/DocumentMutator";
import { getAllDocumentsWithPath, getDocumentWithCriteria, WhereCriteria } from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Post } from "../model/post";

export const createPostDocument = async (post: Post) => {
    await createDocumentWithId(FIREBASE_COLLECTIONS.POST, post.id, post,);
};

export const getPostsForUser = async (user: string) => {
    const criteria: WhereCriteria = {
        field: 'users',
        operation: '==',
        criteria: user,
    };

    const resp = await getDocumentWithCriteria(FIREBASE_COLLECTIONS.POST, criteria);

    if (resp === null) {
        console.log("get post doc failed");
        return null;
    }
    return resp as Post[]; // TEMPORARY FIX
}

// we don't have enough users to make a super specific data flow for which posts are shown
export const getAllPosts = async () => {
    const resp = await getAllDocumentsWithPath(FIREBASE_COLLECTIONS.POST);
    return resp as Post[];
}