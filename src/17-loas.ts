//LIBRERIA QUE NO SOPORTA TYPESCRIPT

//Esta libreria me permite agrupar
import _ from 'lodash';

const data = [
  {
    username: 'felipe',
    role: 'admi'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'seller'
  },
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
