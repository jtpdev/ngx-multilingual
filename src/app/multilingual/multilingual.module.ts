import { MultilingualService } from './multilingual.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MultilingualService
  ],
  declarations: []
})
export class MultilingualModule { }
