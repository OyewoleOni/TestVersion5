import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

   _opened: boolean = false;
   mode="over";
   
  constructor(private router: Router) { }

  ngOnInit() {
  }

   _toggleSidebar() {
    this._opened = !this._opened;
    this.router.navigate(['/sidebar2']);
  }
}
