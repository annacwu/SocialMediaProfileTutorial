import { AppThunk } from "..";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

type CreateUserAccountThunkProps = {
    password: string;
    onSuccess: () => void;
    onError: () => void;
};

export const createUserAccountThunk = (
    props: CreateUserAccountThunkProps
): AppThunk<void> => {
    const auth = getAuth();
    const { password, onSuccess, onError } = props;

    return async (dispatch, state) => {
        try {
            const newUser = Object.assign({}, state().user);
            newUser.createdDate = Date.now();

            createUserWithEmailAndPassword(auth, newUser.email, password);
        } catch (error) {
            console.log(error);
        }
    };
};