import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class FormControServiceService {
  idPayment: number = null;
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.pattern(/^\d*(?:[.,]\d{1,2})?$/)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      paymentDate: new FormControl('', [Validators.required])
    });

  }

  public getForm() {
    return this.myForm;
  }

  public getIdPayment() {
    return this.idPayment;
  }

  public setForm(payment: Payment) {
    this.idPayment = payment.idPayment;
    this.myForm.setValue({
      amount: payment.amount,
      description: payment.description,
      paymentDate: payment.paymentDate
    });
  }

  public resetForm() {
    this.idPayment = null;
    this.myForm.setValue({
      amount: null,
      description: "",
      paymentDate: null
    });
    this.myForm.markAsUntouched();
    this.myForm.markAsPristine();

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }


}
