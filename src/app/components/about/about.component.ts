import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  list:any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService$: DataService) { 
    this.route.params.subscribe(res => console.log(res));    
  }

  ngOnInit() {
    this.dataService$.simpleItem.subscribe(list => this.list = list);
  }

  navigate(to:string) {
    this.router.navigate([to || '']);
  }

}
