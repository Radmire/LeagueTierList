//ADD COMMENT PREAMBLE

import { Component, OnInit } from '@angular/core';

//imports
import {Router} from  "@angular/router"; //user the router to navigate to the next page

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  region: string
  summoner: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //ADD FUNCTION PREAMBLE
  nextPage(){

    //if this summoner already has a roster

    //if this summoner doesn't have a roster
      //store summoner, region in the DB
      //navigate to the add champ to roster page
      console.log(this.summoner);
      console.log(this.region);
      this.router.navigate(["/addChamp"]);
  }

}
