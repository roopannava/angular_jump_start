import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  posts: any[] =  [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
  loadJson(){
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response: any)=>{
            this.posts = response;
        });
  }

}
