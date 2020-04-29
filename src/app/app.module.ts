import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-modul/material/material.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {PaymentService} from '../app/services/payment.service';
import {FormControServiceService} from '../app/services/form-contro-service.service';
import { DeudaComponent } from './components/deuda/deuda.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    FormPaymentComponent,
    ConfirmDialogComponent,
    DeudaComponent
    
  ],
  entryComponents:[ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PaymentService,FormControServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
