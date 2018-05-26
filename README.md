# NgxMultilingual

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86d6b8b783354578a9b0b4d8738a60d5)](https://www.codacy.com/app/jtpdev/ngx-multilingual?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jtpdev/ngx-multilingual&amp;utm_campaign=Badge_Grade)

[![Donate with PayPal](https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif) ](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=58Y3RF6LRM4P4)

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
