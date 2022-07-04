(() => {
  //let myNumber: number;
  //let myString: string;

  let myNull: null = null; //no nos deja asignada nada si no null
  let myUndefined: undefined = undefined;//no nos deja asignar nada sino undefined

  //para poder asignar otros valores hacemos lo siguiente con union de types
  //y funcionará como en otros lenguajes, poemos inicializar en null y
  //en undefined y luego asignar otros valores
  let myNumber: number | null = null;
  myNumber = 12;

  let mystring: string | undefined = undefined;
  mystring = 'Felipe';


  /**
   * Podemos crear una funcion que cuando reciba null haga algo
   * de lo contrario haga otra cosa, esta funcion la podemos hacer
   * de 2 formas diferentes
   */

  // FORMA 1
  function hi(name: string | null){
    let hello = 'hola ';
    if(name){
      hello += name;
    }else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Felipe');
  hi(null);

  // FORMA 2 usando los valores opcioanles
  function hiV2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Felipe');
  hiV2(null);



})();
