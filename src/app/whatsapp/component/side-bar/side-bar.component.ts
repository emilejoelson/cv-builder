import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  toggleSideBar() {
    document.querySelector('.container')?.classList.toggle('close');
    document.querySelector('.container-layout')?.classList.toggle('close');
    document.querySelector('.side-bar')?.classList.toggle('close');
    document.querySelector('.main-content')?.classList.toggle('close');
    document.querySelector('.message')?.classList.toggle('close');
  }
}
