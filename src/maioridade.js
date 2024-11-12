const maioridade = function(idade){

    if(idade <=0){
        return 'idade inválidade';
    }

    if(idade>=18){
        return 'Maior idade'
    }else{
        return 'Menor idade';
    }
}