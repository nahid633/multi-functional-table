import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app/app.service';
import {Post} from '../../entities/post';

@Component({
  selector: 'app-table-with-plugin',
  templateUrl: './table-with-plugin.component.html',
  styleUrls: ['./table-with-plugin.component.scss']
})
export class TableWithPluginComponent implements OnInit {
  selectedColumns: any[];
  cols: any[];
  data: Post[];
  post: Post;
  newPost: boolean;
  displayDialog: boolean;
  error;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getPosts().subscribe(res => this.data = res);
    this.cols = [
      { field: 'userId', header: 'User id' },
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' }
    ];

    this.selectedColumns = this.cols;
  }
  showDialogToAdd() {
    this.newPost = true;
    this.post = {userId: null, id: null, title: null, body: null};
    this.displayDialog = true;
  }

  save() {
    const posts = [...this.data];
    if (this.newPost) {

      this.appService.addPost(this.post).subscribe((res) => {
        posts.push(this.post);
        this.data = posts;
        this.post = null;
        this.displayDialog = false;
        this.error = null;
      }, error => {
        this.error = error.message;
      });
    }
  }
}
