/*
* Uddip Amin
* 991518202
*/
import { Component, OnInit, Input } from '@angular/core';
import { MYCLASSES } from "../../assets/data/myCourses";
import { MyBio } from "../mybio";
import { CarInterface } from "../carInterface";

@Component({
  selector: 'app-amin',
  templateUrl: './amin.component.html',
  styleUrls: ['./amin.component.css']
})
export class AminComponent implements OnInit {
  @Input() studentInfo: MyBio;
  @Input() New: CarInterface[];
  @Input() Used: CarInterface[];

  i: number;
  myclasses = MYCLASSES;
  outArea: string;
  carList: CarInterface[];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i) {
    this.i = i;
  }

  showHideText(index) {
    if (index == this.i) {
      return "block";
    } else {
      return "none";
    }
  }

  displayJSON(list) {
    switch (list) {
      case "new": this.carList = this.New;
        break;
      case "used": this.carList = this.Used;
        break;
    }

    this.outArea = `<h3>List of ${list} cars</h3>`;
    this.outArea += `<table>
                      <tr>
                        <th>Make</th><th>Type</th><th>Engine</th><th>Cost</th><th>Color</th>
                      </tr>`;
    for (let cls of this.carList) {
      this.outArea += `<tr>
                         <td> ${cls.make} </td>
                         <td> ${cls.type} </td>
                         <td> ${cls.engine} </td>
                         <td> ${cls.cost} </td>
                         <td> ${cls.color} </td>
                        </tr>`;
    }
  }

}
