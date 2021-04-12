import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Web 100';

  shoppingList = [
    'Beer',
    'Shampoo',
    'Taco Shells'
  ]

  // void addItem(string item)
  addItem(item: HTMLInputElement): void {
    this.shoppingList = [item.value, ...this.shoppingList];
    item.value = '';
    item.focus();
  }
}
