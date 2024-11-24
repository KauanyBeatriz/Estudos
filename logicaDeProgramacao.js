//ALGORITIMOS

    //Algoritmo é como uma sequência de passos para resolver um problema.

//FUNÇÕES

    //As features (ou funcionalidades) em um aplicativo são as diferentes tarefas ou funções que o aplicativo pode realizar.

//COMANDOS (ações do sistema)

    //Entrada(Input) -> Solicitação do usuário (ex: solicitar pedido)
    //processamento(process) -> Processar e verificar o pedido do usuário
    //Saída(Output) -> Apresentação do resultado da solicitação (ex: aviso ou dependendo o prório resultado)

//IDE -> ambiente de desenvolvimento (ex: vscode)


//EXTENSÕES DE LINGUAGEM-> css(Style), js(JavaScript), java(Java), py(Pyton), cs(C#), html(HTML) 




//                      JAVASCRIPT                  //

    //console.log()    
        //console ->Chama a tela para apresentar a informação e precisa ser minusculo
        //.log -> informação a ser apresentada

        
        console.log("EXEMPLO 1:")  
            console.log("Digite seu nome") 
            console.log("") //->linha de espaço
            //Resultado(tela): Digite seu nome

//VARIAVEIS

    //Variaveis são espaços de armazenamento para informações especificas

        console.log("EXEMPLO 2:")    
            //declara uma variável
            let nickname = "Anny"

            //concantenando uma mensagem fixa + uma variável
            console.log("Muito prazer " + nickname)
            console.log(nickname + ", Vai seguir o exemplo do curso. Ela é preguiçosa")
            console.log("") //->linha de espaço

        console.log("EXEMPLO 3:")
            //o valor da variavel pode ser trocado a qualquer momento do codigo, não sendo necessário o Let
            nickname =  "Kauany"
           
            console.log("Nome alterado com sucesso " + nickname)
            console.log("") //->linha de espaço

//CONSTANTES

    //Constantes serão valores fixos, inalteraveis

        console.log("EXEMPLO 4:")
            //declara uma constante
            const notificacao = "Pokemon Go diz: "

            //saida
            console.log(notificacao + "tem um novo pokemon na região")
            console.log(notificacao + "você foi derrotado por um líder")
            console.log("") //->linha de espaço

        console.log("EXEMPLO 5:")
            let poteCafe = "café pilão"
            let poteAcucar = "Açucar cristal"
            let poteBiscoito = "Biscoito Maizena"
            const messagemDaVovo = "Na cozinha da vovó hoje tem: "

            console.log(messagemDaVovo + 
            poteCafe + " - " +
            poteAcucar + " - " +
            poteBiscoito
            )

            poteCafe = "Café 3 corações"

            console.log(messagemDaVovo + 
            poteCafe + " - " +
            poteAcucar + " - " +
            poteBiscoito
            )
            console.log("") //->linha de espaço

//CURIOSIDADE: camelCase -> É o estilo de nomenclatura das variaveis usadas na programação, por exemplo "logicaDeProgramacao"
    
//TIPAGEM 

        //Tipo de uma variável especifica o tipo de valor que ela pode armazenar, como números inteiros, texto (strings), valores booleanos (verdadeiro/falso), entre outros.
            //Linguagem Fortemente Tipada -> Obrigadoria a declaração do tipo de variavel
            //Linguagem Tipagem Fraca -> sem necessidade de tipagem

        //Tipo de tipagem

            //Variáveis numéricas -> São usadas para armazenar valores numéricos.
            //Inteiro -> Armazena números inteiros, como 1, 10, -5.
            //Ponto flutuante ou decimal -> Armazena números com casas decimais, como 3.14, -0.5.
            //Números complexos -> Armazena números complexos, como 2+3j.
            //Variáveis de texto -> Usadas para armazenar sequências de caracteres.
            //String ->Armazena uma sequência de caracteres, como "Olá, mundo!"
            //Caractere -> Armazena um único caractere, como 'a', 'X', '@'.
            //Variáveis lógicas -> Usadas para armazenar valores de verdadeiro ou falso.
            //Booleano -> Armazena os valores True ou False.
            //Variáveis de data e hora -> Utilizadas para representar datas e horários.
            //Data -> Armazena datas, no formato AAAA-MM-DD.
            //Hora ->Armazena horários, no formato HH:MM:SS.
            
        //obs: Todo valor que não será usado em expressão matematica deve ser String

        //EXEMPLO 6

            let nomePokemon = "pikachu" //string
            let pokemonSexo = "M" //Caractere

            let nivelPokemon = 20 //number
            let pontosDeVidaPokemon = 45 //number

            let selecionavel = false //Booleano

