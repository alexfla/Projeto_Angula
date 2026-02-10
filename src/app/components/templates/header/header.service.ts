import { Injectable } from '@angular/core';
import { HeaderDate } from './header-data-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

   private _headerDate = new BehaviorSubject<HeaderDate>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerDate(): HeaderDate {
    return this._headerDate.value
  }
  set headerDate(headerDate: HeaderDate) {
    this._headerDate.next(headerDate)
  }
}
