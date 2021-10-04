// 1º)
var flecha = (n1, n2) =>{
    let soma = n1 + n2
    return n1 +' + '+ n2 +' = '+ soma;
  }
  console.log(flecha(2, 4));
  
  // 2º)
  var maior = (num1, num2, num3) =>{
    if (num1 > num2 && num1 > num3){
      return 'O maior número dos 3 é: ' + num1;
    }
    else if (num2 > num1 && num2 > num3){
      return 'O maior número dos 3 é: ' + num2;
    }
    else if (num3 > num1 && num3 > num2){
      return 'O maior número dos 3 é: ' + num3;
    }
    else{
      return "Número invalido, não repita os valores. Ex:(2,6,7)";
    }
  }
  console.log(maior(1,3,2));
  
  // 3º)
  var porOuImpar = (n) =>{
    if (n % 2 === 0 && n % 1 === 0){
      return 'O numeros é Par';
    }
    else if (n % 2 !== 0 && n % 1 === 0){
      return 'O numeros é Impar';
    }
    else{
      return 'ERRO, função só recebe números inteiros';
    }
  }
  console.log(porOuImpar(14));