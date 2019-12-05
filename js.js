 var inicio=confirm('Bem-Vindo ao Quiz do Brilhante Digital! Cique em OK para participar!');
    var sair = "<html><head><title>Voce nao quis participar</title></head><body>Obrigado pela sua resposta!<br></body></html>";
    if(inicio==false){document.write(sair);}
    else{ window.alert('Começou o game! Clique em Ok abaixo para começar');
    //Inicio do quiz
    var certo = "<b>Correto!</b>"; var errado = "<b style='color:black;'>Errado!</b>";var o = new Array();
    var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
    var t=9; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
    // LISTA DE PERGUNTAS
    p[1] = "- Qual é o comando para exibir uma mensagem na tela?\n\n1. escreva()\n2. leia()\n3. escrevar()\n4. leitura()\n";
    r[1] = '1. escreva()';
    p[2] = "- Aquilo que se guarda dados na memória do computador ou a mesma coisa que uma gaveta que se guarda coisas, é:\n\n1. Gaveta\n2. Variável\n3. Dados\n4. Porta-Dados\n";
    r[2] = '2. Variável';
    p[3] = "- Quando queremos capturar dados do usuário usamos o comando: \n\n1. escreva()\n2. leia()\n3. escrevar()\n4. leitura()\n";
    r[3] = '2. leitura()';
    p[4] = "- O que o programa da <h3>Figura1</h3> faz?\n\n1. Mostra qualquer coisa\n2. Soma dois números\n3. Pede a idade ao usuário e mostra a idade na tela\n4. Apenas mostra a idade na tela\n";
    r[4] = '4. Apenas mostra a idade na tela';
    p[5] = "- Encontre o erro do programa da <strong>Figura6</strong>:\n\n1. Não é do tipo cadeia.\n2. Ari não existe nesse programa\n3. A vírgula é a culpa disso tudo.\n4. É tudo culpa do Ari.\n";
    r[5] = '3. A vírgula é a culpa disso tudo';
    p[6] = "- O que o programa da <strong>Figura3</strong> faz? \n\n1. Soma três números\n2. Apenas soma.\n3. Apenas mostra na tela\n4. Soma dois números e mostra na tela\n";
    r[6] = '4. Soma dois números e mostra na tela';
    p[7] = "- No programa da <strong>Figura4</strong> vai mostrar ao final o nome e a idade de alguém. Qual nome e qual idade vai ser exibida?'?\n\n1. Ari, 22\n2. João, 12\n3. O nome e a idade do usuário que digitou\n4. Não vai mostrar nada";
    r[7] = '3. O nome e a idade do usuário que digitou';
    p[8] = "- O programa da <strong>Figura5</strong> tem um erro. Qual erro?\n\n1. O erro está no tipo que guarda um valor diferente\n2. Falta fé\n3. Falta a vírgula\n4. Estamos todos errados";
    r[8] = '1. O erro está no tipo que guarda um valor diferente';
    p[9] = "- Na <strong>Figura2</strong> tem um programa que mostra uma mensagem na tela de Bom dia. Qual é o tipo de que se guarda a frase\n\n1. Inteiro\n2. Cadeia\n3. Falso\n4. Real";
    r[9] = '2. Cadeia';
   /* p[10] = "- Uma caixinha de som do computador representa um ?\n\n1. Dispositivo de saída porque ele transmite algum resultado, que é o som\n2. Software\n3. Dispositivo de entrada porque recebe alguma informação e envia para o computador\n";
    r[10] = '1. Dispositivo de saída porque ele transmite algum resultado, que é o som';
    p[11] = "- O computador é dividido em duas partes. Quais são elas?\n\n1. Hardware e Software\n2. Mouse e Teclado\n3. Facebook e WhatsApp\n4. Monitor e Impressora\n";
    r[11] = '1. Hardware e Software';
    p[12] = "- Você está usando um aplicativo no seu celular, PORÉM do nada ele trava mas o seu celular não desliga, o aplicativo só para de funcionar. Isso é culpa do:\n\n1. Software\n2. Fantasma\n3. Hardware\n4. De quem tá usando o celular\n";
    r[12] = '1. Software';
    p[13] = "- Quais desses objetos são tipos de computadores?\n\n1. Tablet, Celular e Caderno\n2. Livro, Notebook e Tablet\n3. Celular, Tablet e Notebook\n4. Caderno, Livro e Notebook\n";
    r[13] = '3. Celular, Tablet e Notebook';
    */
    //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
     for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
     for(var i=1;i<=9;i++)          //embaralha a sequencia 10 vezes
     {
      n=Math.round(t*(Math.random())); 
      m=Math.round(t*(Math.random()));
      if(m==0){m++;}
      if(n==0){n++;}
      var temp = o[n];
      o[n]=o[m];
      o[m]=temp;
     } 
    for(var i=1;i<=t;i++)
    {
      respostas[o[i]] = prompt(p[o[i]],"");
       if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
     }
    //fim do quiz
    document.write("<h1>Resultado do Quiz:</h1><br><br><h4>O resultado das questões:</h4>");
    document.write("<ol>");
    for(var i=1;i<=t;i++)
    {
    document.write("<li>"+respostas[o[i]]);}
    document.write("</ol>");
    document.write("<br>Total de acertos: "+acertos);
    document.write("<br>Total de erros: "+erros);
    document.write("<br><h3>Veja as respostas certas e confira no que você errou pra fazer de novo. Clique em RESPOSTAS.</h3><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}><br><br>");
document.write("<br><br><h3>Preparado? Para recomeçar é só recarregar a página apertando a tecla F5 do teclado</h3>")
    document.write("<br><br><br><div id='rp' class='rp' style='display:none;'><ol>");
    for(var i=1;i<=t;i++)
     { document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
    document.write("</ol></div>");
   }