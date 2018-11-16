import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableWithPluginComponent} from '../table-with-plugin.component';

const routes: Routes = [
  {path: '', component: TableWithPluginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableWithPluginRoutingModule { }
