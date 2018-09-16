import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent implements OnInit {

  topics =['Angular','React','Vue'];

  userModel = new User('Oni','a@a.com',9999,'','morning',true);
  constructor() { }

  ngOnInit() {
  }

}
