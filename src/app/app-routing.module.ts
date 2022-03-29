import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { DungeonGeneratorComponent } from './dungeon-generator/dungeon-generator.component';
import { ConspiracyGeneratorComponent } from './conspiracy-generator/conspiracy-generator.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'diceRoller', component: DiceRollerComponent },
  { path: 'dungeonGenerator', component: DungeonGeneratorComponent },
  { path: 'conspiracyGenerator', component: ConspiracyGeneratorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }