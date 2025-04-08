import { firestore } from "../../../firebaseConfig";
import { doc, FieldPath, WhereFilterOp, getDoc, getDocs, collection, where, query, QuerySnapshot } from "firebase/firestore";

export const getDocumentWithPathAndId = async (path: string, documentId: string) => {
    try {
        const docRef = doc(firestore, path, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(`Document data:`, docSnap.data());
            return docSnap.data(); // Return document data
        } else {
            console.log(`No document found at ${path}/${documentId}`);
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    };
};

export type WhereCriteria = {
    field: string | FieldPath;
    operation: WhereFilterOp;
    criteria: any;
};

export const getDocumentWithCriteria = async (path: string, criteria: WhereCriteria) => {
    try {
        const collectionRef = collection(firestore, path); 
        const q = query(collectionRef, where(criteria.field, criteria.operation, criteria.criteria)); 

        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return documents;
    } catch (error) {
        console.error("Error fetching document:", error);
        return [];
    }
}

export const getAllDocumentsWithPath = async (path: string) => {
    try {
        const collectionRef = collection(firestore, path);
        const querySnapshot = await getDocs(collectionRef);

        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return null;
    }
};