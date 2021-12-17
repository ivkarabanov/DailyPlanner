class Deal{
    Id:number = 0;
    Description: string = "";
   // ItemNumber: number = this.Id +1;

    public get ItemNumber() {
        return this.Id +1;
    }
}

export {Deal}