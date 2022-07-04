(() =>{
  /**
   * type es una palabra de uso esclusivo de typescript
   * podemos crear nuestros propios tipos para cierta variable
   */
  type userID = string | number;

  let userId: string | number;

  function grettings(myText: userID){//tipos que recibe

    if(typeof myText === 'string'){
      console.log(`I'm  a string: ${myText.toLowerCase}`);
    }
  }

  //  LITERAL TYPES
  // Que haga parte de un conjunto
  type Sizes = 'S' |'M'|'L'|'XL';
  let shirhSize: Sizes;
  shirhSize = 'M'; //el autocompletado me ayuda con el conjunto
  //shirhSize = 'sas'; //genera error, no hace parte del conjunto



})();
