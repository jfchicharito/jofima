import { Debt } from "./debt";

export class User {
    idUser: number;
    nombre: string;
    edad: number;
    deuda: Debt;
    constructor(idUser: number) {
        this.idUser = idUser;
        this.nombre = "";
        this.edad = null;
        this.deuda = new Debt(null, "", null);
    }

}