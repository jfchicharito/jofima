import { Component } from '@angular/core';
import {User} from '../app/model/user';
import { Payment } from './model/payment';
import { Debt } from './model/debt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';
  user:User;
  paymentSaved:Payment= new Payment();
  constructor(){
    this.user = new User(1);
    this.user.nombre ="Jose Eduardo Figueroa Magaña";
    this.user.edad =10;
    this.user.deuda = new Debt(1, "compra de un carro", 20000);
  }

}
