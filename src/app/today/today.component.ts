import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/models/deal';
import { DealRepository } from 'src/models/deal.repository';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  deals: Deal[] = [];
  newDealDesc: string = "";
  selectedDeal: Deal = new Deal()

  constructor(private repository: DealRepository) {
    this.deals = repository.getDeals();
  }

  ngOnInit(): void {
  }

  addNewDeal(deal: Deal) {

    let newDeal = new Deal();
    let maxDealId = Math.max(...this.deals.map(x => x.DealId));
    if (this.deals.length == 0) {
      maxDealId = 0;
    }
    newDeal.DealId = maxDealId + 1;
    newDeal.Description = deal.Description;
    newDeal.ItemNumber = this.deals.length + 1;
    this.newDealDesc
    this.deals.push(newDeal);

    this.selectedDeal = new Deal();
    console.dir(this.deals);
  }

  selectDeal(deal: Deal) {
    this.selectedDeal = new Deal();
    this.selectedDeal.Description = deal.Description;
    this.selectedDeal.DealId = deal.DealId;
  }

  cancelDealUpdate() {
    this.selectedDeal = new Deal();
  }

  updateDeal(deal: Deal) {
    let dealToUpdate = this.deals.filter(x => x.DealId == deal.DealId)[0];
    dealToUpdate.Description = deal.Description;
    this.selectedDeal = new Deal();
  }

  markDone(deal: Deal) {
    let dealToUpdate = this.deals.filter(x => x.DealId == deal.DealId)[0];
    dealToUpdate.Done = !deal.Done;
  }

  removeDealItem(deal: Deal) {
    let dealToRemove = this.deals.find(x => x.DealId == deal.DealId);
    if (dealToRemove) {
      this.deals = this.deals.filter(x => x.DealId != dealToRemove?.DealId);
      var itemNumber = 1;
      this.deals.forEach(x => {
        x.ItemNumber = itemNumber;
        itemNumber++;
      })
    }
  }
}
