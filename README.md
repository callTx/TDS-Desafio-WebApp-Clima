# TDS-Desafio-WebApp-Clima
Construir um web App que captura informações do clima de uma determinada cidade por meio de uma API.

## Nome da Aplicação
angular-webappclima

## Requisitos abordados pela Aplicação
- [x] Usa o Framework Angular.

- [x] Abrange as cidades: Dallol(NG), Fairbanks(US), Londres(GB), Recife(BR), Vancouver(CA), Yakutsk(RU)

- [x] Estiliza o layout o mais próximo possível do desejado: https://explosion.invisionapp.com/public/share/SX19J12TJR#screens/476656918

- [x] Implementa responsivade do layout e adaptado para telas mobile e desktop.

- [x] Faz o uso do pré-processador `SCSS` (setado nas pre-configurações do Angular).

- [x] Implementa testes unitários de cada Component e Service da apliação. 

- [x] As condições climáticas `Clima Atual`, `Clima de Dawn`, `Clima de Morning`, `Clima de Afternoon` e `Clima de Night` fazem o uso de ícones específicos de cada clima e considera os horários de 3:00, 9:00, 15:00 e 21:00 para cada um, respectivamente.

- [x] Implementa uma imagem docker que conteiniza a aplicação. 


## Testes unitários
Para executar os testes de cada unidade do Angular, fazer o uso dos comandos disponívies em [Doc](https://github.com/callTx/TDS-Desafio-WebApp-Clima/tree/main/angular-webappclima).

## Imagem docker da Aplicação
Para fazer o uso da aplicação conteinizada, basta fazer o clone da imagem do repositório [repo-dockerhub](https://hub.docker.com/repository/docker/calltx/angular-wepappclima/general) e executar o container. O container irá executar a aplicação por meio do serviço `nginx` usando a porta `8081`. Logo em seguida, para visualizar aplicação no browser, basta usar digitar: 
`localhost:8081`

