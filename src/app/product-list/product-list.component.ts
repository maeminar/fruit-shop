import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, MaxLengthValidator } from '@angular/forms';
import { IProduit } from '../../shared/entities';
import { ProduitService } from '../../shared/produit.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  articles: IProduit[] = [];
  private produitService = inject(ProduitService);
 
  @Output() articleAdd = new EventEmitter<any>();

  ngOnInit(): void {
    this.articles = this.produitService.fetchAll().slice(0, 8);
  }

  addToCart(article: any) {
    this.articleAdd.emit(article);
  }

  augmenterQuantite(article: any) {
    article.quantite += 1;
  }

  diminuerQuantite(article: any) {
    if (article.quantite > 0) { //Ne pas aller en dessous de 0
      article.quantite -= 1;
    }
  }

}
