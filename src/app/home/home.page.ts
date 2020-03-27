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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

    /*if (navigator.language.includes("fr")){
      this.navCtrl.navigateRoot('/fr');
    }
    console.log(navigator.language);
    */
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
