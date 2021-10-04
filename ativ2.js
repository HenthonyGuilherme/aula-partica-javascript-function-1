// 1º)
var notasAlunos = function(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    if(media >= 7){
      return 'Aprovado!';
    }
    else if(media > 5 && media < 7){
      return 'Recuperação!';
    }
    else if(media < 5){
      return 'Reprovado!';
    }
    else{
      return 'Notas invalidas, a função só recebe 2 valores';
    } 
  }
   console.log(notasAlunos(7,4));
  
  // 2º)
   var tabuada = function(){
    for(let tabu=1; tabu <= 10; tabu++){ 
     console.log( "3" + " * "+tabu+" = " + (3 * tabu));
      
  }
     return;
  }
  
  
  
  // 3º)
  var MaiorDeIdade = idade =>{
    if (idade >= 18){
      return 'Parabéns, você é di maior';
    }
    else{
      return 'Que pena, você é di menor';
    }
  }
  console.log(MaiorDeIdade(20));