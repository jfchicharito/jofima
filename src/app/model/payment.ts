import { User } from "./user";

export class Payment{
    idPayment:number;
    paymentDate:Date;
    amount:number;
    description:string;
    idUser:User;

    constructor(){
        this.idPayment=null;
        this.paymentDate=new Date();
        this.amount=null;
        this.description="";
        this.idUser = new User(null);

    }

}