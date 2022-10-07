import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  loginService!: LoginService;
  constructor(
    loginService: LoginService,
    ordersService: OrdersService
  ) { 
    this.loginService = loginService;
    ordersService.listOrders("");
  }

  ngOnInit(): void {
  }

}
