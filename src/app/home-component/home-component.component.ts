import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TokenInputComponent} from "../token-input/token-input.component";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  curr_token:string

  constructor(public dialog:MatDialog) {
    this.curr_token = ""
  }

  ngOnInit(): void {
    if (localStorage.getItem("dtoken")) {
      this.curr_token = <string>localStorage.getItem("dtoken")
    } else {
      this.openDialog()
    }

  }

  openDialog(): void {
    const dialog = this.dialog.open(TokenInputComponent,
      {
        width: '400px'
      })

    dialog.afterClosed().subscribe(() => {
      if (localStorage.getItem("dtoken")) {
        this.curr_token = <string>localStorage.getItem("dtoken")
      }
    })
  }

}
