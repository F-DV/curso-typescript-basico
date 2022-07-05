import { product} from './products.model';

export const products: product[] = [];

//funcion con objeto de parametro
export const addProduct = (data:product) => {
  products.push(data);
}
