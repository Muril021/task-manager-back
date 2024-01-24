# Task Manager Backend
Este é o backend do projeto Task Manager, desenvolvido em TypeScript utilizando o framework Express e o ORM TypeORM.

## Instalação
Certifique-se de ter o Yarn instalado antes de prosseguir.

- Clone o repositório:
```js
git clone https://github.com/Muril021/task-manager-back.git
cd task-manager-back
```

- Instale as dependências:
```js
yarn install
```

## Configuração
- Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Um exemplo pode ser encontrado no arquivo .env.example.
- Certifique-se de ter um servidor MySQL em execução e atualize as configurações de conexão no arquivo .env.

## Dependências
- cors (^2.8.5): Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
- dotenv (^16.0.3): Carrega variáveis de ambiente a partir de um arquivo .env.
- express (^4.18.2): Framework web para Node.js.
- express-validator (^6.14.2): Biblioteca para validação de dados em requisições HTTP.
- mysql (^2.18.1): Driver MySQL para Node.js.
- reflect-metadata (^0.1.13): Biblioteca para reflexão de metadados em tempo de execução.
- ts-dotenv (^0.8.3): Integração do dotenv com TypeScript.
- typeorm (0.3.10): ORM (Object-Relational Mapping) para Node.js.

## Execução
Existem três scripts principais definidos no package.json:

- dev: Inicia o servidor em modo de desenvolvimento utilizando ts-node-dev.
- typeorm: Executa os comandos do TypeORM em modo CommonJS.
- start: Inicia o servidor em modo de produção.

Aqui estão alguns exemplos de como usar esses scripts:

- Para iniciar o servidor em modo de desenvolvimento:
```js
yarn dev
```

- Para executar comandos do TypeORM (substitua <comando> pelo comando desejado):
```js
yarn typeorm <comando>
```

- Para iniciar o servidor em modo de produção:
```js
yarn start
```

Após a execução bem-sucedida, o servidor estará disponível em http://localhost:5000 por padrão.

## Desenvolvedor
Murilo Nascimento - murilojesus659@gmail.com
