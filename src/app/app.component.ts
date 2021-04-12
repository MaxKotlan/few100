import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 100';
  
  shoppingList = [
    "Beer",
    "Shampoo",
    "Taco Shells"
  ]
  
  addItem(item: HTMLInputElement){
    //this.shoppingList.push(item);
    this.shoppingList = [item.value, ...this.shoppingList];
    item.value = '';
    item.focus();
  }

}
