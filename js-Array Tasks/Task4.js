/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. 

*/

fruitCollection = ['Mango', 'Potato', 'Banana', 'Malata', 'Komola']

Places = ['Chittagong', 'Kaptai', 'Rangamati', 'Bandorban'];

let Misti = 'Ros Molai';
let Names = 'Nayem';
// console.log(Array.isArray(fruitCollection));
// console.log(Array.isArray(Places));
// console.log(Array.isArray(Misti));
// console.log(Array.isArray(Names));


if(Array.isArray(fruitCollection)===true){
    console.log("fruitCollection is an array");
}
else{
    console.log("fruitCollection is not an array")
}

(Array.isArray(Places)===true) ? console.log('Places is an array') :console.log('Places is not an array');

(Array.isArray(Misti)===true) ? console.log('Misti is an array'): console.log('Misti is not an array');

(Array.isArray(Names)===true) ? console.log('Names is an array'): console.log('Names is not an array');

