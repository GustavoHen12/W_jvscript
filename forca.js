const MAX_ERROS = 5;

//passagem por parametro (?)
function processa_letra(letra, palavra)
{

}

// --- MAIN ---
let palavra = "palavra";
let jogo = {
    try_err: "",
    try_cor: "",
    erros: 0, //numero de erros
    falta: 0 //numero de letras que faltam
};

jogo.falta = palavra.length;
while((jogo.falta !== 0) && (erros !== MAX_ERROS))
{
    // le_caracter (?)
    let acertos = 0;
    acertos = processa_letra(letra, palavra);//retorna 0 se nao achar nenhuma
    
    if(acertos === 0)
    {
        jogo.erros++;
        try_err =  try_err + letra;
    }
    else
    {
        jogo.falta = jogo.falta + acertos;
        try_cor = try_cor + letra;
    }
}

