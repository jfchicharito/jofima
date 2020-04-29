import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Payment } from '../../model/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { FormControServiceService } from 'src/app/services/form-contro-service.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @Input() paymentSaved: Payment;
  @Input() user: User;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<Payment>;
  displayedColumns: string[] = ['idPayment', 'paymentDate', 'description', 'amount', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Payment>();
  peymentSelected:Payment = new Payment();

  constructor(private formService:FormControServiceService ,private paymantService: PaymentService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.user);
    this.paymantService.getPaymentsByUser(this.user.idUser).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err);
      console.log(err.error.message);

    })
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  openConfirmDialog(msg) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: msg
    });
  }

  eliminar(payment: Payment) {

    this.openConfirmDialog("Are you sure to delete the payment ?").afterClosed().subscribe(res => {
      if (res) {
        const index: number = this.dataSource.data.indexOf(payment);
        this.paymantService.deletePayment(payment).subscribe(data => {
          if (data) {

            // this.dataSource.data.splice(index, 1);
            this.dataSource = new MatTableDataSource<Payment>(this.dataSource.data);
            this.dataSource.paginator = this.paginator;
           
          }
        });
      }
    });
  }

  public editar(payment: Payment) {
    console.log(payment);
    this.peymentSelected = payment;
    this.formService.setForm(payment);
    
  }

  public agregarRegistro(payment: Payment) {
    console.log("enviado al padre");
    console.log(payment);
    this.paymentSaved = payment;

    //this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<Payment>(this.dataSource.data);

  }





}
