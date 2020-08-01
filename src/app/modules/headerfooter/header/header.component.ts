/*
* Uddip Amin
* 991518202
*/
import { Component, OnInit, Input } from '@angular/core';
import { MyBio } from "../../../mybio";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo: MyBio;

  constructor() { }

  ngOnInit(): void {
  }

}
