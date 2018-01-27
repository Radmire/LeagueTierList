<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
=======
///////////////////////////////////////////////////////////
//Programmer:  Ryan Admire                               //
//File:        app.module.ts                             //
//Description: The main component for our tier list app. //
//             Will contain both routing information and //
//             imported pieces used by the app.          //
///////////////////////////////////////////////////////////

//the core of the application
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';

//the components of the application
import { RosterComponent } from './components/roster/roster.component';
import { TierListComponent } from './components/tier-list/tier-list.component';
import { AddChampComponent } from './components/add-champ/add-champ.component';
import { HomeComponent } from './components/home/home.component';

//services for the application
import { RitoApiService } from "./services/rito-api.service";

//primeng and other styling pieces
import { DropdownModule, ButtonModule, InputTextModule, DataListModule } from '../../node_modules/primeng/primeng';


//the routes for our application
//or how we will navigate to the different components
const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'addChamp', component:AddChampComponent},
  {path: 'roster', component: RosterComponent},
  {path: 'tierList', component: TierListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    TierListComponent,
    AddChampComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    DataListModule,
    HttpModule
  ],
  providers: [RitoApiService],
>>>>>>> 68a306a832ace5a54d354665e9cd8996e605aa6b
  bootstrap: [AppComponent]
})
export class AppModule { }
