import { AppThunk } from "..";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
            newUser.createdDate = Date.now();

            await createUserWithEmailAndPassword(auth, newUser.email, password);
        } catch (error) {
            console.log(error);
            return onError();
        }
    };
};
