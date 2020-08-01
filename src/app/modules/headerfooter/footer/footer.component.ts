/*
* Uddip Amin
* 991518202
*/
import { Component, OnInit, Input } from '@angular/core';
import { MyBio } from "../../../mybio";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerInfo: MyBio;

  day;
  month;
  year;

  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    this.year = date.getFullYear();
    const months
        = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.month = months[date.getMonth()];
    this.day = date.getDate();
  }

}
