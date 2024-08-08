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
    if (article.quantite > 0) {
      const existingItem = this.cartItems.find(item => item.id === article.id);
      if (existingItem) {
        existingItem.quantite += article.quantite;
      } else {
        const newItem = { ...article }; // toutes les propriétés de l'objet article sont copiées dans le nouvel objet newItem
        this.cartItems.push(newItem);
      }
    }
  }

  deleteCart(index: number) {  // Supprimer une ligne du panier
    this.cartItems.splice(index, 1);
  }

  deleteAllCart() { // Supprimre tout le panier
    this.cartItems = [];
  }

  getTotalQuantity(){ //Récupérer la quantité totale
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
