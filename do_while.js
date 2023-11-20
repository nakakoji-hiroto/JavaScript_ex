let max = 1;
let num = 1;
let count = 0;

do{
  num *= 2;
  count += 1;
}while(num < max)

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');