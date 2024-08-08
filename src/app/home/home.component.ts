import { Component } from '@angular/core';
import { TotalComponent } from '../Cart/total.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ProductListComponent, TotalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
