export interface Article {
    id: number,
    title: string,
    picture: string,
    author: {
        name: string,
        avatar: string
    },
    publishingTime: Date,
    content: string,
    timeToRead: number,
    likes: number,
    comments: [
        {
            id: number,
            author: string,
            comment: string,
            time: Date
        }
    ],
    assessmentURL: string
}
