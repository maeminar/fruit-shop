import { Injectable } from '@angular/core';
import { mockArticles } from './mockArticles';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  fetchAll() {
    return mockArticles; // Retourne les données mockées
  }
}
