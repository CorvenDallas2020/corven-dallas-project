import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { DungeonGeneratorComponent } from './components/dungeon-generator/dungeon-generator.component';
import { ConspiracyGeneratorComponent } from './components/conspiracy-generator/conspiracy-generator.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'diceRoller', component: DiceRollerComponent },
  { path: 'dungeonGenerator', component: DungeonGeneratorComponent },
  { path: 'conspiracyGenerator', component: ConspiracyGeneratorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }