(() =>{
  //Nos permite tener la flexibilidad de javascript pero correctamente
  //sin usas any
  let userId: string | number; //ya que un id puede ser cualquiera de estos dos valorres
  userId= '123';
  userId= 123;

  function grettings(myText: string | number){

    /**
     * Cuando reciba un numero actua de una forma y deja utilizar los metodos reservados para numbers
     * Cuando reciba un string actuara de otra forma y dejara utilizar los metodos reservados
     */
    if(typeof myText === 'string'){
      console.log(`I'm  a string: ${myText.toLowerCase}`);
    }else{
      console.log(`I'm  a number: ${myText.toFixed(1)}`);
    }
  }

  grettings('FELIPE');
  grettings(2.22222);

})();
