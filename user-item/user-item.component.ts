import { Component, OnInit,Input } from '@angular/core'; //input is added for passing data to useritemcomponent

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
//name:string;  //added name property where name is the name of the attribute we want to set and string is the type
 @Input()name:string;
 constructor() 
  { 
      // this.name='nakshtra';     // set the name
  }

  ngOnInit() {
  }

}
