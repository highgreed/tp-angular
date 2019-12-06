import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  execChange: Subject<any> = new Subject<any>();
  constructor() {}
  userNameChange(data: string) {
      this.execChange.next(data);
  }
}
