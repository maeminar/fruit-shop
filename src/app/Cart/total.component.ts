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
  tempList: any[] = [];

  addArticleToCart(article: any) {
    for(let i = 0; i < this.cartItems.length; i++)
    {
      if(this.cartItems[i].id === article.id) {
        this.cartItems[i].quantite += article.quantite;
        return;
      }
    }
    this.cartItems.push(article);
  }

  addToFinalCart() {
    this.cartItems = [...this.cartItems, ...this.tempList];
    this.tempList = [];
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

  getTotalPriceHT(){ //Obtenir le prix total HT
    let totalPriceHT = 0;
    for(let item of this.cartItems){
      totalPriceHT += item.prixHT * item.quantite;
    }
    return totalPriceHT;
  }

  getTotalPriceTTC(){ //Obtenir le prix total TTC
    let totalPriceTCT = this.getTotalPriceHT();
    let tva = 0.2; // Calcul du total TTC avec TVA à 20%
    const totalPriceTTC = totalPriceTCT * (1 + tva);
    return totalPriceTTC;
  }
}
