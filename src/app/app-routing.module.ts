import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'table-with-primeng',
    loadChildren: '../app/pages/table-with-plugin/modules/table-with-plugin.module#TableWithPluginModule',
  },
  {
    path: 'table-with-material',
    loadChildren: '../app/pages/table-with-mat/modules/table-with-mat.module#TableWithMatModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
