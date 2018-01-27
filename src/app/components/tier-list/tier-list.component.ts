import { Component, OnInit } from '@angular/core';
import { ChampGgApiService } from '../../services/champ-gg-api.service'
import { CalculatorService } from 'app/services/calculator.service';

//champion object class
export class Champion{
  name: String;
  score: Number;
  grade: String;
}

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html'
})
export class TierListComponent implements OnInit {

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

  selectedRole: String     //String for the role that was selected
  champions: Champion[]    //an array of champion objects
  statsGG: any             //JSON stats returned from champion.gg

  constructor(private apiGG: ChampGgApiService) { }

  ngOnInit() {

    //initialize the champions list
    this.champions = [];

    //loop to calculate the score of each champion
    for(var i = 0; i < this.champs.length; i++){

      //call the api for the given champ
      this.apiGG.getChampInfo().subscribe(data => this.statsGG = data);

      //calculate the tier score for the given champ
      this.calculateScore(this.statsGG);
    }

  }

  //calculate the tier score of a champ
  //ggStats is an array of relevant champion.gg stats
  //this is a general tier list so only the champion.gg stats matter
  calculateScore(ggStats){
    
    var aggScore; //the numerical value of the tier score
    var tier;     //the letter representing the tier this score falls in
    
    var statsGG  //stats returned from champion.gg

    //loop through each possible role listed in champ.gg
    for(var i = 0; i < ggStats.roles.length; i++){
      
    }
  }
}
