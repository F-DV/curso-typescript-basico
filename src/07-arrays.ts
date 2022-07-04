(()=>{
  const prices = [1,2,1,23,5,4]; //infiere, array de nuemeros
  //prices.push('assa'); //error
  //prices.push(true);//error
  //prices.push({});//error
  prices.push(1223);

  let products = ['hola',true]; //infiere los dos tipos
  products.push(false);

  let mixed: (number | string | boolean | object)[]= ['hola',true]; //explicito
  mixed.push(123); //deja insertar numeros por que lo indicamos en la forma explicita
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);// cuando señalamos object, jeta tambien agregar arrays y puede presentar problemas


})()
