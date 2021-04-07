import { Component, OnInit, ɵCurrencyIndex } from '@angular/core';
import { Order } from '../../shared/order'
import { from } from 'rxjs';


@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, customer: {
        id: 1, name: 'Bistro Bakery', state: 'Chilanga', email: 'bistral@mail.com'
      },
      total: 300, placed: new Date(2020, 4, 1), fulfilled: new Date(2020, 1, 1)


    },

    {
      id: 2, customer: {
        id: 2, name: 'Dan Farms', state: 'Chilanga', email: 'danfarms@mail.com'
      },
      total: 300, placed: new Date(2020, 4, 1), fulfilled: new Date(2020, 1, 1)

    },
    {
      id: 3, customer: {
        id: 3, name: 'Arc Hosting', state: 'Chilanga', email: 'archostinh@mail.com'
      },
      total: 300, placed: new Date(2020, 4, 1), fulfilled: new Date(2020, 1, 1)

    },

    {
      id: 4, customer: {
        id: 4, name: 'Pams Bakery', state: 'Chilanga', email: 'pamsbake@mail.com'
      },
      total: 300, placed: new Date(2020, 4, 1), fulfilled: new Date(2020, 1, 1)

    },

    {
      id: 5, customer: {
        id: 5, name: 'Genesis Manufacturers', state: 'Chilanga', email: 'genesis@mail.com'
      },
      total: 300, placed: new Date(2020, 4, 1), fulfilled: new Date()

    }

  ];

  ngOnInit(): void {
  }

}
