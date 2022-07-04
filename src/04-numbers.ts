(()=>{
  //TIPOS DECIMALES

  let productPrice = 100; //infiere number
  productPrice = 12;
  console.log('productPrice: ',productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1'; //genera error sumar un sring a un numero
  customerAge = customerAge +1; //no genera error sumer un numero a un number
  console.log('customAge: ',customerAge);

  let produtInStock: number;
  //console.log('productInstock: ', produtInStock); //Genera error, tiene tipado pero no un valor

  /*if(produtInStock > 10){ //genera error por no estas inicializado
    console.log('is greater');//este tipo de errores son los que nos ayuda a detectar typescript
  }*/

  let discount = parseInt('123');
  console.log('discount: ', discount);
  if(discount <= 200){
    console.log('apply');
  }else{
    console.log('Not apply');
  }

  //TIPOS HEXADECIMAL,BINARIOS,OCTALES
  let hex = 0xfff;
  console.log('hex', hex);//Lo traduce a decimal

  let bin = 0b1010; //decimal 10
  console.log('bin', bin);//lo traduce a decimal

  const myNumber: number = 10; //no tipar Number con N en mayusculas

})()
