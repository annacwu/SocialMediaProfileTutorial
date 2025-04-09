export type Message = {
    id: string;
    thread: string;
    sender: string;
    text: string;

    sentDate: number;
    sentDateString: string;
    hasBeenRead: boolean;
};