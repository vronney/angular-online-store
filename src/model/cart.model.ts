import { Injectable } from '@angular/core';
import { Product } from './product-model';

@Injectable()

export class Cart {
    // Attributes => an array, item count, price
    public lines: CartLine[] = [];
    public itemCount = 0;
    public cartPrice = 0;

    // method section

    addLine(product: Product, quantity: number = 1): void {
        let line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    // Update cart quantity
    updateQuantity(product: Product, quantity: number): void {
        let line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity = quantity;
        }
        this.recalculate();
    }

    // Remove from item from cart
    removeItem(id: number): void {
        let index = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        //  Recalculate cart
        this.recalculate();
    }

    // Delete all items in cart
    clear(): void {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    // Recalculate cart
    recalculate(): void {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(item => {
            this.itemCount += item.quantity;
            this.cartPrice += (item.quantity * item.product.price);
        });
    }
 }

export class CartLine {
    constructor(public product: Product, public quantity: number) { }

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}
