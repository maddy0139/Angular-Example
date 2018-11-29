export interface IDesignation {
    designationName: string,
    departmentId?: string,
}

export class Designation implements IDesignation {
    designationName: string;
    departmentId?: string;
    constructor(Data: any) {
        if (Data) {
            this.designationName = Data.designationName;
            this.departmentId = Data.departmentId;
        }
    }
}