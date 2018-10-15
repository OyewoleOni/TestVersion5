import { PubServiceService } from './../pub-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user:string;
  constructor(private _pubServ : PubServiceService) { }

  ngOnInit() {
    this._pubServ.cast.subscribe(user=> this.user=user);
  }


}
