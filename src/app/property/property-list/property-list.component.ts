import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id":1,
    "Name":"Ivanova Kuca",
    "Type":"House",
    "Price":12000
  },{
    "Id":2,
    "Name":"Mikijeva kuca",
    "Type":"House",
    "Price":12000
  },{
    "Id":3,
    "Name":"Perina kuca",
    "Type":"House",
    "Price":12000
  },{
    "Id":4,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },{
    "Id":5,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
