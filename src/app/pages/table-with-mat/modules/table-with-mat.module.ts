import { NgModule } from '@angular/core';
import { TableWithMatRoutingModule } from './table-with-mat-routing.module';
import { TableWithMatComponent } from '../table-with-mat.component';
import {SharedModule} from '../../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSortModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddPostComponent } from '../popups/add-post/add-post.component';

@NgModule({
  declarations: [TableWithMatComponent, AddPostComponent],
  imports: [
    SharedModule,
    TableWithMatRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [AddPostComponent]
})
export class TableWithMatModule { }
