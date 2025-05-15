# Projetos Pessoais de Front-End

Este repositório reúne diversos projetos pessoais desenvolvidos com o objetivo de aprimorar habilidades em front-end. Os projetos envolvem manipulação do DOM, consumo de APIs, Promises, eventos e outras técnicas modernas de desenvolvimento web.

## Projetos Inclusos
- **Calculadora**
- **Gerador de Senhas**
- **Jokenpo (Pedra, Papel e Tesoura)**
- **MyJourney**
- **Projeto Globaly**
- **Projeto Site**
- **Relógio Digital**
- **Requisições HTTP**
- **Teste Responsividade**
- **Tic-tac-toe**
- **To-Do List**
- **Validação de Login**

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- [json-server](https://github.com/typicode/json-server) (para simulação de API REST)

## Como Executar os Projetos
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Acesse a pasta do projeto desejado:**
   ```bash
   cd Projetos-FrontEnd/<nome-do-projeto>
   ```
3. **Abra o arquivo `index.html` no navegador** para visualizar o projeto.

## Como Rodar o Servidor de API (json-server)
Alguns projetos utilizam uma API fake para simular requisições HTTP. Para rodar o servidor:

1. Instale o [Node.js](https://nodejs.org/) e o npm, caso ainda não tenha.
2. Instale o json-server globalmente (opcional):
   ```bash
   npm install -g json-server
   ```
   Ou use via npx:
   ```bash
   npx json-server <caminho-do-arquivo-json> --watch
   ```
   Exemplo:
   ```bash
   npx json-server ./Requisições\ HTTP/api_project/book_progress/db.json --watch
   ```
3. O servidor estará disponível em `http://localhost:3000` por padrão.

## Observações
- Sinta-se à vontade para explorar, modificar e sugerir melhorias!
- Estes projetos são para fins de estudo e prática.

---

Desenvolvido por Victor Miguel.
