// O QUE É CIBERSEGURANÇA?
    
    //É um conjunto de ações e técnicas voltadas para proteger sistemas, programas, redes e equipamentos contra invasões.
    
    // Foco é garantir que dados valiosos não vazem ou sejam violados.

    //TIPOS:

        // 1-> Segurança operacional: define quais pessoas tem acesso ou niveis de acesso que um determinado funcionario pode obter.
        // 2-> Segurança de rede: proteger a rede contra acessos indevidos e ataques com DoS (Denial of Service -> carregar até derrubar o servidor), a pontas de rede físicas também é necessaria.
        // 3-> Segurança de aplicativos: proteção contra brechas de programação, gafes no desenvolvimento.
        // 4-> Recuperação de desastres: Práticas de organização em caso de desastres, para a recuperação mais rápida e com menos danos possíveis.
        // 5-> Educação do usuário final: Encontrar e corrigir comportamentos de risco dos usuários que podem expor dados sensíveis.

    //PILARES:

        // Identificar: identificar os quais são os dados possiveis, quem poderia atacar? como poderia atacar?
        // Proteger: politicas de cibersegurança.
        // Detectar: procurar brechas, monitorar, detectar padrões.
        // Resposta: tempo de resposta, metodos.
        // Recover: contra ataque.

// O QUE É HACKING?
    
    // Significa comprometer sistemas, contas pessoais. Porem não necessariamente mal intencionado, depende das intenções do individio
    
    // Cracker -> Hacker invade uma rede ou sistema de forma maliciosa.

    // TIPOS:

        // Hackers black hat (chapéu preto)-> fins malisiosos, vazamentos, extorsões.
        // Hackers white hat (chapéu branco)-> detecta ameaças / vunerabilidades e protege sistemas, de forma concentida de acordo com contrato.
        // Hackers grey hat (intermediarios)-> Meio termo
    
// PRINCIPAIS TIPOS DE AMEAÇAS

    // A ameaças não é apenas direcionadas ao sistema, mas tambem contra pessoas.

    // FONTES DE ATAQUES:

        // NATION-STATES: motivação geopolitica.
        // CYBERCRIMINALS: motivação lucro.
        // HACKTIVISTS: motivação ideologia.
        // TERRORIST GROUPS: motivação ideologia violenta.
        // THRILL-SEEKERS: motivação satistação.
        // INSIDER THREATS: motivação discontent.

    // TIPOS DE ATAQUES:

        // Phishing-> e-mails com script malicioso.
        // Spoofing de DNS-> comprometimento de servidor, direcionamento para o servidor pessoal do hacker.
        // Roubo de cookies-> tem cookies que trafegam com dados, permitindo que o hacker se passe por você.
        // XSS-> Injeção de script em campos vazios para acesso aos dados.
        // SQL injection-> Injeção de comandos sql em campos vazios para acesso aos banco de dados
        // Malware->
        // Web-based attacks->
        // Spam->
        // DOos-> carregar até derrubar o servidor

//BOAS PRATICAS EM CIBERSEGURANÇA

    // CATEGORIA:

        // Conscientização de pessoas
            // Reduzir o nivel de negligências dos funcionarios
            // Informar os funcionarios sobre técnicas comuns de phishing

        // Controle de acesso
            // Proteção o acesso de dispositivos remotos
            // Manipulação de senhas com segurança
            // Usar o proncipio do privilegio minimo
        
        // Proteção de dados confidenciais
            // Atenção aos dados privilegiados
            // Monitoramento de acesso de terceiros
            // Manter backup de dados confidenciais
        
        // Segurança robusta e proteção de rede
            // Politicas hierarquicas de segurança
            // Proteger a rede corporativa
            // Auditorias regulares da segurança
        
        // Grenciamento de identidade
            // Biometria de segurança
            // Autenticação multifator
        
// BLUETEAM VS REDTEAM

    // Metodologia para melhor o sistema identificando e verificando o sistema ao mesmo tempo que defende e corrige os erros. 

    //RED TEAM -> atacar e identificar o sistema para explorar as vunerabilidades.
        //simulação de ataques
    
    //BLUE TEAM -> neutralizar e corrigir as vunerabilidades.
        // Bloquear os ataques
    
    //PURPLE TEAM -> Meio termo.

    //Certificação: CEH e ECSA

