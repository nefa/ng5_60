import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private simpleItems = new BehaviorSubject<any>([{ title: 'simple Title', description:'simple description'}]);
  simpleItem = this.simpleItems.asObservable()

  constructor() { }

  changeItemsList(item) {
    this.simpleItems.next(item);
  }

}
