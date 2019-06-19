 import { Injectable } from '@angular/core';
 import {HttpClient} from "@angular/common/http";
 import {Observable} from "rxjs";
 import {Customer} from "../dto/Customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private  http:HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customers');
  }

}
