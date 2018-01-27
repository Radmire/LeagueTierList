import { Component, OnInit } from '@angular/core';

//champion object class
export class Champion{
  name: String;
  score: Number;
  grade: String;
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html'
})
export class RosterComponent implements OnInit {

  //array of role choices
  roles = [
    {label: "Top", value: "Top"},
    {label: "Jungle", value: "Jungle"},
    {label: "Mid", value: "Mid"},
    {label: "ADC", value: "ADC"},
    {label: "Support", value: "Support"}
  ]

  champions: Champion[]    //an array of champion objects
  statsRito: any           //JSON stats returned from riot games api

  constructor() { }

  ngOnInit() {
  }

  //calculate the tier score of a champ
  //ggStats is an array of relevant champion.gg stats
  //ritoStats is an array of relevant riot api stats
  calculateScore(ritoStats){
    
    var aggScore; //the numerical value of the tier score
    var tier;     //the letter representing the tier this score falls in
    
    
  }
}
