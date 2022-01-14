import { Injectable } from "@angular/core";
import { Deal } from "./deal";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
 private deals: Deal[] = [
     new Deal(1, "Купить теплые штаны",1),
     new Deal(2, "Натрекать еще пару часов сегодня",2),
 ]
 getDeals(): Observable<Deal[]>{
     return from([this.deals]);
 }
}