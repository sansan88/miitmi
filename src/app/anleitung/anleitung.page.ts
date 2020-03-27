import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-anleitung',
  templateUrl: './anleitung.page.html',
  styleUrls: ['./anleitung.page.scss'],
})
export class AnleitungPage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();

  }

}
