import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService} from "../portfolio-service.service";
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  myname: any[] =  [];
  users:  any[] =  [];
  constructor(private pService:PortfolioServiceService) { }

  ngOnInit(): void {
    this.users = this.pService.loadUserNames();
  }
  getNameOfTheSport(){
    this.myname = this.pService.loadSportName();
  }


  getUsers(){
    this.users = this.pService.loadUserNames();
  }
}
