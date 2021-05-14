import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateComponent } from './translate/translate.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public popoverController:PopoverController) {}
async openPopover(sen){
  const pop = await this.popoverController.create({
    component:TranslateComponent,
    componentProps:{sentence:sen}
  })
  await pop.present();
}
}
