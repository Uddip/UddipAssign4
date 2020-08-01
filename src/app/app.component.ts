/*
* Uddip Amin
* 991518202
*/
import { Component } from '@angular/core';
import { MyBio } from "./mybio";
import { CarInterface } from "./carInterface";
import carList from "../assets/data/cars.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UddipAssign4';
  mybio: MyBio = {
    sid: 991518202,
    sname: "Uddip Amin",
    imgloc: "assets/images/narvik.jpeg",
    school: "Sheridan College",
    status: "Junior"
  };
  new: CarInterface[] = carList.cars.New;
  used: CarInterface[] = carList.cars.Used;
}
