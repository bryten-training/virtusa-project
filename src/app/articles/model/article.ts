import { Subject } from './subject';

export interface Article {
    id: number,
    subject: Subject,
    title: string,
    image: string,
    author: {
        userId: number,
        name: string,
        avatar: string
    },
    publish_date: Date,
    content: string,
    timeToRead: number,
    tags: string[],
    likes: number,
    comments: {
        id: number,
        author: string,
        comment: string,
        datetime: Date
    }[]
    ,
    assessmentURL: string
}