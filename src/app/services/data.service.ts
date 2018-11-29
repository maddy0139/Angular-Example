import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  private authToken = new BehaviorSubject('');

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  setAuthToken(token: string) {
    this.authToken.next(token)
  }
  deleteAuthToken(){
    this.authToken.next('');
  }

  

}