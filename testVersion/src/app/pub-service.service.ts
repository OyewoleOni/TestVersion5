import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PubServiceService {

  private user = new BehaviorSubject<string>('');

  cast =this.user.asObservable();

  editUser(newUser){
    this.user.next(newUser);
  }

  constructor() { }

}
