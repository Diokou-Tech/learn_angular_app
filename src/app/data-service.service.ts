import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpCL : HttpClient) { }

  getAll(){
    let req= this.httpCL.get('localhost:8000/api/news');
    console.log('Get all lines of database !');
    return req;
  }
}
