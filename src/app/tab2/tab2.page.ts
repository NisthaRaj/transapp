import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FreeapiService } from '../freeapi.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
translatedText;
inputSen;
target="hi";
source ="en";

  constructor(public alertController: AlertController,private translateService:FreeapiService) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Semantic alert',
      message: 'Please use the language with English-like alphabets.',
      buttons: ['OK']
    });

    await alert.present();
  }
translate(){
  this.translateService.translate(this.inputSen,this.target,this.source).subscribe((res:any)=>{
    this.translatedText = res.translatedText;
  })
}

}
