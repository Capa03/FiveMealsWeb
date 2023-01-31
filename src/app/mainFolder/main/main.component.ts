import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  setwindow1 = "<app-queue-content></app-queue-content>";
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
