import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Payment } from '../model/payment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  paymentList: Payment[] = [];

  constructor() {
    this.paymentList = [{ idPayment: 1, paymentDate: new Date(), amount: 100, description: "pago numero 1", idUser: new User(1) },
    { idPayment: 2, paymentDate: new Date(), amount: 22.50, description: "pago numero 2", idUser: new User(1) },
    { idPayment: 3, paymentDate: new Date(), amount: 40, description: "pago numero 3", idUser: new User(1) },
    { idPayment: 4, paymentDate: new Date(), amount: 10, description: "pago numero 4", idUser: new User(1) },
    { idPayment: 5, paymentDate: new Date(), amount: 5.50, description: "pago numero 5", idUser: new User(1) },
    { idPayment: 6, paymentDate: new Date(), amount: 30, description: "pago numero 6", idUser: new User(1) }
    ];

  }

  public getSumPaymentByUser(idUser: number) {
    var numeros = this.paymentList.filter(x => x.idUser.idUser === idUser)
      .map(x => x.amount);

    var sum = numeros.reduce((a, b) => a + b, 0);
    return sum;

  }

  public getPaymentsByUser(idUser: number): Observable<Payment[]> {
    // const paymentByUsuario = this.paymentList.find(x=> x.idUser.idUser === idUser);
    const ob$: Observable<Array<Payment>> = of(this.paymentList);
    return ob$;
  }

  public deletePayment(payment: Payment): Observable<boolean> {
    const index = this.paymentList.indexOf(payment);
    const res = this.paymentList.splice(index, 1);
    let result = false;
    if (res != null || res.length > 0) {
      result = true;
    }
    const ob$: Observable<boolean> = of(result);
    return ob$;
  }


  // this metho 
  public guardar(payment: Payment): Observable<Payment> {

    if (payment.idPayment != null) {
      this.paymentList.filter(x => x.idPayment === payment.idPayment)
        .map(x => {
          x.amount = payment.amount;
          x.description = payment.description;
          x.paymentDate = payment.paymentDate;
        });

    } else {
      const cant = this.paymentList.length;
      payment.idPayment = cant + 1;
      this.paymentList.push(payment);
    }
    const obs: Observable<Payment> = of(payment);
    return obs;



  }

}