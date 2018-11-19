import { NgModule } from '@angular/core';

import { TableWithPluginRoutingModule } from './table-with-plugin-routing.module';
import { TableWithPluginComponent } from '../table-with-plugin.component';
import {SharedModule} from '../../../shared/shared.module';
import {TableModule} from 'primeng/table';
import {ButtonModule, CardModule, DialogModule, InputTextModule, MultiSelectModule} from 'primeng/primeng';

@NgModule({
  declarations: [TableWithPluginComponent],
  imports: [
    SharedModule,
    TableWithPluginRoutingModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DialogModule
  ]
})
export class TableWithPluginModule { }
