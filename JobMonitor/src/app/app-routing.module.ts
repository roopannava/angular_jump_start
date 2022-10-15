import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {ActiveOrderComponent} from "./active-order/active-order.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'active-order', component: ActiveOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
