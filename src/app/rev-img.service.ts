import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class RevImgService {
  constructor(private http: Http) { }
  getImg(src: string){
    let url = `http://nameone.azurewebsites.net/api/images/${src}`;
    return url
  //   return this.http.get(url)
  //            .toPromise()
  //            .then( (response) => {response})
  //            .catch(this.handleError);
  // }
  // private handleError(error: any): Promise<any> {
  // console.error('An error occurred', error);
  // return Promise.reject(error.message || error);
  }
}
