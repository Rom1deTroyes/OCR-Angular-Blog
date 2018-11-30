export class Post {
  title: string = "Mon Post";
  content: string = "Mon contenu";
  loveIts: number = 42;
  created_at: Date = new Date('1515-05-15T15:15:15');

  constructor(title: string,
              content: string,
              loveIts: number,
              created_at: string
              ) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date(created_at);
  }
}
