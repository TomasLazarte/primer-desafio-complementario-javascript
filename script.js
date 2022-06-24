// Buscar divisores de un número

let repetir = true
let numero = parseInt(prompt(" Para obtener los divisores, ingrese un número natural >= 1 : "))
let contador = 0

while(repetir){
    if(numero >=1){
        repetir = false
    }else{
        numero = parseInt(prompt(" Por favor, ingrese un número natural >= 1 : "))
    }
}

for(i = 1; i <= numero; i++){
    if(numero % i === 0){
        contador += 1
        console.log(i)
    }
}if(contador === 1){
    console.log("El número "+numero+" sólo tiene "+contador+" divisor, sí mismo. ")
}else if(contador === 2){
    console.log("El número "+numero+" tiene "+contador+" divisores. Por lo tanto es un número PRIMO. ")
}else{
    console.log("El número "+numero+" tiene "+contador+" divisores. Por lo tanto es un número COMPUESTO. ")
}


