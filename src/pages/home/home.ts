import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //properties
  splash = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    //app loads tabbar is hiddden
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
    }, 4000);

  }
}
