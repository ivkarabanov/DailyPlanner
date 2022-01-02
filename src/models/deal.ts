class Deal{
    Id:number = 0;
    Description: string = "";
    Done: boolean = false;
   // ItemNumber: number = this.Id +1;

    public get ItemNumber() {
        return this.Id;
    }
}

export {Deal}