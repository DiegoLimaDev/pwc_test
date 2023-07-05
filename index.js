// Code Challenge PWC


//Questão 1
const reverseOrder = (string) => {
   const arr = string.split(' ');
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


//Questão 2
const removeDuplicate = (string) => {
   const arr = string.split('');
   const resultArr = [];
   const { length } = arr;
   for (let i = 0; i < length ; i++) {
      if (!resultArr.includes(arr[i]) || arr[i] === ' ') {
         resultArr.push(arr[i]);
      }
   };
   return resultArr.join('');
}

console.log(removeDuplicate('Fazendo um teste de caracteres duplicados'));
console.log(removeDuplicate('PWC is an amazing company'));
console.log(removeDuplicate('Hello, World!'));