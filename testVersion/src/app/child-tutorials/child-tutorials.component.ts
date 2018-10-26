import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-tutorials',
  templateUrl: './child-tutorials.component.html',
  styleUrls: ['./child-tutorials.component.css']
})
export class ChildTutorialsComponent implements OnInit {

  @Input() public parentData: string;
  @Output() public childEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChanged(value){
    this.childEvent.emit(value);
  }
}
