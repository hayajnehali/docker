import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { SharedModule } from '../../shared-module/shared.module';


@NgModule({
  declarations: [ProductManageComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
