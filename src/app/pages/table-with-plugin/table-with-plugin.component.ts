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
}
