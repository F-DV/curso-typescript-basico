(()=>{
  //any puede aceptar cualquier tipo, es como volver a javascript,
  //se recomienda no usar
  //se usa cuando para aser migraciones de Js a Ts mas suave
  //o cuando no estamos seguros del tipo que sera la variable
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar ={};
  myDynamicVar = '';

  //Podemos darle un valor fijo como haciendo un casting
  myDynamicVar='hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);


})();
