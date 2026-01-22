import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin-module/admin.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
