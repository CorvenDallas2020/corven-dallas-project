import { Component, OnInit } from '@angular/core';
import { DiceRollerComponent } from '../dice-roller/dice-roller.component';
import { AppComponent } from '../../app.component';
import dungeonData from '../../data/dungeon-data.json';

@Component({
  selector: 'app-dungeon-generator',
  templateUrl: './dungeon-generator.component.html',
  styleUrls: ['./dungeon-generator.component.css']
})
export class DungeonGeneratorComponent implements OnInit {

  randomGeneratorObject = {
    title: "Generador aleatorio",
    addRoomTxt: "Añadir habitacion",
    addRandomRoomTxt: "Añadir habitacion aleatoria",
    resultTxt: "Resultados",
    resetTxt: "Limpiar",
    resultValue: ""
  };

  constructor() { }

  ngOnInit(): void {
    this.roomTypes = dungeonData;
  }

  roomTypes: iRoomType[] = [];
  roomValue:number = 1;

  public addRoom = () => {
    //console.log("addRoom START");
    let room = this.findById(this.roomValue, this.roomTypes);
    this.randomGeneratorObject.resultValue = room.Text+"\n" + this.randomGeneratorObject.resultValue;
  }

  public addRandomRoom = () => {
    console.log("addRandomRoom START");
    let roomId = DiceRollerComponent.rollDice(1, this.roomTypes.length, 0);
    let room = this.findById(roomId,  this.roomTypes);
    this.randomGeneratorObject.resultValue = room.Text + "\n" + this.randomGeneratorObject.resultValue;
  }

  private findById = function(id:number, roomTypes: any[]) {
    for(var room in roomTypes) {
        if (roomTypes[room].id == id) {
            //console.log("return:: "+dungeonService.roomTypes[room].Text);
            return roomTypes[room];
        }
    }
    return null;
}

public resetForm = () => {
  AppComponent.resetForm(this.randomGeneratorObject);
}
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.roomValue = event.target.value;
  }
}

interface iRoomType {
  id:number;
  Text:string;
}
