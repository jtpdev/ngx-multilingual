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
    multilingual.path('/multilingual');
  }

}
