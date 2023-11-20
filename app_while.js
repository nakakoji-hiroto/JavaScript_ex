let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num *= 2;
  count += 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');