// this is a single line comment
//

/* this
 * is
 * a
 * multiline
 * comment
 */

var a = 3;
var b = 2;
var c = a + b;

console.log('this is a string');
console.log(a);
console.log(b);
console.log(c);

var first = 'sally';
var last = 'smith';
var fullName = first + ' ' + last;

console.log(first);
console.log(last);
console.log(fullName);

var d = Math.pow (2,8);

console.log('2^8 ===' , d);

a = 3
b = 4
c = 5
d = 6

console.log(Math.pow((((a+b)/(b-c)*(b-a)/(c-d))), (b+a)));




//branching with if/else statements
//


var age = 20;

if (age >=21){
  console.log('you are legal to drink');}
  else{
    console.log('you are NOT legal to drink');
  }

if(age >= 0 && age <= 5){
  console.log('G rated');
}else if(age <= 12){
  console.log('PG rated');
}else if(age <= 16){
  console.log('PG-13 rated');
}else if(age === 18){
  console.log('NC-17 rated');
}else{
  console.log('X rated');
}


//this is a switch statement
//
 
var color = 'blue';
switch(color){
  case 'green':
    console.log('i see green');
    break;
  case 'blue':
    console.log('i see green');
    break;
  case 'orange':
    console.log('i see green');
    break;
  case 'pink':
    console.log('i see green');
    break;

  case 'black':
    console.log('i see green');
    break;
    console.log('i see green');
    break;
  default:
    console.log('that is not valid'); 
}
// while loop
//
a = 1;

while (a < 10){
  console.log('a is looping...' , a);
//a++;
//a = a + 1;
a +=2;
}

//for loop
//
for(var i = 0; i < 10; i++){
  console.log('i ===', i);
}
