import { Component } from '@angular/core';
import { Platform, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsProvider } from '../providers/events/events';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loading:Loading;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private events_provider: EventsProvider, private loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      

      this.events_provider
          .getIsLoading()
          .subscribe((isLoading)=>{
            if(isLoading){
              this.loading = this.loadingCtrl.create({
                content: 'Espera un Segundo...'
              });
            this.loading.present();
            }else{
              this.loading.dismiss();
            }
          });

    });
  }


}

