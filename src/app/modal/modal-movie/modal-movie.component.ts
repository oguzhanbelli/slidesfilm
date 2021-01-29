import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.scss'],
})
export class ModalMovieComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }}
