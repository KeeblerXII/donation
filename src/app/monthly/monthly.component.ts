import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent {
  selectedAmount: string = '';
  amounts: any = [
    '$100',
    '$50',
    '$25',
    '$15'
  ];
  
  radioChangeHandler (event: any) {
    this.selectedAmount = event.target.value;
  }

}