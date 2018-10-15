
import { PubServiceService } from './../pub-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user:string;
  editUser:string;
  constructor(private _pubServ : PubServiceService) { }

  ngOnInit() {
    this._pubServ.cast.subscribe(user=> this.user=user);
  }
  editTheUser(){
    this._pubServ.editUser(this.editUser)
  }
}
