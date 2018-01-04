//ADD COMMENT PREAMBLE

import { Component, OnInit } from '@angular/core';

//imports
import { Router } from  "@angular/router"; //user the router to navigate to the next page
import { Observable } from 'rxjs/Rx';
import { RitoApiService } from "../../services/rito-api.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  region: string
  summoner: string
  accountId: string

  constructor(private router: Router, private rito: RitoApiService) { }

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
      var accountId;
      this.rito.getAccountId(this.summoner, this.region.toLowerCase()).subscribe(data => this.accountId = data);
      this.router.navigate(["/tierList"]);
  }

}
