import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subscription, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PortfolioServiceService {
  posts: any[] =  [];
  myname: any[] =  [];
  users: any[] =  [];
  constructor(private http: HttpClient) {
  }

  configUrl = 'assets/config.json';

  loadJson(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response: any)=>{
      this.posts = response;
    });
      return this.posts;
  }

  loadSportName(){
    this.http.get("http://localhost:3000/deals/greet").subscribe((response: any)=>{
      this.myname = response;
    });
    return this.myname;
  }

  loadUserNames(){
    this.http.get("http://localhost:3000/database/api/getcard").subscribe((response: any)=>{
      this.users = response;
    });
    return this.users;
  }
}


