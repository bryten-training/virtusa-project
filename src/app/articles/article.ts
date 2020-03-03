export interface Article {
    id: number,
    subject: string,
    title: string,
    image: string,
    author: {
        name: string,
        avatar: string
    },
    publish_date: Date,
    content: string,
    timeToRead: number,
    likes: number,
    comments: [
        {
            id: number,
            author: string,
            comment: string,
            datetime: Date
        }
    ],
    assessmentURL: string
}
