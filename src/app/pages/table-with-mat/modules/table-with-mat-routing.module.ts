import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableWithMatComponent} from '../table-with-mat.component';

const routes: Routes = [
  {path: '', component: TableWithMatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableWithMatRoutingModule { }
