export class Article {
  id: number;
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  summary: string;
  content: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.tag = '';
    this.author = '';
    this.date = '';
    this.imgUrl = '';
    this.saying = '';
    this.summary = '';
    this.content = '';
}
}
