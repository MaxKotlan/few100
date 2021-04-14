import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  constructor() { }

  billAmount = 0;
  tipPercentage = 0.2;
  tipAmount = 0;
  totalTobePaid = 0;

  changeTipPercentage(percentage: number): void {
    this.tipPercentage = percentage;
    this.updateStuff();
  }

  updateBillAmount(amountEl: HTMLInputElement): void {
    this.billAmount = amountEl.valueAsNumber;
    this.updateStuff();
  }

  updateStuff(){
    this.tipAmount = this.billAmount*this.tipPercentage;
    this.totalTobePaid = this.tipAmount+ this.billAmount;

  }

  ngOnInit(): void {
  }

}
