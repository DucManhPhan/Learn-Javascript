import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products: Array<Product> = [
      {id: 1, name: 'Product 1'},
      {id: 2, name: 'Product 2'},
      {id: 3, name: 'Product 3'},
      {id: 4, name: 'Product 4'},
      {id: 5, name: 'Product 5'}
    ];

    return { products };
  }
}
