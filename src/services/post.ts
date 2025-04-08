import { createDocumentWithId } from "../api/firestore/DocumentMutator";
import { getDocumentWithCriteria, WhereCriteria } from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Post } from "../model/post";

export const createPostDocument = async (post: Post) => {
    await createDocumentWithId(FIREBASE_COLLECTIONS.POST, post.id, post,);
};

export const getPostsForUser = async (user: string) => {
    const criteria: WhereCriteria = {
        field: 'user',
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