//SISTEMAS OPERACIONAIS
    // E um software e um intermediario entre o usuario e o hardware, são responsaveis pelas entradas (bits) e as saidas para os usuarios
        
        //Niveis
            //user -> application -> operating system -> hardware (entrada)
            //hardware -> operating system -> application -> user (saída)

        //Funções: 
            // Gerenciamento de processos
            // Gerenciamento de memória
            // Gerenciamento de dispositivos
            // Gerenciamento de arquivos
            // Segurança do sistema
            // Detecção de erros
            // Agendamento de tarefas

        // Recursos:
            // Fornece uma plataforma para executar aplicativos
            // Gerenciamento de memória e CPU
            // Fornece abstração do sistema de arquivos
            // Fornece suporte de rede
            // Fornece recursos de segurança
            // Fornece utlitários e serviços de sistema
            // Suporte ao desenvolvimento de aplicativos

        // Componente:
            // SHELL -> camada externa do sistema operacional e gerecia a interação entre usuário e sistema operacional
                // Function: 
                    // Solicitar entrada do usuário
                    // Interpretar a entrda para o sistema operacional
                    // Manipular a saída do sistema operacional.
            //KERNEL-> Componente central de gerenciamento diretamente com a máquina fisíca.
                // Function:
                    // Gerenciamento de entrada - saída 
                    // Gerenciamento de memória
                    // Gerenciamento de processos para execução de aplicativos
                    // Gerenciamento de dispositivos
                    // Contrale de chamadas do sistema
        // exemplo:
            // Linux
            // Microsoft Windows
            // MacOS
            // Android

    // Microsoft Windows
        // Sistema operacional padrão para uso domestico e empresarial 
        // Código-fonte: C e C++.
        // Melhores versões: 7 
        // Windows -> é alvo de muitas ameaças ciberneticas
            // Tipos de virus:
                // WinNT.Remote Explorer
                    // Descoberto em 17 de dezembro de 1998, O Remote Explorer foi o primeiro vírus a se carregar como um serviço do Windows NT e o primeiro a roubar os direitos de segurança de um administrador para se espalhar.
                // WinNT.Infis
                // Win95.CIH
                // Win32.Kriz
                // Win95.Babylonia

            // prevenções:
                // Manter atualizações
                // Utilizar bom antivirus
                // Ter bom senso e cuidado
    
    // Linux
        // open-source não é necessario pagamento para o fornecedor
        // distros linux

        // Vunerabilidades Linux:
            // CVE-2022-0435 (CVSS Score: 9.0)
            // CVE-2022-0492 (CVSS Score: 7.8)
            // CVE-2022-28893 (CVSS Score: 7.2)
            // CVE-2022-0998 (CVSS Score: 7.2)
            // CVE-2022-0995 (CVSS Score: 6.6)

//REDE DE COMPUTADORES

    // Dispositivoa de computação interconectados que podem trocar dados e compartilhar recursos entre si.
    // esses tipos de redes usam um sistemas de regras, "protocolos" de comunicação

        //Nós: cada equipamento conectado é um nó (computador, switch, etc.)
        //Links: meio de transmissão (física ou sem fio)
        //Arquitetura: define as especificações para os componentes fisicos da rede (organização funcional, protocolos, procedimentos)
        //Endereço IP: número exclusivo atribuido a cada dispositivo conectado a rede
        //Porta: conexão especifica (protocolo)

    //Tipos de artitetura de rede: 
        //cliente servidor: usuario envia informação para o servidor, servidor oferece serviços aos clientes
        // ponta a ponta: Todos os nós detem de uma mesma configuração, sem um servidor central.

    //Topologia de rede:

        //Barramento -> cada nó esta vinculado a apenas um outro nó
        //      nó      nó      nó
        //          nó      nó      nó

        //anel -> cada nó está vinculado a dois outros nós, no entanto se um falhar desativa todos.
        //                  nó
        //              nó      nó
        //              
        //              nó      nó
        //                  nó

        //estrela -> vinculado em varios dispositivos conectados num servidor central, possue a melhor performace pois os dados não precisam passar por cada nó
        //                   nó
        //                  
        //        nó       servidor       nó
        //
        //              nó          nó

        //malha -> cada nó conectado a muitos nós
        //              nó          nó
        //
        //            nó      nó      nó

        //tipos de redes:
            //LAN(local area network): conecta dispositivos proximos, em um memso ambiente
            //MAN(Metropolitan area network): conecta as redes locais dentro de distâncias maiores
            //WAN(Wide area network): rede de longa distância conecta dipositivos dentro de países e continentes
            //SAN(storage area network): armazena dados de rede e faz comunicações entre um servidor e os demais dipositivos
            //VLAN(virtual LAN): reúne dentro de uma rede local diversas máquinas, mesmo que as mesmas estejam fisicamente em lugares distintos 

        //protocolos de rede:
            //conjunto de normas que permitem que as maquinas se conectar e conversas entre si, de forma universal

            //modelo de camada: definem regras e orientações para que haja a intercomunicação entre os dispositivos de rede independentemente do fabricante ou modelo,
            // ele delimita as funções das regras de comunicação, dos serviços e das interfaces e serve como referência de comparação entre protocolos e serviços de pilhas diferentes.

                //ex: O pacote da informação será encapsulado (empacotado) e descerá todos as camadas sendo analisado reempacotado com um novo cabeçalho que será condizente com a camada que se encontra, 
