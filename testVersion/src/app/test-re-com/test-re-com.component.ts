import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-re-com',
  templateUrl: './test-re-com.component.html',
  styleUrls: ['./test-re-com.component.css']
})
export class TestReComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToggelChange(){
    console.log("It is clicked;");
  }
}
