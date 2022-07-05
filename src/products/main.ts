import {addProduct, products} from './products-service';

addProduct({
  title: 'pro1',
  createdAt: new Date(1991,1,1),
  stock: 12
});

console.log(products);

addProduct({
  title: 'pro1',
  createdAt: new Date(1991,1,1),
  stock: 12,
  size: 'M'
});

console.log(products);
