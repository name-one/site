import { Component, OnInit } from '@angular/core';
import { SenMessageService } from '../sen-message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  country: string;
  message: string
  correctEmail: boolean = true;
  state;

  constructor( private _senMessageService: SenMessageService) { }

  ngOnInit() {
    this.takeState();
  }
  takeState(){
    this.state = this._senMessageService.takeState();
  }
  checkMail(){
    let emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailPattern.test(this.email) ? this.correctEmail = true : this.correctEmail = false;
  }
  validate(){
    let emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailPattern.test(this.email) ? this.correctEmail = true : this.correctEmail = false;
    if(this.correctEmail){
      let message = {
        name: this.name,
        company: this.company,
        jobTitle: this.jobTitle,
        email: this.email,
        country: this.country,
        message: this.message
      }
      console.log(this._senMessageService.send(message))
    }
  }

}
