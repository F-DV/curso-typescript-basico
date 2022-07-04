(() =>{ //funcion Anonima autoejecutada

  let myProductName = 'Product 1'; //infiere que es string
  let myproductPrice = 123; //Infiere que es de tipo number

  myProductName = 'change'; //podemos cambiarlo poor el mismo tipo
  myProductName.toLowerCase(); //podemos ejecutar funciones propias del tipo

  myproductPrice.toFixed(); // funcion propia del tipo

  const myproductstock = 1000; //No infiere el tipo ya que como es una constante
                              //nunca sera cambiada.

})()

