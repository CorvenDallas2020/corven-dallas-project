import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DiceRollerComponent } from '../dice-roller/dice-roller.component';
import conspiracyData from '../data/conspiracy-data.json';

@Component({
  selector: 'app-conspiracy-generator',
  templateUrl: './conspiracy-generator.component.html',
  styleUrls: ['./conspiracy-generator.component.css']
})
export class ConspiracyGeneratorComponent implements OnInit {

  conspiracyGeneratorObject = {
    title: "Generador de conspiraciones",
    addRandomConspTxt: "Predicción para el año que viene",
    resultTxt: "Resultados",
    resetTxt: "Limpiar",
    resultValue: ""
  };

  constructor() { }

  ngOnInit(): void {
    this.conspData = conspiracyData
    this.people = this.conspData[0].Personas;
    this.actions = this.conspData[0].Acciones;
    this.things = this.conspData[0].Cosas;
    this.places = this.conspData[0].Lugares;
  }

  conspData: any[] =[];
  people: iConspiracyType[] = [];
  actions: iConspiracyType[] = [];
  things: iConspiracyType[] = [];
  places: iConspiracyType[] = [];
  conspiracyValue:number = 1;

  public addRandomTheory = () => {
    console.log("addRandomTheory START");
    let peopleId = DiceRollerComponent.rollDice(1, this.people.length, 0);
    console.log("peopleId from 1 to "+this.people.length);
    let actionsId = DiceRollerComponent.rollDice(1, this.actions.length, 0);
    console.log("actionsId from 1 to "+this.actions.length);
    let thingsId = DiceRollerComponent.rollDice(1, this.things.length, 0);
    console.log("thingsId from 1 to "+this.things.length);
    let placesId = DiceRollerComponent.rollDice(1, this.places.length, 0);
    console.log("placesId from 1 to "+this.places.length);
    this.conspiracyGeneratorObject.resultValue =
        (this.findById(peopleId, this.people)).Text +
        (this.findById(actionsId, this.actions)).Text +
        (this.findById(thingsId, this.things)).Text +
        (this.findById(placesId, this.places)).Text + "\n"
        + this.conspiracyGeneratorObject.resultValue;
  }

  private findById = function(id:number, array: any[]) {
    for(var item in array) {
        if (array[item].id == id) {
            return array[item];
        }
    }
    return null;
}

public resetForm = () => {
  AppComponent.resetForm(this.conspiracyGeneratorObject);
}

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.conspiracyValue = event.target.value;
  }
}

interface iConspiracyType {
  id:number;
  Text:string;
}
