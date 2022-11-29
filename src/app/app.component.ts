import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'donation';

  ngOnInit(){}

  amounts: any = [
    100,
    50,
    25,
    15,
  ];
  selectedAmount: number = this.amounts[2];

  radioChangeHandler (event: any) {
    this.selectedAmount = event.target.value;
  }

  occurences: any = [
    'ONE TIME',
    'MONTHLY'
  ];
  selectedOccurence: string = this.occurences[0];

  radioChangeHandler2 (event: any) {
    this.selectedOccurence = event.target.value;
  }

  pncAuth(){
    window.open(`https://pnc-cares.netlify.app/login?amount=${this.selectedAmount}&biller=7&recurring=${this.selectedOccurence === 'MONTHLY'}`, "_blank", 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

}
