import { Injectable } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { GroceriesService } from './groceries.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {
  constructor(public alertController: AlertController, public dataService: GroceriesService) { }
  ///alert function that allows user to edit/add a grocery item
  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      subHeader: '',
      message: item ? 'Please edit item...' : 'Please add item...',
      inputs: [{
        name: 'name',
        placeholder: 'Name',
        value: item ? item.name : null
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
        value: item ? item.quantity : null
      }
      ],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        //saves the name and quantity input and inserts to array
        text: 'Save',
        handler: data => {
          console.log('Saved clicked', data);
          if (index != undefined) {
            this.dataService.getEditAlert(index, data);
          }
          else {
            this.dataService.getAddAlert(data);
          }
        }
      }
      ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
