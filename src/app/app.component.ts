import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FiveMealsWeb';
  setwindow1 = "";
  setwindow2 = "";
  
  openOrder(){
    this.setwindow1 = "<app-queue-content></app-queue-content>";
    this.setwindow2 = "";
  }

  openDelevery(){
    this.setwindow1 = "";
    this.setwindow2 = "<app-progress-content></app-progress-content>";
  }
}

