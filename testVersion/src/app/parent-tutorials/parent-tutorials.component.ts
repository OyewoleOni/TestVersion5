import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tutorials',
  templateUrl: './parent-tutorials.component.html',
  styleUrls: ['./parent-tutorials.component.css']
})
export class ParentTutorialsComponent implements OnInit {

  public childData: string;
  constructor() { }

  ngOnInit() {
  }

}
