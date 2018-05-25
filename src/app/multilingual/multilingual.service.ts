import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MultilingualService {

  private language: string;
  private default: string;
  dic: any;

  constructor(
    public http: HttpClient
  ) { }

  path(path?: string, language?: string, defaultLang?: string) {
    this.language = language;
    this.default = defaultLang;
    if (!this.language) {
      this.language = this.default || navigator.language || document.documentElement.lang;
      if (!this.language) throw new Error('Language must be defined');
    }
    let url = path ? `${path}/${language}.json` : `${language}.json`;
    this.http.get(url)
      .subscribe(
        result => {
          this.dic = result;
        },
        error => {
          if (this.language.indexOf('-') > -1) {
            this.language = this.language.split('-')[0];
            url = path ? `${path}/${language}.json` : `${language}.json`;
            this.http.get(url)
              .subscribe(
                result => {
                  this.dic = result;
                },
                error => {
                  throw new Error(error);
                })
          } else {
            throw new Error(error);
          }
        });
  }

  get(key: string, lang?: string): string {
    if (this.language == 'multi') {
      if (!lang) {
        throw new Error('Language can not be null when the service have multiple dictionaries.');
      }
      const dic = this.dic[this.dic.indexOf(lang)];
      if (dic) {
        return dic[key];
      } else {
        throw new Error('Language not found.');
      }
    }

    return this.dic[key];
  }

}
