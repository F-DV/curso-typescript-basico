(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';

  //se crea funcion
  function createProductTojson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductTojson('P1', new Date(),12,'S');//Debo enviarle todos los parametros

  function createProductTojsonV2(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes | undefined
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product2 = createProductTojsonV2('P1', new Date(),12,undefined);// me pide undefined de forma explicita

  function createProductTojsonV3(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product3 = createProductTojsonV3('P1', new Date(),12);// size es de forma opcional, la envio o no

})();


