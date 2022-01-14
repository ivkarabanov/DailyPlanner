class Deal{

    constructor(id? : number, description?:string, itemNumber?: number){
        if (id){
            this.DealId =id;
        }
        if (description){
            this.Description = description;
        }
        if (itemNumber){
            this.ItemNumber = itemNumber;
        }
    }

    DealId:number = 0;
    Description: string = "";
    Done: boolean = false;
    ItemNumber: number = 0;
    CategoryId?: number = 0;
    PriorityId?: number = 0;
    StartDateTime:Date = new Date();
    EndDateTime:Date = new Date();
    DayDealListId?: number = 0;
    WeekDealListId?: number = 0;
}

export {Deal}