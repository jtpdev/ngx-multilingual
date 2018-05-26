import { MultilingualModule } from './multilingual/multilingual.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultilingualModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
