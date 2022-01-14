class WeekDealListId{
    WeekDealListId:number = 0;
    StartDate:Date =new Date();
    Notes: string ="";

    get EndDate(){
        return this.StartDate.setDate(this.StartDate.getDate() + 6);
    }
}