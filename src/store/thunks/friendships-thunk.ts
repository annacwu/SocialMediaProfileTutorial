import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { Friendship, FRIENDSHIP_STATUS } from "../../model/friendship";
import { createFriendshipDocument, getFriendshipsForUser, updateFriendshipDocument } from "../../services/friendship";
import { parseDateToString } from "../../utils/date";
import { FriendshipsActions } from "../features/friendships";

export const getFriendshipsForUserThunk = (id: string): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const friendships = await getFriendshipsForUser(id);
            if (friendships) {
                dispatch(FriendshipsActions.addFriendships(friendships));
            }
        } catch (error) {
            console.log('Could not retrieve friendships for the user', id, error);
        }
    };
};

export const createFriendshipThunk = (otherUserId: string, onSuccess: () => void, onError: () => void,): AppThunk<void> => {
    return async (dispatch, state) => {
        const { user } = state();

        try {
            const newFriendship: Friendship = {
                id: generateFirebaseId(FIREBASE_COLLECTIONS.FRIENDSHIP),
                users: [user.id, otherUserId],
                requester: user.id,
                status: FRIENDSHIP_STATUS.PENDING,

                createdDate: Date.now(),
                createdDateString: parseDateToString(Date.now()),
            };

            createFriendshipDocument(newFriendship);
            dispatch(FriendshipsActions.addFriendships([newFriendship]));

            onSuccess();
        } catch (error) {
            console.log('Could not retrieve friendships for the user', error);

            onError();
        }
    };
};

export const acceptFriendshipThunk = (friendship: Friendship, onSuccess: () => void, onError: () => void,): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const newFriendship = Object.assign({}, friendship);
            newFriendship.status = FRIENDSHIP_STATUS.ACCEPTED;
            newFriendship.acceptedDate = Date.now();

            updateFriendshipDocument(newFriendship);
            dispatch(FriendshipsActions.addFriendships([newFriendship]));

            onSuccess();
        } catch (error) {
            console.log('Could not accept friendship', error);

            onError();
        }
    };
};