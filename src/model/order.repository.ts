import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { StaticDataSourceService } from './static-data-source';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSourceService) {

    }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(Order: Order): Observable<Order> {
        return this.dataSource.saveOrder(Order);
    }
}
