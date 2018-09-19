import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar3',
  templateUrl: './sidebar3.component.html',
  styleUrls: ['./sidebar3.component.css']
})
export class Sidebar3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openSlideMenu(){
     document.getElementById('side-menu').style.width='250px';
     document.getElementById('main').style.marginLeft='250px';

  }
  closeSideMenu(){
    document.getElementById('side-menu').style.width='0';
    document.getElementById('main').style.marginLeft='0';
  }
}
