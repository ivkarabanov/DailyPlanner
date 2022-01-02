import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/models/deal';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  deals: Deal[] = [];
  newDealDesc: string = "";
  selectedDeal: Deal = new Deal()

  constructor() {
    var deal1 = new Deal();
    deal1.Id = 1;
    deal1.Description = "Купить теплые штаны";
    var deal2 = new Deal();
    deal2.Description = "Натрекать еще пару часов сегодня"
    deal2.Id = 2;
    this.deals.push(deal1);
    this.deals.push(deal2);
  }

  ngOnInit(): void {
  }

  addNewDeal(deal: Deal) {

    var newDeal = new Deal();
    newDeal.Id = this.deals.length+1;
    newDeal.Description = deal.Description;
    this.newDealDesc
    this.deals.push(newDeal);

    this.selectedDeal = new Deal();
  }

  selectDeal(deal: Deal){
    this.selectedDeal = new Deal();
    this.selectedDeal.Description = deal.Description;
    this.selectedDeal.Id = deal.Id;
  }

  cancelDealUpdate(){
    this.selectedDeal = new Deal();
  }

  updateDeal(deal:Deal){
    let dealToUpdate = this.deals.filter(x=>x.Id == deal.Id)[0];
    dealToUpdate.Description = deal.Description;
    this.selectedDeal = new Deal();
  }

  markDone(deal:Deal){
    let dealToUpdate = this.deals.filter(x=>x.Id == deal.Id)[0];
    dealToUpdate.Done = !deal.Done;
  }
}
