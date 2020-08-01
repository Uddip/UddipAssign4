/*
* Uddip Amin
* 991518202
*/
import { Component, OnInit, Input } from '@angular/core';
import { MYCLASSES } from "../../assets/data/myCourses";

@Component({
  selector: 'app-amin',
  templateUrl: './amin.component.html',
  styleUrls: ['./amin.component.css']
})
export class AminComponent implements OnInit {
  i: number;
  myclasses = MYCLASSES;

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

}