//              ao fim do envio para receber este mesmo pacote ele será desempacotado respectivamente em pelas camadas condizentes fazendo o caminho oposto para liberar a informação


            // OSI: -> 7 camadas

                // Camada de aplicação: envia dados ou recebe, faz a interface com as aplicações do computador -> HTTP (web); HTTPS (web com mais proteção); FTP (transferencia de arquivos); SMPT (email)
                // Camada de apresentação: Faz a tradução/conversão/criptografia dos dados para que a próxima camada os use.
                // Camada de sessão: Responsável por estabelecer/manter e encerrar a conexão entre hosts (dispositivos).
                // Camada de transporte: Garante o envio, recebimento e integridade dos pacotes vindos da camada três.
                // Camada de rede: Verifica quem é o remetente e o destinatário da mensagem (endereçamento logico (IP)) e prioriza quais mensagens serão enviadas primeiro(estabelecimento de rotas).
                // Camada de enlace de dados: Verifica se os pacotes têm algum defeito em sua formatação e controla o fluxo com que eles são enviados (endereçamento físico e seguro entre os dispositivos).
                // Camada física: Especifica os dispositivos e os meios de transmissão.               

                //caracteristicas: 
                    //1- decomposição dos componentes em partes menores
                    //2- padronização dos componentes presentes na rede
                    //3- comunicação entre diversos tipos de hardware e software
            
            // TCP/IP: -> 4 camadas

                // Camada de aplicativo: Esta camada única é mapeada para as camadas de aplicativo, apresentação e sessão do modelo OSI. Alguns protocolos que operam nesta camada incluem HTTP, SMTP e DNS.
                // Camada de transporte: Esta camada mapeia para a camada de Transporte do modelo OSI. O TCP e o User Datagram Protocol (UDP) operam nesta camada.
                // Camada da Internet: A camada Internet é equivalente à camada de rede no modelo OSI. Esta camada é coberta principalmente pelo Protocolo de Internet (IP), mas ARP, IGMP e ICMP também operam nesta camada.
                // Camada de acesso à rede: Esta camada combina as camadas Física e de Enlace de Dados do modelo OSI. Ethernet, Token Ring, ATM e Frame Relay são exemplos do conjunto de protocolos TCP/IP que operam nesta camada.

                    // O modelo OSI é mais teórico, descrevendo as diversas tarefas que devem ser realizadas para permitir que os dados da camada de aplicativo sejam transmitidos por meio de eletricidade, luz ou ondas de rádio. 
                    // O modelo TCP/IP é mais prático e mapeia de perto os protocolos de rede reais.

            // IP: identificador único de cada dispositivo na internet ou uma rede local

            //octetos ex: 192.168.100.1

                //    1º octeto       2º octeto       3º octeto       4º octeto
                //      192      .      168      .      100      .       1      -> os digitos são uma representação decimal de um numero binario
                //    11000000        10101000        01100100        00000001  
                //     8 bits    +     8 bits     +    8 bits     +    8 bits  = 32 bits

            //mascaras de rede
                //classes: 

            //ataque contra IP:
                //engenharia social
                //ciberstalking
                //download de conteudo ilegal usando seu endereço Ip
                //rastrear sua localização
                //ataque direto a sua rede
                //ataques em seu dispositivo

        //Proxy e VPN
            // As redes privadas virtuais(VPNs) e os proxis são camada extra entre o navegador e qualquer empresa de rastreamento de dados ou governo

            //VPN -> codifica os dados enviados e recebidos da internet, permitindo acessar de forma segura  e privada websites  e usar programas e aplicativos independente da rede utilizada.

            // com VPN: usuario -> (desprotegido) -> VPN cliente -> (protegido) -> provedor internet -> (protegido) -> VPN Server (desprotegido) -> Internet

            // sem VPN: usuario  ->  provedor internet   ->   Internet

                //vantagens: 
                    // VPN criptografa a conexão
                    // Evita que um provedor ou empregador espie o tráfego, através do roteador.
                
            //Proxy: servidor público remoto acessado através de um aplicativo web ou programa desktop que acessa páginas web "em seu nome (endereço IP)"
                //:como um intermediario para acessar a internet, apenas o servidor sabe quem é você

//DEEP WEEB e Anonimato

    //curiosidades: a internet é composta de camadas, que se refere aos niveis de indexadão(procura) dos sites.
        // surface weeb: contem todos os sites comuns acessados através de navegadores tradicionais como google chrome, internet Explrer e Firefox
        // deep weeb ou dark weeb: não são anexados nos buscadores convencionais, estima-se que estão cerca de 90% de todos os sites estão lá(mas não se sabe a exatidão)
            //redes: ONION, FREENET, 12P
            //Perigos: software maliciosos, monitoramento do governo e golpes.
            //Cuidados: Usar VPN, Antivírus atualizado e Ultilizar máquina virtual.

//Tor Browser: 
    //Tor: é uma rede de túneis virtuais que permite melhorar a privacidade e segurança na internet;
    // ele envia seu tráfego por três servidores aleatórios (relés) na rede tor, tem um no de entrada e saída;














    