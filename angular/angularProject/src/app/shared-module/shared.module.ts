import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModuleRoutingModule } from './shared-module-routing.module';   
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,  
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],exports:[  
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],providers:[
    // FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // HttpClientModule,provideHttpClient(withFetch())
  ]

})
export class SharedModule { }
