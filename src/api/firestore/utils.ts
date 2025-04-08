import { firestore } from "../../../firebaseConfig";
import { doc, collection } from "firebase/firestore";

export const generateFirebaseId = (path: string) => {
    const docRef = doc(collection(firestore, path)); 
    return docRef.id; 
};

export enum FIREBASE_COLLECTIONS {
    USER = 'user',
    POST = 'post',
    FRIENDSHIP = 'friendship',
}