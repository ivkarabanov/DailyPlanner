import { Injectable } from "@angular/core";
import { Deal } from "./deal";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class DealRepository {
    private deals: Deal[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getDeals().subscribe(data => {
            this.deals = data;
        });
    }

    getDeals(): Deal[] {
        return this.deals;
    }
    getDeal(id: number): Deal | undefined {
        return this.deals.find(p => p.DealId == id);
    }

}