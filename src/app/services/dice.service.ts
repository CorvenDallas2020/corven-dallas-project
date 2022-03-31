import { Injectable, OnInit } from "@angular/core";
//import diceData from '../data/dice-data.json';

@Injectable()
export class DiceService implements OnInit {

    private diceTypes: iDiceType[] = [
        {"diceValue": 0, "diceTxt": "Selecciona un dado"},
        {"diceValue": 3, "diceTxt": "D3"},
        {"diceValue": 4, "diceTxt": "D4"},
        {"diceValue": 6, "diceTxt": "D6"},
        {"diceValue": 8, "diceTxt": "D8"},
        {"diceValue": 10, "diceTxt": "D10"},
        {"diceValue": 12, "diceTxt": "D12"},
        {"diceValue": 20, "diceTxt": "D20"},
        {"diceValue": 100, "diceTxt": "D100"}
    ];

    constructor() {
        console.log("DiceService START");
    }

    ngOnInit(): void {
        //this.setDiceTypes(diceData);
        console.log("DiceService onInit: "+this.diceTypes);
      }
    
    public getDiceTypes() {
        return this.diceTypes;
    }

    public setDiceTypes(diceTypes: iDiceType[]) {
        this.diceTypes = diceTypes;
    }
}

export interface iDiceType {
    diceValue:number;
    diceTxt:string;
  }