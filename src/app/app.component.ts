import { Component } from '@angular/core';
import { Student } from "./student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UddipAssign4';
  student: Student = {
    sid: 991518202,
    sname: "Uddip Amin",
    school: "Sheridan College",
    status: "Junior"
  }
}
