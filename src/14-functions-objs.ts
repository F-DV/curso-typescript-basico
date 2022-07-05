(()=>{
//Cuando una funcion recibe demasiados parametros es  mejor enviarle un
//objeto

  type Sizes = 'S'|'M'|'L'|'XL';

  const products: any = [];

  //funcion con objeto de parametro
  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(1991,1,1),
    stock: 12
  });

  console.log(products);

})();
