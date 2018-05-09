import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, keyframes, animate, query, stagger} from '@angular/animations';

interface item {
  title: string;
  description: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('list', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0,  transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(-75%)', offset: 1 }),

          ]))
        ]), { optional: true })
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {

  btnText: string = 'Add item';
  item:item = {
    title: '', 
    description: ''
  };
  list:item[] = [];

  constructor() { }

  ngOnInit() {}

  addItem() {
    this.list.push(this.item);
    this.item = {
      title: '',
      description: ''
    }    
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }

}
