import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: number;
    public country: string;
    public shipped = false;

    constructor(public cart: Cart) {}

    clear(): void {
        this.id = null;
        this.name = null;
        this.address = null;
        this.city = null;
        this.state = null;
        this.zip = null;
        this.country = null;
        this.shipped = false;

        this.cart.clear();
    }
}
