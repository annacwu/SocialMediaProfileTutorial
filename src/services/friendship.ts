import { createDocumentWithId, updateDocument } from "../api/firestore/DocumentMutator";
import { getDocumentWithCriteria, WhereCriteria } from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Friendship } from "../model/friendship";

export const createFriendshipDocument = async (friendship: Friendship) => {
    await createDocumentWithId(FIREBASE_COLLECTIONS.FRIENDSHIP, friendship.id, friendship,);
};

export const updateFriendshipDocument = async (friendship: Friendship) => {
    await updateDocument(FIREBASE_COLLECTIONS.FRIENDSHIP, friendship.id, friendship,);
};

export const getFriendshipsForUser = async (user: string) => {
    const criteria: WhereCriteria = {
        field: 'users',
        operation: 'array-contains',
        criteria: user,
    };

    const resp = await getDocumentWithCriteria(FIREBASE_COLLECTIONS.FRIENDSHIP, criteria);

    if (resp === null) {
        console.log("get post doc failed");
        return null;
    }
    return resp as Friendship[]; // TEMPORARY FIX
};