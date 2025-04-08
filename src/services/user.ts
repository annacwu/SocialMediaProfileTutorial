import { createDocumentWithId } from "../api/firestore/DocumentMutator";
import { getDocumentWithCriteria, getDocumentWithPathAndId, WhereCriteria } from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { User } from "../model/user";

export const createUserDocument = async (user: User) => {
    const resp = await createDocumentWithId(FIREBASE_COLLECTIONS.USER, user.id, user,);
};

export const getUserDocumentWithEmail = async (email: string) => {
    const criteria: WhereCriteria = {
        field: 'email',
        operation: '==',
        criteria: email,
    };

    const resp = await getDocumentWithCriteria(FIREBASE_COLLECTIONS.USER, criteria);

    if (resp === null) {
        console.log("get user doc failed");
        return null;
    }
    return resp[0] as User; // TEMPORARY FIX
}