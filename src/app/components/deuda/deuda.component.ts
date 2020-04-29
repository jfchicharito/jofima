import { Component, OnInit, Input } from '@angular/core';
import { Debt } from 'src/app/model/debt';
import { PaymentService } from 'src/app/services/payment.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.css']
})
export class DeudaComponent implements OnInit {

@Input() user:User;
  constructor(public paymentService:PaymentService) { }
  ngOnInit() {
  }

}
