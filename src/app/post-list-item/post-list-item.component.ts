import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string = "Mon Post par Défaut";
  @Input() postContent: string = "Lorem Ipsum";
  @Input() postLoveIts: number = 42;
  @Input() postDate: Date = new Date('1515-05-15T15:15:15');


  ngOnInit() {
  }
}

