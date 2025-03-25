import { Post } from "../model/post";

const MILLISECONDS_IN_HOUR = 3600000;

export const POSTS: Post[] = [
    {
        id: 'PostA',
        user: '1',
        text: 'This is my first post!',
        createdDate: Date.now(),
    },
    {
        id: 'PostB',
        user: '1',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 2,
    },
    {
        id: 'PostC',
        user: '2',
        text: 'This is my third post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 3,
    },
    {
        id: 'PostD',
        user: '2',
        text: 'This is my fourth post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 3,
    },
    {
        id: 'PostE',
        user: '3',
        text: 'This is my fifth post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 4,
    },
]