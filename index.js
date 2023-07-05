// Code Challenge PWC


//Questão 1
const reverseOrder = (word) => {
   const arr = word.split(' ');
   let temp = '';
   const { length } = arr;
   for(let i = 0; i < length / 2; i++){
      temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
   };
   return arr.join(' ');
};
console.log(reverseOrder('isso aqui é teste'));
console.log(reverseOrder('isso aqui é teste mais uma vez'));
console.log(reverseOrder('Hello, World! OpenAi is amazing'));
