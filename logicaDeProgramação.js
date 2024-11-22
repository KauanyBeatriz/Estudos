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


