import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Deal } from 'src/models/deal';

@Component({
  selector: 'app-deal-editor',
  templateUrl: './deal-editor.component.html',
  styleUrls: ['./deal-editor.component.css']
})
export class DealEditorComponent implements OnInit {
  @Input() deal:Deal = new Deal();
  @Output() processDealAdd:EventEmitter<Deal> = new EventEmitter<Deal>();
  @Output() processDealUpdate:EventEmitter<Deal> = new EventEmitter<Deal>();
  public get dealEmpty() {
    return this.deal.Id ==0;
  }
  constructor() { }

  ngOnInit(): void {
  }

  addNewDeal(){
    this.processDealAdd.emit(this.deal);
    console.log('add');
  }

  updateDeal(){
    this.processDealUpdate.emit(this.deal);
    console.log('update');
  }

  cancelDealUpdate(){
    this.deal.Id = 0;
    this.deal.Description = "";
  }
}
