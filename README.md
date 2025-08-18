# 📱 Desafio Técnico - App de Gestão Escolar (React Native) - Vaga P/ Bolsista

# 🎯 Objetivo:
- Desenvolver um aplicativo mobile em React Native que simula um sistema de gestão escolar, com diferentes funcionalidades para aluno, professor e diretor.

- Este desafio visa avaliar suas habilidades com React Native, organização de código, boas práticas e atenção a detalhes. O backend pode ser fake (simulado), mas é um diferencial implementar um backend real com Java + Spring Boot.

- Desafio: Início 04/08 até dia 18/08/2025.

# 👥 Perfis e Funcionalidades:
👦 Aluno
 - Fazer login (simulado)

 - Ver suas notas por disciplina

 - Ver dados da turma (nome, série, professor responsável)

👨‍🏫 Professor
 - Fazer login (simulado)

 - Ver lista das turmas que leciona

 - Ver alunos da turma

 - Cadastrar notas por aluno e disciplina

👨‍💼 Diretor
 - Fazer login (simulado)

 - Ver todas as turmas

 - Ver todos os professores e alunos

 - Ver notas gerais dos alunos (modo leitura)

🧾 Regras de Negócio: 
- Um aluno só pode ver suas próprias informações.

- Um professor só pode cadastrar/ver notas dos alunos de suas turmas.

- O diretor tem acesso a todos os dados, mas não edita notas.

- As turmas podem ter múltiplos alunos e um professor responsável.

# 🧰 Tecnologias esperadas:
- React Native (com Expo ou CLI)

- AsyncStorage, Context API, Redux ou qualquer solução de estado

- Navegação com React Navigation

- Estilização livre (Styled Components, Tailwind, CSS Modules...)

- Dados mockados (JSON local, MockAPI, MirageJS, Firebase, etc)

# 💡 Diferenciais (não obrigatórios):
- Backend real com Java + Spring Boot (API RESTful)

- Integração com banco de dados (PostgreSQL ou H2)

- Autenticação real (JWT ou token mockado)

- Testes unitários

- Deploy do backend na nuvem (Render, Railway, etc)

# ✅ O que será avaliado:
- Funcionalidades mínimas implementadas

- Clareza e organização do código

- Estrutura de pastas

- Uso adequado de componentes

- Boas práticas de React Native

- UX (experiência de usuário)

- README claro com instruções de uso

# 📌 Entrega:
- Faça um fork deste repositório.

- Desenvolva sua solução no fork.

- Suba no GitHub e inclua no README:

- Instruções para rodar o app (Android/iOS)

- Prints ou vídeos de demonstração

- Tecnologias utilizadas

Envie o link do repositório quando finalizado, com nome, assunto e o link para o e-mail: denise.risia@drcconsultoria.com.br ou para o Wpp da empresa.


# 📱Sobre o meu projeto:
   Bom, esse é o meu primeiro projeto real utilizando React-Native e pude aprender muita coisa sobre essa tecnologia. Eu trabalhei com uma arquitetura de camadas (ou arquitetura em componentes) para me manter no simples e focar no mais importante, que é a implementação do front-end. Antes de iniciar o projeto eu estava terminando um curso de React-Native, então comecei realmente a fazer o projeto bem perto do prazo final, mas isso só me mostrou que o curso que fiz me ensinou muito e fez valer a pena, pois consegui pôr em prática muita coisa. Também fiz apenas o front-end, muito por causa do tempo, mas também por não saber muito sobre back-end.

# 🧩 Dificuldades:
Como foi meu primeiro aplicativo, eu demorei um pouco para pegar o jeito de o que fazer, como fazer e o porque. Mas com o passar do tempo, fazendo o que eu achei ser mais complicado, que são as telas e as lógicas do Professor, eu comecei a entender o como e o porque. Fui pegando o jeito e entendi como era a melhor forma de reutilizar os componentes. Tive muito problema com a lógica de certas coisas, como utilizar o context por exemplo, mas tudo foi dando certo e eu fui entendendo com o passar do projeto.

# 🛠️ Tecnologias Utilizadas:
* React Native em conjunto com Expo
* React Navigation para fazer a navegação entre telas utilizando o formato Stack
* Context API para passar props para outras telas e componentes
* AsyncStorage para guardar informações do login em cache
* Dados mockados
* Estilização de acordo com o React-Native

# 💻 Como utilizar: 
 ### **Pré-requisitos:**
  * Node.js instalado na máquina
  * npm ou yarn
  * Expo Go App instalado no seu smartphone
 
###  **Passo a Passo:**
 1. Clone este repositório:

        git clone https://github.com/Caioledan/desafio-mobile.git
   
 2. Instale todas as dependências:
  
        npm install
    Ou, se você usa yarn:
   
        yarn install
   
  3. Inicie o servidor do Expo:
     
         npm start
     
     Ou:
     
         yarn start
   
  4. Inicie o aplicativo Expo Go, aperte em "Scan QR code" e escaneie o QR code que apareceu no terminal.
  5. Teste com os usuários e dados mockados:
   * Exemplos de usuários:
     * Diretor: 
      matrícula: 10001;
      senha: admin123
     * Professor: 
      matrícula: 20001;
      senha: senha123
     * Aluno:
      matrícula: 240016;
      senha: aluno

# 🖼️ Sobre o Protótipo:
Eu comecei fazendo as telas do aluno e, quando passei para as outras telas, percebi que apenas iriam reutilizar conceitos, então só fiz o design das telas iniciais:
<img width="1134" height="791" alt="image" src="https://github.com/user-attachments/assets/9d94f27a-c9f6-41f7-9692-ba1e92fc2950" />
E, como é perceptível, algumas coisas mudaram bastante.

# 📱Telas do Aplicativo:
## Telas do Diretor:
<img src="https://github.com/user-attachments/assets/0a8b97b1-3e7e-4125-afc2-ec03f366964e" width="300">
<img src="https://github.com/user-attachments/assets/a5973e91-653b-4877-b25f-fc8449ef3ee0" width="300">
<img src="https://github.com/user-attachments/assets/073afc45-be0b-4349-b199-331b57c4ce32" width="300">
<img src="https://github.com/user-attachments/assets/3bc3f7f6-4d61-45d8-9c8c-9f5654a2822f" width="300">
<img src="https://github.com/user-attachments/assets/db33fc1c-1ebe-4efe-9acc-6a635f4a4f74" width="300">

## Telas do Professor:
<img src="https://github.com/user-attachments/assets/df96ceb5-33d0-40c2-90d1-70773820bd41" width="300">
<img src="https://github.com/user-attachments/assets/a3c80cb7-384e-41b7-9fad-56938017d9cf" width="300">
<img src="https://github.com/user-attachments/assets/5c47e9f6-e624-43bd-a967-5bd8666307da" width="300">
<img src="https://github.com/user-attachments/assets/036df1d7-59eb-492d-93ef-ea762c9aea37" width="300">
<img src="https://github.com/user-attachments/assets/76c9fd0e-bf88-4309-bfba-94c1406c3316" width="300">

## Telas do Aluno:
<img src="https://github.com/user-attachments/assets/f3f0853c-63bf-457a-b039-af20aaf26249" width="300">
<img src="https://github.com/user-attachments/assets/21d59fd0-daca-4834-ac6a-d7f7abf307a2" width="300">
<img src="https://github.com/user-attachments/assets/a0d317e8-1a4c-424a-82c2-75b3dac1af7e" width="300">

# 🔗 Link para o vídeo de demonstração do aplicativo:
https://youtube.com/shorts/GtUOT1JV7yE
