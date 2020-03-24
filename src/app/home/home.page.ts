import {
  Component
} from '@angular/core';
import {
  Platform,
  AlertController,
  NavController,
  ToastController,
  ModalController,
  LoadingController
} from '@ionic/angular';

import {
  Router,
  ActivatedRoute
} from '@angular/router';
//Capacitor
import {
  Plugins
} from '@capacitor/core';
const {
  Share,
  Browser
} = Plugins;

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

    public router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,

    public toastController: ToastController,
    public loadingController: LoadingController,

    public modalController: ModalController,
    public plt: Platform,
    public alertController: AlertController,
  ) {
/*

    this.chat = {
      "url": "https://meet.jit.si/miitmi-",
      "titel": "",
      "name": "",
      shared: false
    };

    this.route.queryParams.subscribe(params => {

      console.log(params);

      if (params.room ) {

        this.chat = {
          "url": "https://meet.jit.si/miitmi-",
          "titel":  params.room,
          //"name": params.name,
          shared: false
        };
        this.openShare();
     
      }
    });

*/
  }

  /* async openChat() {
    await Browser.open({ url: this.chat.url });
  } */

  /*****************************************/
  // SHARE
  /*****************************************/
/*
  async openShare() {

    let random = Math.random().toString(36).substring(2);
    this.chat.url = this.chat.url + random;

    console.log( this.chat);

    if (this.plt.is('mobile') && navigator && navigator["share"]) {
      await this.share(this.chat).catch(e=>{
        this.chat.shared = false;
      });
     
    } else {
      await this.shareFallback(this.chat).catch(e=>{
        this.chat.shared = false;
      });
    }
    this.chat.shared = true;
  };

  async share(chat) {
    let shareRet = await Share.share({
      title: "miitmi " + chat.titel,
      text:  "👋 treffe mich mit miitmii!",
      url: chat.url,
      dialogTitle: 'Miitmi! '
    }).catch(onrejected => {
      this.chat.shared = false;
      

    });
  }

  shareFallback(chat) {
    return new Promise( (resolve) => {
      let  share = chat.url;
      if (chat.titel){
        share = "👋 treffe mich mit miitmii!: " +  chat.url
      }

      console.log("text to share" + share);

      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [{
          twitter: {
            socialShareUrl:  share,
            socialSharePopupWidth: 300,
            socialSharePopupHeight: 400
          }
        }, {
          email: {
            socialShareBody: share
          }
        }, {
          whatsapp: {
            socialShareUrl: share
          }
        },{
          facebook: {
            socialShareUrl: share
          }
        },{
          copy: {
            socialShareUrl: share
          }
        }]
      };
      this.showSocialShare = true;
      resolve();
    });
  }
  */
}