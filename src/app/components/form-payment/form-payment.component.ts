import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControServiceService } from 'src/app/services/form-contro-service.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.css']
})
export class FormPaymentComponent implements OnInit {
  @Output()
  paymentSaved: EventEmitter<Payment> = new EventEmitter<Payment>();
  payment: Payment;
  startDate: Date;
  @Input()
  user: User;

  constructor(public fromService: FormControServiceService, private paymentService: PaymentService, private snackBar: MatSnackBar) {
    this.payment = new Payment();
  }

  ngOnInit() {
    this.startDate = new Date();
    this.startDate.setDate(this.startDate.getDate() - 7);
  }

  public guardar() {
    if (this.fromService.getForm().valid) {
      this.payment = this.fromService.getForm().value;
      this.payment.idPayment = this.fromService.getIdPayment();
      this.payment.idUser = this.user;
      console.log(this.payment);
      this.paymentService.guardar(this.payment).subscribe(data => {
        if (data.idPayment != null) {
          this.paymentSaved.emit(data);
          this.snackBar.open("Payment saved", "successful", {
            duration: 4000,
            verticalPosition: 'top'
          });
          this.payment = new Payment();

          this.fromService.resetForm();
        }
      });
    }

  }




}
