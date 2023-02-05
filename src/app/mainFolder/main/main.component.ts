import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  setwindow1 = "<app-queue-content></app-queue-content>";
  setwindow2 = "";
  constructor(public router: Router){}
  openOrder(){
    this.setwindow1 = "<app-queue-content></app-queue-content>";
    this.setwindow2 = "";
  }

  openDelevery(){
    this.setwindow1 = "";
    this.setwindow2 = "<app-progress-content></app-progress-content>";
  }

  logout(){
    localStorage.setItem('Token','');
    this.router.navigate(['/login']);
  }
}
