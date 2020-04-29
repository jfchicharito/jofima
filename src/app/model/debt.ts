

export class Debt {
    idDebt: number;
    description: string;
    amount: number;


    constructor(idDebt: number, descripcion: string, amount: number) {
        this.idDebt = idDebt;
        this.description = descripcion;
        this.amount = amount;

    }
}