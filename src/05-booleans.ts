(() => {
  //Nota en Typescript no acepta null o undedind

  let isEnable = true;  //Forma inferida
  // isEnable = 'as'; //genera error
  // isEnable = 1234; //genera error
  isEnable = false;

  let isNew: boolean = false; //forma explicita
  console.log('isNew: ', isNew);

  const random = Math.random();
  console.log('random: ', random);
  isNew = random > 0.5 ? true:false;
  console.log('isNew: ', isNew);

})()
