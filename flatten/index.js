import { flattenMe1, flattenMe2 } from './data';

function flatten (arr) {
  let flat_array = arr.reduce( (acc, item) => {
    if (Array.isArray(item)) {
      acc.push.apply(acc, flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return flat_array;
}

let res_1 = flatten( flattenMe1 );
let res_2 = flatten( flattenMe2 );

console.log(res_1)
console.log(res_2)
