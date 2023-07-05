// Code Challenge PWC
//Diego Lima da Silva
//https://www.linkedin.com/in/diegolimadev/


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

//Questão  4
const toUpperCaseFirstLetter = (string) => {
   const arr = string.split(' ');
   const resultArr = [];
   for (let i of arr) {
      resultArr.push(i.charAt(0).toUpperCase() + i.slice(1));
   }
   return resultArr.join(' ');
}

console.log(toUpperCaseFirstLetter('diego lima da silva'));
console.log(toUpperCaseFirstLetter('capitalizando a primeira letra de cada palavra'));
console.log(toUpperCaseFirstLetter(`hello, how are you? i'm fine thank you`));


//Questão 5
const canFormPalindrome = (string) => {
   const charAmount = 256;
   let count = new Array(charAmount);
   count.fill(0);

   for (let i = 0; i < string.length; i++) {
      count[string[i].charCodeAt()]++;
   }
   let odd = 0;
   for (let i = 0; i < charAmount; i++) {
      if ((count[i] & 1) != 0) odd++;

      if (odd > 1) return false;
   }
   return true;
   }

console.log(canFormPalindrome('sscaa'));
console.log(canFormPalindrome('arccear'));
console.log(canFormPalindrome('arnaldo'));