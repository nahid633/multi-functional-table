import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Post} from '../../entities/post';
import {AppService} from '../../services/app/app.service';

@Component({
  selector: 'app-table-with-mat',
  templateUrl: './table-with-mat.component.html',
  styleUrls: ['./table-with-mat.component.scss']
})
export class TableWithMatComponent implements OnInit {
  columns = new FormControl(['userId', 'id', 'title', 'body']);
  displayedColumns: string[];
  selectableColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;
  filterPre;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.displayedColumns = this.selectableColumns;
    // Assign the data to the data source for the table to render
    this.appService.getPosts().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.filterPre = this.dataSource.filterPredicate;}, error => console.log(error));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterColumn(key, filterValue: string) {
    filterValue = ' ' + filterValue;
    if (key === 'all') {
      console.log('ere');

      // this.dataSource.filterPredicate = this.filterPre;
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return JSON.stringify(data).includes(filter);
      };
    } else {
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return JSON.stringify(data[key]).includes(filter);
      };
    }
    this.applyFilter(filterValue);

  }

  onSelect() {
    this.displayedColumns = this.columns.value;
  }
}
