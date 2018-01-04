///////////////////////////////////////////////////////////////////////
//Programmer:  Ryan Admire                                           //
//File:        champ-gg-api.service.ts                               //
//Description: Will query the api and pull in the stats we will need //
//             to create our tier list.                              //
///////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ChampGgApiService {

  constructor(private http: Http) { }

  //returns champion.gg info about a specific champion
  getChampInfo(championID){
    return this.http.get("api.champion.gg/v2/champions/" + championID + "&api_key=5fd8ff8d8f0c225efd121836d49c55c9").map(res => res.json());
  }
}
