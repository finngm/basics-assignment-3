import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = true;
  btnClicks = [];

  onButtonClick() {
    this.displayText = !this.displayText;
    this.btnClicks.push(this.btnClicks.length+1);
  }

  changeColours(index) {
    return index > 3;
  }
}
