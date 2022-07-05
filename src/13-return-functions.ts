(()=>{

  //Funcion para suma de datos con retorno en string
  const calcTotal = (prices:number[]): string =>{
    let total = 0;
    prices.forEach((item) =>{
      total += item;
    });
    return total.toString();
  }

  const rta = calcTotal([1,2,3,4,5,6,7,8,9]);
  console.log(rta);

// funcion sin retorno es void
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`el total es: ${rta}`);
  }

printTotal([1,2,3]);

})();
