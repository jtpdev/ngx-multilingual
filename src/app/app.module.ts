import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MultilingualService } from './multilingual/multilingual.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MultilingualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
