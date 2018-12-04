import { Department } from "./DepartmentModel";

export interface IDesignation {
    id?:number,
    name: string,
    department?: Department,
}

export class Designation implements IDesignation {
    id?:number;
    name: string;
    department?: Department;
    constructor(Data: IDesignation) {
        if (Data) {
            this.name = Data.name;
            this.id = Data.id;
            this.department = Data.department;
        }
    }
}