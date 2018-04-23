import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  btnText: string = 'Add item';
  item = {
    title: '', 
    description: ''
  };
  list = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(i) {
    this.list.push(this.item);
    this.item = {
      title: '',
      description: ''
    }
    console.log(this.list);
    
  }

}
