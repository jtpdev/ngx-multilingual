# NgxMultilingual

This is a package to make it easier to create a multilingual project.

## Install

To install this, use:

> npm install --save ngx-multilingual

## Use

To use in your project import it in your module like that:

    import { MultilingualModule } from 'ngx-multilingual';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';


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


and use in your component:

    <h3>{{ multilingual.get('home', 'pt') }}</h3>
    <p>{{ multilingual.get('hello', 'en') }}</p>
    <p>{{ multilingual.get('country', 'es') }}</p>

and

    import { Component } from '@angular/core';
    import { MultilingualService } from './multilingual/multilingual.service';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {

      constructor(
        public multilingual: MultilingualService
      ) {
        multilingual.path('assets/multilingual', "multi");
      }

    }


And done!
