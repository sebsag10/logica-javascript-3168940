// //Boolean(..)

// console.log( "5" == "5" , "5" == "5" )         
// console.log( "5" === "5" , "5" === "5" )       
// console.log( 5 === "5" , 5 === "5" )           
// console.log( 5 == "5" , 5 == "5" )             
// console.log( 5 === (3+2) , "5" === (3+2) )     
// console.log( 5 === 5 , 5 === 5 )               

// //concantenar (+)

// console.log (5+"3")// 53
// console.log (5*"3")//15
// console.log (5+3)//8

// //pida dos numeros aln usuario y sumelos

// let num1=Number(prompt ('dame un num 1')) //
// let num2=Number(prompt ('dame un num 2')) //
// let resultado = num1+num2
// alert ("el resultado de tu suma es" + resultado)

let valor_a = Number(prompt("dame un numero"));
let valor_b = Number(prompt("dame otro numero"));

alert("los valores ingresados fueron "+valor_a+" y "+valor_b)

alert("el resultado de la suma es "+(valor_a+valor_b)+'\n'+
"el resultado de la resta es "+(valor_a-valor_b)+'\n'+
"el resultado de la multiplicación "+(valor_a*valor_b)+'\n'+
"el resultado de la división es "+(valor_a/valor_b))

alert(" Para finalizar, "+(valor_a+valor_b)+" que fue la suma entre los valores pedidos al usuario mas, la multiplicación entre 10 es igual a: "+'\n'+(valor_a+valor_b)*10)



