const MAX_ERROS = 5;
let jogo = {
    palavra: "palavra",
    try_err: "",
    try_cor: "       ",
    erros: 0, //numero de tentativas erradas
    acertos: 0 //numero de letras que conseguiu
};

//passagem por parametro (?)
function processa_letra()
{
    let letra = document.getElementById("entrada").value; //le o valor da entrada
    alert("voce digitou mais de um caracter")
    //verifica se a entrada e valida
    if (letra.length > 1)
    {
        alert("voce digitou mais de um caracter")
    }
    //processa a letra
    else 
    {
        //coloca em minusculo
        letra = letra.toLowercase();
        //vefica se esta na palavra
        let j = 0;
        for(let i = 0; i < jogo.palavra.length; i++)
        {
            if (jogo.palavra[i] == letra)
            {
                jogo.acertos++;
                jogo.try_cor[i] = letra;
            }
            else
            {
                j++;
            }
        }

        if(i == j)
        {
            try_err = try_err + letra;
            jogo.erros++;
        }

        verifica_jogo(jogo);
    }


}
