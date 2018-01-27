///////////////////////////////////////////////////////////
//Programmer:  Ryan Admire                               //
//File:        add-champ.component.ts                    //
//Description: The component for adding a champ to the   //
//             roster.                                   //
///////////////////////////////////////////////////////////

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

//champion object class
export class Champion{
  name: String;
  display: String;
  role: String;
}

@Component({
  selector: 'app-add-champ',
  templateUrl: './add-champ.component.html'
})
export class AddChampComponent implements OnInit {

  //array of all possible champion choices
  champs = [
    {label: "Aatrox", value: "Aatrox"},
    {label: "Ahri", value: "Ahri"},
    {label: "Akali", value: "Akali"},
    {label: "Alistar", value: "Alistar"},
    {label: "Amumu", value: "Amumu"},
    {label: "Anivia", value: "Anivia"},
    {label: "Annie", value: "Annie"},
    {label: "Ashe", value: "Ashe"},
    {label: "Aurelion Sol", value: "AurelionSol"},
    {label: "Azir", value: "Azir"},
    {label: "Bard", value: "Bard"},
    {label: "Blitzcrank", value: "Blitzcrank"},
    {label: "Brand", value: "Brand"},
    {label: "Braum", value: "Braum"},
    {label: "Caitlyn", value: "Caitlyn"},
    {label: "Camille", value: "Camille"},
    {label: "Cassiopeia", value: "Cassiopeia"},
    {label: "Cho'Gath", value: "ChoGath"},
    {label: "Corki", value: "Corki"},
    {label: "Darius", value: "Darius"},
    {label: "Diana", value: "Diana"},
    {label: "Dr. Mundo", value: "DrMundo"},
    {label: "Draven", value: "Draven"},
    {label: "Ekko", value: "Ekko"},
    {label: "Elise", value: "Elise"},
    {label: "Evelynn", value: "Evelynn"},
    {label: "Ezreal", value: "Ezreal"},
    {label: "Fiddlesticks", value: "Fiddlesticks"},
    {label: "Fiora", value: "Fiora"},
    {label: "Fizz", value: "Fizz"},
    {label: "Galio", value: "Galio"},
    {label: "Gangplank", value: "Gangplank"},
    {label: "Garen", value: "Garen"},
    {label: "Gnar", value: "Gnar"},
    {label: "Gragas", value: "Gragas"},
    {label: "Graves", value: "Graves"},
    {label: "Hecarim", value: "Hecarim"},
    {label: "Heimerdinger", value: "Heimerdinger"},
    {label: "Illaoi", value: "Illaoi"},
    {label: "Irelia", value: "Irelia"},
    {label: "Ivern", value: "Ivern"},
    {label: "Janna", value: "Janna"},
    {label: "Jarvan IV", value: "JarvanIV"},
    {label: "Jax", value: "Jax"},
    {label: "Jayce", value: "Jayce"},
    {label: "Jhin", value: "Jhin"},
    {label: "Jinx", value: "Jinx"},
    {label: "Kalista", value: "Kalista"},
    {label: "Karma", value: "Karma"},
    {label: "Karthus", value: "Karthus"},
    {label: "Kassadin", value: "Kassadin"},
    {label: "Katarina", value: "Katarina"},
    {label: "Kayle", value: "Kayle"},
    {label: "Kayn", value: "Kayn"},
    {label: "Kennen", value: "Kennen"},
    {label: "Kha'Zix", value: "KhaZix"},
    {label: "Kindred", value: "Kindred"},
    {label: "Kled", value: "Kled"},
    {label: "Kog'Maw", value: "KogMaw"},
    {label: "LeBlanc", value: "LeBlanc"},
    {label: "Lee Sin", value: "LeeSin"},
    {label: "Leona", value: "Leona"},
    {label: "Lissandra", value: "Lissandra"},
    {label: "Lucian", value: "Lucian"},
    {label: "Lulu", value: "Lulu"},
    {label: "Lux", value: "Lux"},
    {label: "Malphite", value: "Malphite"},
    {label: "Malzahar", value: "Malzahar"},
    {label: "Maokai", value: "Maokai"},
    {label: "Master Yi", value: "MasterYi"},
    {label: "Miss Fortune", value: "MissFortune"},
    {label: "Mordekaiser", value: "Mordekaiser"},
    {label: "Morgana", value: "Morgana"},
    {label: "Nami", value: "Nami"},
    {label: "Nasus", value: "Nasus"},
    {label: "Nautilus", value: "Nautilus"},
    {label: "Nidalee", value: "Nidalee"},
    {label: "Nocturne", value: "Nocturne"},
    {label: "Nunu", value: "Nunu"},
    {label: "Olaf", value: "Olaf"},
    {label: "Orianna", value: "Orianna"},
    {label: "Pantheon", value: "Pantheon"},
    {label: "Poppy", value: "Poppy"},
    {label: "Quinn", value: "Quinn"},
    {label: "Rakan", value: "Rakan"},
    {label: "Rammus", value: "Rammus"},
    {label: "Rek'Sai", value: "RekSai"},
    {label: "Renekton", value: "Renekton"},
    {label: "Rengar", value: "Rengar"},
    {label: "Riven", value: "Riven"},
    {label: "Rumble", value: "Rumble"},
    {label: "Ryze", value: "Ryze"},
    {label: "Sejuani", value: "Sejuani"},
    {label: "Shaco", value: "Shaco"},
    {label: "Shen", value: "Shen"},
    {label: "Shyvana", value: "Shyvana"},
    {label: "Singed", value: "Singed"},
    {label: "Sion", value: "Sion"},
    {label: "Sivir", value: "Sivir"},
    {label: "Skarner", value: "Skarner"},
    {label: "Sona", value: "Sona"},
    {label: "Soraka", value: "Soraka"},
    {label: "Swain", value: "Swain"},
    {label: "Syndra", value: "Syndra"},
    {label: "Tahm", value: "Tahm"},
    {label: "Kench", value: "Kench"},
    {label: "Taliyah", value: "Taliyah"},
    {label: "Talon", value: "Talon"},
    {label: "Taric", value: "Taric"},
    {label: "Teemo", value: "Teemo"},
    {label: "Thresh", value: "Thresh"},
    {label: "Tristana", value: "Tristana"},
    {label: "Trundle", value: "Trundle"},
    {label: "Tryndamere", value: "Tryndamere"},
    {label: "Twisted Fate", value: "TwistedFate"},
    {label: "Twitch", value: "Twitch"},
    {label: "Udyr", value: "Udyr"},
    {label: "Urgot", value: "Urgot"},
    {label: "Varus", value: "Varus"},
    {label: "Vayne", value: "Vayne"},
    {label: "Veigar", value: "Veigar"},
    {label: "Vel'Koz", value: "VelKoz"},
    {label: "Vi", value: "Vi"},
    {label: "Viktor", value: "Viktor"},
    {label: "Vladimir", value: "Vladimir"},
    {label: "Volibear", value: "Volibear"},
    {label: "Warwick", value: "Warwick"},
    {label: "Wukong", value: "Wukong"},
    {label: "Xayah", value: "Xayah"},
    {label: "Xerath", value: "Xerath"},
    {label: "Xin", value: "Xin"},
    {label: "Zhao", value: "Zhao"},
    {label: "Yasuo", value: "Yasuo"},
    {label: "Yorick", value: "Yorick"},
    {label: "Zac", value: "Zac"},
    {label: "Zed", value: "Zed"},
    {label: "Ziggs", value: "Ziggs"},
    {label: "Zilean", value: "Zilean"},
    {label: "Zyra", value: "Zyra"},
  ];

