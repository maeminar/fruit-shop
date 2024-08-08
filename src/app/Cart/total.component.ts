import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, ProductListComponent],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  cartItems: any[] = [];

  addArticleToCart(article: any) {
    this.cartItems.push(article);
  }

  deleteCart(index: number) { 
    this.cartItems.splice(index, 1);
  }

  deleteAllCart() {
    this.cartItems = [];
  }

  getTotalQuantity(){
    let totalQuantity = 0;
    for(let item of this.cartItems){
      totalQuantity += item.quantite;
    }
    return totalQuantity;
  }

  getTotalPriceHT(){
    let totalPriceHT = 0;
    for(let item of this.cartItems){
      totalPriceHT += item.prixHT;
    }
    return totalPriceHT;
  }

  getTotalPriceTTC(){
    let totalPriceTCT = this.getTotalPriceHT();
    let tva = 0.2; // Calcul du total TTC avec TVA à 20%
    const totalPriceTTC = totalPriceTCT * (1 + tva);
    return totalPriceTTC;
  }
}
