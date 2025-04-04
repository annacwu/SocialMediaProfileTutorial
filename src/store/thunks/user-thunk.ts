import { AppThunk } from "..";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserDocument, getUserDocumentWithEmail } from "../../services/user";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { UserActions } from "../features/user";

type CreateUserAccountThunkProps = {
    password: string;
    onSuccess: () => void;
    onError: () => void;
};

export const createUserAccountThunk = (
    props: CreateUserAccountThunkProps
): AppThunk<void> => {
    const { password, onSuccess, onError } = props;

    return async (dispatch, state) => {
        try {
            const newUser = Object.assign({}, state().user);

            newUser.id = generateFirebaseId(FIREBASE_COLLECTIONS.USER);
            newUser.createdDate = Date.now();

            const userCred = await createUserWithEmailAndPassword(auth, newUser.email, password);
            console.log("Created user:", userCred.user);  // Check if user is returned
            await createUserDocument(newUser);

            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        }
    };
};

type LogInUserThunkProps = {
    email: string;
    onSuccess: () => void;
    onError: () => void;
};

export const logInUserThunk = (
    props: LogInUserThunkProps
): AppThunk<void> => {
    const { email, onSuccess, onError } = props;

    return async (dispatch, state) => {
        try {
            console.log("IN USER THUNK");
            const user = await getUserDocumentWithEmail(email);

            dispatch(UserActions.setUser(user));

            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        }
    };
};
