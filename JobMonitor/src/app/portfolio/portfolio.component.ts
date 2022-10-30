import {Component, Injectable, OnInit} from '@angular/core';
import { PortfolioServiceService} from "../portfolio-service.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

@Injectable()
export class PortfolioComponent implements OnInit {

  portfolioList: any[] =  [];

  constructor(private pService:PortfolioServiceService) {

  }

  ngOnInit(): void {
   
  }
  getPort(){
    this.portfolioList = this.pService.loadJson();
  }

}
