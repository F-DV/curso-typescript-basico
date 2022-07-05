(()=>{
  //OBJETOS COMO TIPOS
  // Creamos un objeto como un typo y lo enviamos como parametro
  // a la funcion que deseemos recibir ese tipo

    type Sizes = 'S'|'M'|'L'|'XL';

    type product ={
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    };

    const products: product[] = [];

    //funcion con objeto de parametro
    const addProduct = (data:product) => {
      products.push(data);
    }

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

  })();
