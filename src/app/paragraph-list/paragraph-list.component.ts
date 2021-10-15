import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-list',
  templateUrl: 'paragraph-list.component.html',
  styleUrls: ['./paragraph-list.component.css']
})
export class ParagraphListComponent implements OnInit {
 name= 'Jordan';
 dog1= 'Annie' ;
 dog2= 'Colt';
 loggedIn= false;

 isDisabled= false;

  constructor() { }

  ngOnInit(): void {
  }

}
