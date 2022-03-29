import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corven-dallas-project';

  public static resetForm = (object: any) => {
    console.log("resetForm START");
    object.resultValue = "";
  }

}
