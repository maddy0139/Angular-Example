import { Designation } from "./DesignationModel";
import { Department } from "./DepartmentModel";
import { SubDepartment } from "./SubDepartmentModel";

export interface IEmpDetailModel {
    id?: number,
    firstName?: string,
    middleName?: string,
    lastName?: string,
    phoneNumber?: LongRange,
    gender?: string,
    dateOfBirth?: Date,
    dateOfJoining?: Date,
    designation?: Designation,
    department?: Department,
    subDepartment:SubDepartment,
    userId?: LongRange,
    employmentStatus?: string,
    employmentType?: string,
    experience?: DoubleRange
}

export class EmpDetailModel implements IEmpDetailModel {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: LongRange;
    gender: string;
    dateOfBirth: Date;
    dateOfJoining: Date;
    designation: Designation;
    department: Department;
    subDepartment:SubDepartment;
    userId: LongRange;
    employmentStatus: string;
    employmentType: string;
    experience: DoubleRange;

    constructor(Data:IEmpDetailModel)
    {
        this.id = Data.id;
        this.firstName = Data.firstName;
        this.middleName = Data.middleName;
        this.lastName = Data.lastName;
        this.phoneNumber = Data.phoneNumber;
        this.gender = Data.gender;
        this.dateOfBirth = Data.dateOfBirth;
        this.dateOfJoining = Data.dateOfJoining;
        this.designation = Data.designation;
        this.department = Data.department;
        this.subDepartment = Data.subDepartment;
        this.userId = Data.userId;
        this.employmentStatus = Data.employmentStatus;
        this.employmentType = Data.employmentType;
        this.experience = Data.experience;
    }

}