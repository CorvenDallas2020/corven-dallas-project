import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DiceService, iDiceType } from 'src/app/services/dice.service';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})

export class DiceRollerComponent implements OnInit {

  diceTypes: iDiceType[] = [];
  numDice:number = 1;
  diceValue = 1;
  mod:number = 0;
  diceRollerObject = {
    title: "Lanzador de dados",
    selectDiceTxt: "Selecciona un dado",
    numDiceTxt: "Cantidad dados",
    modDiceTxt: "Modificador",
    rollDiceTxt: "Lanzar dados",
    resetTxt: "Limpiar",
    resultTxt: "Resultados",
    warning: "Complete la selección",
    resultValue: ""
  };
  
  constructor(private _diceService: DiceService) {
    console.log("DiceRollerComponent START");
  }

  ngOnInit(): void {
    this.diceTypes = this._diceService.getDiceTypes();
    console.log("DiceRollerComponent onInit")
  }

  

  public showResults = (numDice:number, diceValue:number, mod:number) => {
    console.log("showResults START");
    if (diceValue > 1) {
      let resultValue = DiceRollerComponent.rollDice(numDice, diceValue,mod);
      let resultTXT = "Lanzando "+numDice+"D"+diceValue;
      if (mod > 0) resultTXT += "+"+mod
      else if (mod < 0) resultTXT += ""+mod;
      resultTXT += " = "+ resultValue;
      this.diceRollerObject.resultValue = resultTXT+"\n"+this.diceRollerObject.resultValue;
    } else {
      this.diceRollerObject.resultValue = "No has seleccionado ningun dado"+"\n"+this.diceRollerObject.resultValue;
    }
  }

  public static rollDice = (numDice: number, diceValue:number, mod:number) => {
    console.log("rollDice START");
    console.log("rolling "+numDice+"D"+diceValue+" with mod "+mod);
    let result = 0;
    for (let i=0;i<numDice;i++) {
        result += Math.floor(Math.random() * diceValue)+1;
    }
    result += mod;
    console.log("Result: "+result);
    return result;
  }

  public resetForm = () => {
    AppComponent.resetForm(this.diceRollerObject);
  }

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.diceValue = event.target.value;
  }

}