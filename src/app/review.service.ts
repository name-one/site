import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReviewService {
  private responseUrl:string = 'http://nameone.azurewebsites.net/api/responses';
  constructor(private http: Http) { }
  getReviews(){
    return this.http.get(this.responseUrl)
             .toPromise()
             .then( (response)=>{
              return  response.json() as any;
              })
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
