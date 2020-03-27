import { AnleitungPage } from './../anleitung/anleitung.page';

import {
  Component
} from '@angular/core';
import {
  Platform,
  AlertController,
  NavController,
  ToastController,
  ModalController,
  LoadingController,
  IonRouterOutlet
} from '@ionic/angular';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.page.html',
  styleUrls: ['./fr.page.scss'],
})

export class FrPage  {
  shareSocialShareOptions: any;
  showSocialShare = false;
  chat: any;
  constructor(
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,

    public toastController: ToastController,
    public loadingController: LoadingController,

    public modalController: ModalController,
    public plt: Platform,
    public alertController: AlertController,
  ) {


  }
  async openAnleitung(){
    const modal = await this.modalController.create({
      component: AnleitungPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
    
  }

}
