
![img](./back-end/src/assets/node.png)
# Sistema de Login com Node e React

Sistema de Login criado com back-end em Node e JWT, e no front-end usando React.
## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  cd back-end
  npm install 
  npm run dev
  -------------
  cd front-end
  npm install 
  npm run start
```

## Documentação da API

#### Rota de criação de sessions
##### Essa rota tem a função de criar um session com os dados do usuário e o token ao logar na aplicação

```
  POST /sessions
```
*Sem parâmetros

#### Objeto do body 
```
No corpo da requisição do body deve conter esse seguinte objeto JSON:

{
    "email": "teste@teste.com",
    "password": "123"
}

```

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do usuário e o token, como no exemplo abaixo.
{
    "user": {
        "id": "63f91119d710087ace36ad9b",
        "email": "dionesalves@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjkxMTE5ZDcxMDA4N2FjZTM2YWQ5YiIsImlhdCI6MTY3NzI5NjA1NSwiZXhwIjoxNjc3OTAwODU1fQ.yEx1ytw_mFW00_CuRsl1i_pUwH1fXVkpcY3SOfgmPjw"
}
````

#### Rota de usuários
##### Essa rota retorna os usuários do banco de dados na rota privada /users
```
  GET /users
```
*Sem parâmetros - Rota com restrições de autenticação

#### Retorna um JSON

```
  Deve retornar um JSON com os dados dos usuários cadastrados no banco de dados
[
    {
        "_id": "63f69481f118069ede2312ab",
        "email": "teste1@gmail.com",
        "password": "1232%$aVYAJHSBbjasdhua",
        "createdAt": "2023-02-22T22:17:37.375Z",
        "updatedAt": "2023-02-22T22:17:37.375Z",
        "__v": 0
    },
    {
        "_id": "63f91119d710087ace36ad9b",
        "email": "teste2@gmail.com",
        "password": "@wewu7ujsihnd\eu6ghjkhdjkbf",
        "createdAt": "2023-02-24T19:33:45.469Z",
        "updatedAt": "2023-02-24T19:33:45.469Z",
        "__v": 0
    }
]
````



## Stacks utilizadas

**Back-end:** Node, Express, Cors, Bcrypt, dotenv, jsonwebtoken, mongoose, nodemon, sucrase.

**Front-end:** React, Axios, react-router-dom

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)

