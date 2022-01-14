import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deal } from 'src/models/deal';

@Component({
  selector: 'deal-list-item',
  templateUrl: './deal-list-item.component.html',
  styleUrls: ['./deal-list-item.component.css']
})
export class DealListItemComponent implements OnInit {
  @Input() deal:Deal = new Deal();
  @Output() processMarkDone:EventEmitter<Deal> = new EventEmitter<Deal>();
  @Output() processSelectDeal:EventEmitter<Deal> = new EventEmitter<Deal>();
  @Output() removeDeal:EventEmitter<Deal> = new EventEmitter<Deal>();
  constructor() { }

  ngOnInit(): void {
  }

  selectDeal(){
    this.processSelectDeal.emit(this.deal);
  }
  markDone(){
    this.processMarkDone.emit(this.deal);
  }

  remove(){
    this.removeDeal.emit(this.deal);
  }


}
