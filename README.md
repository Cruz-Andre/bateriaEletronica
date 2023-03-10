## Desafio FreeCodeCamp: Criar uma bateria eletrônica
<hr>

## TODO
* ~~As duas histórias de usuário faltantes;~~ :white_check_mark:

<hr>


Criar uma bateria eletrônica - Objetivo: criar uma aplicação que funcione de modo semelhante ao que vemos em: https://drum-machine.freecodecamp.rocks/.

Atenda as histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework de front-end (como React por exemplo) porque essa seção trata de aprender frameworks de front-end. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos buscando apoiar outros frameworks de front-end, como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

- **História de usuário nº 1:** eu devo ser capaz de ver um contêiner externo com um id="drum-machine" correspondente que contém todos os outros elementos. :white_check_mark:

- **História de usuário nº 2:** dentro de #drum-machine, eu consigo ver um elemento com um id="display" correspondente. :white_check_mark:

- **História de usuário nº 3:** dentro de #drum-machine, eu consigo ver 9 elementos de tambores clicáveis, cada um com o nome de classe drum-pad, um id único que descreve o clipe de áudio que o tambor será definido para executar, e um texto interno que corresponde a uma das teclas do teclado a seguir: Q, W, E, A, S, D, Z, X, C. Os tambores DEVEM estar nesta ordem. :white_check_mark:

- **História de usuário nº 4:** dentro de cada .drum-pad, deve haver um elemento HTML5 audio, que tem o atributo src apontando para um clipe de áudio, o nome de classe clip, e um id correspondendo ao texto interno do seu .drum-pad pai (por exemplo, id="Q", id="W", id="E" e assim por diante). :white_check_mark:

- **História de usuário nº 5:** quando eu clico em um elemento .drum-pad, o clipe de áudio dentro do seu elemento filho audio deve ser ativado. :white_check_mark:

- **História de usuário nº 6:** quando eu pressionar a tecla de disparo associada a cada .drum-pad, o clipe de áudio dentro do elemento filho audio deve ser ativado (por exemplo, ao pressionar a tecla Q, deve ser acionado o tambor que tem a string Q, ao pressionar a tecla W, deve ser acionado o tambor que contém a string W e assim por diante). :white_check_mark:

- **História de usuário nº 7:** quando um .drum-pad é acionado, uma string descrevendo o clipe de áudio associado é exibido como o texto interno do elemento #display (cada string precisa ser única). :white_check_mark:

Aqui estão algumas amostras de áudio que você pode usar para sua bateria eletrônica:

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

## Tecnologias utilizadas no projeto
* HTML
* CSS
* JavaScript
* React
* React Redux & @ReduxJS/Toolkit

