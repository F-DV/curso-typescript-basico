(() =>{
  //Tipos String
  let productTitle = 'My amazing product'; //inferido
  //productTitle = null; //genera error
  //productTitle = () =>{}; //genera error
  //productTitle = 123; //genera error
  productTitle = 'my amazing product changed';
  console.log('productitle', productTitle);

  const productDescription = "I'm bla bla bla"// utilizar comilla doble cuando dentro del texto vamos a usar comilla simple
  console.log('productDescription: ', productDescription);

  //backtick nos permite multiple linea y concantenar valores
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
  `
  console.log('sumary: ', summary);

  const myString: string = ""; //siempre tipar en minuscula

})()
