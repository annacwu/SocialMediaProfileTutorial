import { createDocumentWithId } from "../api/firestore/DocumentMutator";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Post } from "../model/post";

export const createPostDocument = async (post: Post) => {
    await createDocumentWithId(FIREBASE_COLLECTIONS.POST, post.id, post,);
};