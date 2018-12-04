import { Department } from "./DepartmentModel";

export interface ISubDepartment {
    id:number,
    name: string,
    department:Department
}

export class SubDepartment implements ISubDepartment {
    id: number;
    name: string;
    department: Department
    constructor(Data: any) {
        if (Data) {
            this.id = Data.id;
            this.name = Data.name;
            this.department  = Data.department;
        }
    }
}