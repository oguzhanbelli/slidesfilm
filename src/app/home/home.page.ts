import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMovieComponent } from '../modal/modal-movie/modal-movie.component';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(public modalController: ModalController,  private videoPlayer: VideoPlayer) {}

  options ={
centeredSlides:true,
loop:true,
spaceBetween:-100,
  };



  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMovieComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
}

// Playing a video.
