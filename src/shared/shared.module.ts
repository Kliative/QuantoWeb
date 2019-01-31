import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    SharedComponent,
    ProductListComponent,
  ],
  exports: [
    ProductListComponent
  ]
})
export class SharedModule { }
