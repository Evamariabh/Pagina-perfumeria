import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newestProducts = [
    {
      id: 1,
      name: 'Nuevo Perfume 1',
      description: 'Descripción del perfume.',
      price: 29.99,
      image: '../../../assets/nuevo1.jpg'
    },
    // Add more products as needed
  ];

}
// In your Angular component class


