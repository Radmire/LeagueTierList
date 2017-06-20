///////////////////////////////////////////////////////////
//Programmer:  Ryan Admire                               //
//File:        add-champ.component.ts                    //
//Description: The component for adding a champ to the   //
//             roster.                                   //
///////////////////////////////////////////////////////////

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-champ',
  templateUrl: './add-champ.component.html',
  styleUrls: ['./add-champ.component.css']
})
export class AddChampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
