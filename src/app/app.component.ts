import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  dataLength = 0;
  inputData = '';

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  clearSearchWord(tKeyCode: number, tInStr: string) {

    this.inputData = tInStr;
    this.dataLength = this.inputData.length;

    if (tKeyCode === 27 ) {
      this.dataLength = 0;
      this.inputData = '';
      console.log('Yes');
    }

  }

}
