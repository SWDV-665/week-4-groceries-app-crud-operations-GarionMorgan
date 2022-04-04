import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
//library for toast from ionic
import { ToastController } from '@ionic/angular';
//library for alerts through ionic
import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Interpolation that can change the title of the header
  title = "Grocery"

  //calls upon navCtrl, toastCtrl, alertCtrl, and calls upon generated service files
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertController: AlertController, public dataService: GroceriesService, public InputDialogService: InputDialogService) {

  }
  //load items from service file
  loadItems() {
    return this.dataService.getItems();
  }
  //toast function that removes an item. Displays that item is removed
  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: "Removing Item - " + index + " ...",
      duration: 3000
    });
    toast.present();
    //splices the array to show an item being removed
    this.dataService.removeItem(index);
  }
  //toast function that edits an item
  async editItem(item, index) {
    //logs into the console
    console.log("Editing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: "Editing Item - " + index + " ...",
      duration: 3000
    });
    toast.present();
    //calls upon presentEditAlert function
    this.InputDialogService.showPrompt(item, index);
    
  }
  //add functionaility for tab1 page.html
  async addItem() {
    console.log("adding item");
    this.InputDialogService.showPrompt();

  }
  

}
