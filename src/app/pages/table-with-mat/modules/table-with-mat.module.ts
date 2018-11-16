import { NgModule } from '@angular/core';
import { TableWithMatRoutingModule } from './table-with-mat-routing.module';
import { TableWithMatComponent } from '../table-with-mat.component';
import {SharedModule} from '../../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSortModule} from '@angular/material';

@NgModule({
  declarations: [TableWithMatComponent],
  imports: [
    SharedModule,
    TableWithMatRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class TableWithMatModule { }