  //array of role choices
  roles = [
    {label: "Top", value: "Top"},
    {label: "Jungle", value: "Jungle"},
    {label: "Mid", value: "Mid"},
    {label: "ADC", value: "ADC"},
    {label: "Support", value: "Support"}
  ]
  
  selectedChamp: String    //String for the champion that was selected
  selectedRole: String     //String for the role that was selected
  champPool: Champion[]    //an array of champion objects


  constructor() { }

  ngOnInit() {

    //initialize the champion pool
    this.champPool = [];
  }

  //ADD FUNCTION PREAMBLE
  addChamp(){

    console.log(this.champPool);

    var displayName;

    //find the display name of the champ
    for(var i = 0; i < this.champs.length; i++){
      if(this.champs[i].value === this.selectedChamp){
        displayName = this.champs[i].label;
      }
    }

    //add the champ and selected role to the data list
    let champion = {
      name: this.selectedChamp,
      display: displayName,
      role: this.selectedRole
    }

    //if this is the first element
    if(this.champPool.length === 0){
      this.champPool = [...this.champPool, champion];
    }
    else{
      //find where to insert the new champ in the array. Alphabetically.
      for (var k = 0; k < this.champPool.length; k++){
        if((this.champPool[k].display > champion.display) && k === 0){
          this.champPool = [champion, ...this.champPool];
        }
        else if(this.champPool[k].display > champion.display){
          this.champPool = [...this.champPool.slice(0, k - 1), champion, ...this.champPool.slice(k, this.champPool.length)];
        }
        else if(k === this.champPool.length - 1){
          //must use spread syntax when adding new champions to the champ pool
          this.champPool = [...this.champPool, champion];
        }
      }
    }

    console.log(this.champPool);
  }
}