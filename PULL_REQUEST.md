## Descrição do projeto Task Manager Backend
Aqui está sendo descrito quais são as funcionalidades do projeto e o que cada uma dessas funcionalidades está fazendo.

# Componente principal
- App.tsx:
O arquivo App.tsx define a classe App, responsável por configurar e iniciar o servidor Express. Ele utiliza as bibliotecas express, cors, e routes para gerenciar as rotas da aplicação. As principais etapas incluem:

Configuração do Express: O servidor Express é configurado com middlewares para processar requisições JSON e lidar com o CORS.

Configuração de Rotas: O arquivo routes é utilizado para definir as rotas da aplicação, sendo incorporado ao servidor Express.

---

## Definição das rotas
- routes.ts:
O arquivo routes.ts é responsável por configurar as rotas da aplicação utilizando o Express Router. Ele define rotas para operações CRUD relacionadas às tarefas (tasks), incluindo indexação, criação, exibição, atualização e remoção.

---

## Fonte de dados para conexão com o banco
- data-source.ts:
O arquivo data-source.ts configura a fonte de dados para o TypeORM. Ele utiliza as variáveis de ambiente para obter informações de conexão com o banco de dados MySQL. A fonte de dados inclui configurações como sincronização automática, logging, entidades, migrações e assinantes.

---

## Entidade
- Task.ts:
O arquivo Task.ts define a entidade Task que representa uma tarefa no banco de dados. Utiliza o TypeORM para mapear a entidade para a tabela tasks. Inclui colunas como title, description, is_favorited, created_at e updated_at.

---

## Controlador
- TaskController.ts:
O arquivo TaskController.ts contém a lógica para manipular requisições relacionadas às tarefas. Inclui métodos para listar todas as tarefas, criar, exibir, atualizar e excluir tarefas. As operações são executadas utilizando o serviço TaskService e o TypeORM.

---

## Serviço
- TaskService.ts:
O arquivo TaskService.ts fornece métodos específicos para manipular operações relacionadas às tarefas. Ele utiliza métodos do TypeORM para interagir com o banco de dados e retorna resultados específicos para o TaskController.

AbstractService.ts
O arquivo AbstractService.ts define uma classe abstrata AbstractService que fornece operações CRUD genéricas. É uma abstração utilizada por TaskService e pode ser estendida para outros serviços.

---

## Validador
- TaskValidation.ts:
O arquivo TaskValidation.ts define as regras de validação utilizando a biblioteca express-validator. Inclui validações para o título (title), descrição (description), e campo de favorito (favorited).