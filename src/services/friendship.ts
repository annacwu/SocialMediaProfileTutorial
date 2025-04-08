import { createDocumentWithId } from "../api/firestore/DocumentMutator";
import { getDocumentWithCriteria, WhereCriteria } from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Friendship } from "../model/friendship";

export const createFriendshipDocument = async (friendship: Friendship) => {
    await createDocumentWithId(FIREBASE_COLLECTIONS.FRIENDSHIP, friendship.id, friendship,);
};

export const getFriendshipsForUser = async (user: string) => {
    const criteria: WhereCriteria = {
        field: 'users',
        operation: 'array-contains',
        criteria: user,
    };

    const resp = await getDocumentWithCriteria(FIREBASE_COLLECTIONS.USER, criteria);

    if (resp === null) {
        console.log("get post doc failed");
        return null;
    }
    return resp as Friendship[]; // TEMPORARY FIX
};