//VETORES

    //Coleção de itens parecidos dentro de uma mesma variavel
    
        console.log("EXEMPLO 7:")
            //Declarando vetor
            let nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"]
        
            console.log(nomesPokemon) //-> presentar toda a lista
            console.log("")
            console.log(nomesPokemon [1]) //-> A numeração é passada para apresentar o objetivo guardado em específico, como demonstra o exemplo a informação que será apresentada é a que se encontra na primeira posição:
            console.log("")   
                //EX: [0]- Pikachu
                //    [1]- Chamander
                //    [2]- Bulbassaur

            //Obs: praticamente em todas as linguagens de programação se inicia com a posição 0.
            //Curiosidade: um vetor também pode ser um constante 


//MATRIZES

    //Conjunto de vetores dentro de uma variavel

        console.log("EXEMPLO 8:")   
            //declarando uma matriz
            let timePokemon = [ 
                ["pikachu", "M", 1], 
                ["Chamander", "F", 3] 
            ]
            
            console.log(timePokemon) //-> apresenta o numero de elementos dentro do array
            console.log("") 

            console.log(timePokemon [1]) //-> apresenta a linha solicitada do array completa
            console.log("") 

            console.log(timePokemon [0][1]) //-> apresenta linha e coluna especificas solicitadas dentro do array
            console.log("") 

            console.log("O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] + " e está no nível " + timePokemon[1][2] +".")
            console.log("") 

//PROPRIEDADES

    //Propriedades-> informações sobre os elementos guardados
        console.log("EXEMPLO 9:")   
            console.log("Lista completa: "+ nomesPokemon)
            console.log("Nesse array tem "+ nomesPokemon.length + " elementos.") //-> retorna o número de elementos dentro da variável
            console.log("")

//METODOS
    
    //Métodos -> ações que pode ser feito com os elementos.
        console.log("EXEMPLO 10:") 
            console.log("Lista completa: "+ nomesPokemon)
            nomesPokemon.pop() //-> Remove o ultimo elemento
            console.log("Removido o último: "+ nomesPokemon)
            console.log ("")

            nomesPokemon.shift() //-> Remove o primeiro elemento
            console.log(nomesPokemon)
            console.log ("Removeu o primeiro, sobrou: "+ nomesPokemon)
            console.log ("")

//OPERADORES

    //operação matematicas na programação
        console.log("EXEMPLO 11:")
        //Operadores Aritméticos:
            
            //(+)-> Adição
            let Adição = 5 + 3;
            console.log ("Adição: 5 + 3 = "+ Adição)
            console.log ("")

            //(-)-> Subtração
            let Subtração = 8 - 2;
            console.log ("Subtração: 8 - 2  = "+ Subtração)
            console.log ("")

            //(*)-> Multiplicação
            let Multiplicação = 4 * 6;
            console.log ("Multiplicação: 4 * 6 = "+ Multiplicação)
            console.log ("")

            //(/)-> Divisão
            let Divisão = 10 / 2;
            console.log ("Divisão: 10 / 2 = "+ Divisão)
            console.log ("")

            //(%) Módulo (resto da divisão)
            let Modulo = 10 % 3;
            console.log ("Modulo: 10 % 3 = "+ Modulo + " esse apresenta o resto da divisão")
            console.log ("")

    // É possivel fazer uma operação diretamente pela variavel
    // Na programação não se uma virgula.

        console.log ("EXEMPLO 12: ")
            let precoProduto = 100.99
            let valorComTaxa = precoProduto * 2
            console.log (valorComTaxa)
            console.log ("")
        
        console.log ("EXEMPLO 13: ")
            let contador = 1
            contador++ //soma mais 1
            console.log ("Incrementando, numero 1 ++ = "+ contador)

            console.log ("EXEMPLO 13: ")
            let contador2 = 1
            contador-- //subtrai 1
            console.log ("Decrementando, numero 1-- = "+ contador2)
            console.log ("")

        //Operadores de atribuição

        console.log ("EXEMPLO 14 - Operadores de atribuição: ")
        console.log ("")
            
            //(=)-> Atribuição
            let x = 5;
            console.log (x)

            //(+=)-> Adição e atribuição
            let num1 = 10; 
            num1 += 2; //-> mesmo que "num1 = num1 + 2"
            console.log (num1)

            //(-=)-> Subtração e atribuição
            let num2 = 10; 
            num2 -= 3;
            console.log (num2)

            //(*=)-> Multiplicação e atribuição
            let num3 = 5; 
            num3 *= 4;
            console.log (num3)

            //(/=)-> Divisão e atribuição
            let num4 = 10; 
            num4 /= 2;
            console.log (num4)

            //(%=)-> Módulo e atribuição
            let num5 = 10; 
            num5 %= 3;
            console.log (num5)
            console.log("")
            
        console.log ("EXEMPLO 15 - Expressões: ")
        console.log ("")

            let resul = 2 * 5 + 5 - 10
            console.log ("2 * 5 + 5 - 10 = " + resul)
            console.log ("")

            resul = 2 * ((5 + 5) - 10)
            console.log ("2 * ((5 + 5) - 10) = " + resul + " -> Forma correta seguindo a ordem das expressões")
            console.log ("")

    //Operadores Relacionais/comparação: 
        console.log ("EXEMPLO 16 - Relacionais: ")
        console.log ("")  
        
            console.log("Igual/Comparação")
            console.log("")
            
            let marca = "Apple"
            let resultado = marca === "Samsung"

            console.log(resultado)
            // = é atribuição
            // == é para comparar o valor
            // === é para comparar o valor e o formato do conteúdo
            // !== é diferente ?
            
            console.log("Diferente")
              let isNotEqual = "Maça"
              console.log (isNotEqual != "Maça")
              console.log (isNotEqual !== 2)
            
            console.log("EX: Menor ou igual a")
              let idadeDeCorte = 50
              let idadeUsuario = 20
              
              let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
              console.log("50 é maior 20: " + resultadoEhTerceiraIdade)
              console.log ("")

            //(>)-> Maior que
            //  let isGreater = (x > y);
            //(<)-> Menor que
            //  let isLess = (x < y);
            //(>=)-> Maior ou igual a
            //  let isGreaterOrEqual = (x >= y);
            //(<=)-> Menor ou igual a
            //  let isLessOrEqual = (x <= y);

    //Operadores Lógicos:

        console.log ("EXEMPLO 16 - Operadores logicos: ")

            //(&&)-> AND lógico
            //if (condition1 && condition2)

              let idade = 18
              let vistoVerificado = false
              resultado =  (idade >= 18) && (vistoVerificado === true) 
              console.log("É maior de idade e o visto está verificado?" + resultado)
              console.log ("")

            //(||)-> OR lógico
            //if (condition1 || condition2)
              
              let clima = "chuva"
              let item = "guarda chuva"
              let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
              console.log("Não está chovendo ou está com o guarda chuva? " + podeSair)
              console.log ("")

            //(!)-> NOT lógico
            //if (!condition)

              let tempo = "chuva"
              let horario = 8
              let resultado1 = !((tempo !== "chuva") && (horario > 6)) //-> o ! no inicio muda a polaridade, !! tambem muda
              console.log(resultado)
              console.log("")

//CONDICIONAIS

    //if
        console.log ("EXEMPLO 17 - Condicionais: ")

            //If - else - Exemplo: Só vai comprar ovos, se tiver leite. senão compra lasanha.

              let possuiOvos = true
              let itensComprados = ""

              if(possuiOvos){
                itensComprados = "Leite"
              }
              else{
                console.log("passou na sessão de congelados")
                itensComprados = "Lasanha congelada"
              }

              console.log("item comprado: " + itensComprados)

            //If - else - else if ->Exemplo: nivel de fome.

              let nivelDeFome =  "1"

              if(nivelDeFome === 1){
                console.log("pouca fome")
              }else if(nivelDeFome ===2){
                console.log("muita fome")
              }else{
                console.log("Você comeria mais que o pica pau")
              }


            

