export class UserModel {
    _id: string;
    name: string;
    email: string;
    phone: string;
   

    constructor(id: string, name: string,  email: string, phone: string,) {
        this._id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
       
    }
}