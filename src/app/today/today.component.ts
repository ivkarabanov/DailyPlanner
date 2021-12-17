import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/models/deal';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  deals:Deal[] = [];
newDealDesc: string = "";

  constructor() {
    var deal1 = new Deal();
    deal1.Id =0;
    deal1.Description = "Купить теплые штаны";
    var deal2 = new Deal();
    deal2.Description="Натрекать еще пару часов сегодня"
    deal2.Id =1
this.deals.push(deal1);
this.deals.push(deal2);
   }

  ngOnInit(): void {
  }

addNewDeal(){
  if (this.newDealDesc){
    var deal = new Deal();
    deal.Description = this.newDealDesc;
    deal.Id = this.deals.length;
    this.deals.push(deal);
  }
  this.newDealDesc = "";
}
}
