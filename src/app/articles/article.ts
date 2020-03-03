export interface Article {
  id: number;
  subject: string;
  title: string;
  content: string;
  likes: number;
  // comments: string;
  image: string;
  publish_date: Date;
}
