 var inicio=confirm('Bem-Vindo ao Quiz do Brilhante Digital! Cique em OK para participar!');
    var sair = "<html><head><title>Voce nao quis participar</title></head><body>Obrigado pela sua resposta!<br></body></html>";
    if(inicio==false){document.write(sair);}
    else{ window.alert('Começou o game! Clique em Ok abaixo para começar');
    //Inicio do quiz
    var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
    var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
    var t=13; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
    // LISTA DE PERGUNTAS
    p[1] = "- Qual é o comando para exibir uma mensagem na tela?\n\n1. escreva()\n2. leia()\n3. escrevar()\n4. leitura().\n";
    r[1] = '1. escreva()';
    p[2] = "- Aquilo que se guarda dados na memoória do computador ou a mesma coisa que uma gaveta que se guarda coisas, é:\n\n1. Gaveta\n2. Variável\n3. Dados\n4. Porta-Dados\n";
    r[2] = '2. Variável';
    p[3] = "- Quando queremos capturar dados do usuário usamos o comando: \n\n1. escreva()\n2. leia()\n3. escrevar()\n4. leitura().\n";
    r[3] = '2. leitura()';
    p[4] = "- O tablet é um tipo de computador?\n\n1. Sim\n2. Não\n3. Talvez\n4. Nunca\n";
    r[4] = '1. Sim';
    p[5] = "- O que é uma hardware?\n\n1. É a parte lógica do computador, ou seja, são os programas.\n2. É a parte física do computador\n3. É o que o computador faz quando liga.\n4. É quando o computador desliga.\n";
    r[5] = '2. É a parte física do computador';
    p[6] = "- O que esses nomes têm em comum: Facebook, Google, WhatsApp, Calculadora do computador?\n\n1. São dispositivos de entrada.\n2. São dispositivos de saída.\n3. São softwares\n4. São hardwares.\n";
    r[6] = '3. São softwares';
    p[7] = "- Complete a frase: 'Qualquer dispositivo que RECEBE dados ou informação é considerado um dispositivo de _________ '?\n\n1. Carro\n2. Geladeira\n3. Saída\n4. Entrada ";
    r[7] = '4. Entrada';
    p[8] = "- O computador possui componentes básicos para que a gente possa usá-lo, como o teclado, mouse e monitor. Esses componentes recebem o nome de:\n\n1. Hardware\n2. Software\n3. Programas\n4. Windows";
    r[8] = '1. Hardware';
    p[9] = "- A impressora é um dispositivo comum nos computadores para imprimir coisas. Desse modo, ela é considerada como um:\n\n1. Software\n2. Dispositivo de saída\n3. Programa\n4. Dispositivo eletrodoméstico";
    r[9] = '2. Dispositivo de saída';
    p[10] = "- Uma caixinha de som do computador representa um ?\n\n1. Dispositivo de saída porque ele transmite algum resultado, que é o som\n2. Software\n3. Dispositivo de entrada porque recebe alguma informação e envia para o computador\n";
    r[10] = '1. Dispositivo de saída porque ele transmite algum resultado, que é o som';
    p[11] = "- O computador é dividido em duas partes. Quais são elas?\n\n1. Hardware e Software\n2. Mouse e Teclado\n3. Facebook e WhatsApp\n4. Monitor e Impressora\n";
    r[11] = '1. Hardware e Software';
    p[12] = "- Você está usando um aplicativo no seu celular, PORÉM do nada ele trava mas o seu celular não desliga, o aplicativo só para de funcionar. Isso é culpa do:\n\n1. Software\n2. Fantasma\n3. Hardware\n4. De quem tá usando o celular\n";
    r[12] = '1. Software';
    p[13] = "- Quais desses objetos são tipos de computadores?\n\n1. Tablet, Celular e Caderno\n2. Livro, Notebook e Tablet\n3. Celular, Tablet e Notebook\n4. Caderno, Livro e Notebook\n";
    r[13] = '3. Celular, Tablet e Notebook';
    //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
     for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
     for(var i=1;i<=13  ;i++)          //embaralha a sequencia 10 vezes
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