import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class SenMessageService {
  private url: string = 'http://nameone.azurewebsites.net/api/requests';
  constructor(private http: Http) { }
  responseState = {
    show: false,
    message: 'Your message was succesfully recived'
  };
  send(message){
    let body = message;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.url, body, {headers: headers})
      .subscribe( (data)=>{
        return this.responseState.show = true;
      }, (error)=>{
          console.log(error);
      })
  }
  takeState(){
    return this.responseState;
  }
}
