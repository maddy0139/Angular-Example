export interface IDepartment {
    id:number
    name: string
}

export class Department implements IDepartment {
    id: number;
    name: string;
    constructor(Data: any) {
        if (Data) {
            this.id = Data.id;
            this.name = Data.name;
        }
    }
}