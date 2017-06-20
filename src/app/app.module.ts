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

//the components of the application
import { RosterComponent } from './components/roster/roster.component';
import { TierListComponent } from './components/tier-list/tier-list.component';
import { AddChampComponent } from './components/add-champ/add-champ.component';

//primeng and other styling pieces
import { DropdownModule } from '../../node_modules/primeng/primeng';

//the routes for our application
//or how we will navigate to the different components
const appRoutes: Routes =[
  {path: '', component: AddChampComponent},
  {path: 'roster', component: RosterComponent},
  {path: 'tierList', component: TierListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    TierListComponent,
    AddChampComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
