export interface IUser {
    usernameOrEmail?: string,
    password?: string,
}

export class User implements IUser {
    usernameOrEmail?: string;
    password?: string;
    constructor(Data: IUser) {
        if (Data) {
            this.usernameOrEmail = Data.usernameOrEmail;
            this.password = Data.password;
        }
    }
}