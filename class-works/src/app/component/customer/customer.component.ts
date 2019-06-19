import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/dto/Customer';
import { CustomerService} from "../../service/customer.service";



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];


  selectedCustomer: Customer = new Customer('', '', '');


  constructor(private customerService: CustomerService) {

   }


  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers=>{
      this.customers = customers

      }

    );

  }


}
