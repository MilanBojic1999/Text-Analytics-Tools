import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-token-input',
  templateUrl: './token-input.component.html',
  styleUrls: ['./token-input.component.css']
})
export class TokenInputComponent implements OnInit {

  token:string;

  constructor(
    public dialogRef: MatDialogRef<TokenInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    dialogRef.disableClose = true;
    dialogRef.backdropClick().subscribe( () => {console.log("Try to close"); this.tryToClose()})
    if(localStorage.getItem("dtoken")) {
      this.token = <string>localStorage.getItem("dtoken");
    }else {
      this.token = ''
    }

  }



  tryToClose(): void{
    if(this.token.length == 10){
      localStorage.setItem("dtoken",this.token)
      this.dialogRef.close()
    }
    console.log(this.token.length)
  }

  ngOnInit(): void {
  }

}
