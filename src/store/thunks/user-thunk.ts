import { AppThunk } from "..";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createUserDocument, getAllUsers, getUserDocumentWithEmail } from "../../services/user";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { UserActions } from "../features/user";
import { UsersActions } from "../features/users";
import { getAllPostsThunk, getPostsForUserThunk } from "./posts-thunk";

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

type TakeUserToAppThunkProps = {
    email: string;
    onSuccess: () => void;
    onError: () => void;
};

export const takeUserToAppThunk = (
    props: TakeUserToAppThunkProps
): AppThunk<void> => {
    const { email, onSuccess, onError } = props;

    return async (dispatch, state) => {
        try {
            const user = await getUserDocumentWithEmail(email);

            if (user) {
                dispatch(UserActions.setUser(user));
                dispatch(UsersActions.addUsers([user]));

                dispatch(getAllPostsThunk());
                dispatch(getAllUsersThunk());
            } else {
                console.warn("User not found for email:", email);
            }

            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        }
    };
};

export const getAllUsersThunk = (): AppThunk<void> => {
    return async (dispatch, state) => {
        try {
            const users = await getAllUsers();
            if (users) {
                dispatch(UsersActions.addUsers(users));
            }
        } catch (error) {
            console.log('Could not retrieve all users', error);
        }
    };
};

type SignInThunkProps = {
    password: string;
    onSuccess: () => void;
    onError: () => void;
};

export const signInThunk = (
    props: SignInThunkProps
): AppThunk<void> => {
    const { password, onSuccess, onError } = props;

    return async (dispatch, state) => {
        const { email } = state().user;
        try {
            await signInWithEmailAndPassword(auth, email, password);

            dispatch(takeUserToAppThunk({email, onSuccess, onError}));

            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        }
    };
};