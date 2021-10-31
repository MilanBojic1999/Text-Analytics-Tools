import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DandelionService} from "../service/dandelion.service";

@Component({
  selector: 'app-token-input',
  templateUrl: './token-input.component.html',
  styleUrls: ['./token-input.component.css']
})
export class TokenInputComponent implements OnInit {

  token:string;

  constructor(
    private service:DandelionService,
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
    this.service.checkTokenValidity(this.token).subscribe( r => {
        console.log("0000", r)
        if (r) {
          localStorage.setItem("dtoken", this.token)
          this.dialogRef.close()
        }
        console.log(this.token.length)
      }
    )

  }

  ngOnInit(): void {
  }

}
