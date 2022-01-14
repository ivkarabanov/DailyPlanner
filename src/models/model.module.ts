import { NgModule } from "@angular/core";
import { DealRepository } from "./deal.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
 providers: [DealRepository, StaticDataSource]
})
export class ModelModule { }