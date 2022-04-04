import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  //list of items, which is interpolated
  items = []

  constructor() { }
  //removeItem function
  removeItem(index) {
    this.items.splice(index, 1);
  }
  //add item function
  getAddAlert(data) {
    this.items.push(data);
  }
  //edit item function
  getEditAlert(index, data) {
    this.items[index] = data;
  }
  //returns items in service file
  getItems() {
    return this.items;
  }
}
