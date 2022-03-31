import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* Routes */
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { DiceService } from './services/dice.service';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { FormsModule } from '@angular/forms';
import { DungeonGeneratorComponent } from './components/dungeon-generator/dungeon-generator.component';
import { ConspiracyGeneratorComponent } from './components/conspiracy-generator/conspiracy-generator.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DiceRollerComponent,
    DungeonGeneratorComponent,
    ConspiracyGeneratorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
