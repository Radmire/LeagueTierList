///////////////////////////////////////////////////////////////////////
//Programmer:  Ryan Admire                                           //
//File:        rito-api.service.ts                                   //
//Description: Will query the api and pull in the stats we will need //
//             to create our tier list.                              //
///////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";

@Injectable()
export class RitoApiService {

  id: any

  regionalEndpoints: { BR: "br1",	
                       EUNE: "eun1",
                       EUW:	"euw1",
                       JP:	"jp1",
                       KR:	"kr",
                       LAN:	"la1",
                       LAS:	"la2",
                       NA: "na1",
                       OCE:	"oc1",
                       TR: "tr1",
                       RU: "ru"
    }

    apiKey: "RGAPI-e66bd51c-e998-4551-a3b0-ed058498b9de"

    currentSeason: 9

  constructor(private http: Http) { }

  //retrieves the account ID of the summoner passed in; in the region passed in
  getAccountId(summoner, region) {
    return this.http.get("https://" + this.regionalEndpoints[region] + "api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summoner + "?api_key=" + this.apiKey).map(res => res.json().accountId);
  }

  //retrieves the all matches in the current season for the given accountID
  getMatches(accountID, region) {
    return this.http.get("https://" + this.regionalEndpoints[region] + ".api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountID + "?season=" + this.currentSeason + "&api_key=" + this.apiKey).map(res => res.json());
  }
}


