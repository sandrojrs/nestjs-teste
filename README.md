# Modelo de projeto de API NestJS 7

- API REST com suporte [TypeORM] (http://typeorm.io)
- Estrutura de pastas, exemplos de código e melhores práticas

## 1. Primeiros passos

### 1.1 Requisitos

Antes de começar, certifique-se de ter pelo menos esses componentes em sua estação de trabalho:

- Uma versão atualizada de [NodeJS] (https://nodejs.org/) e NPM
- Um banco de dados MySQL .

### 1.2 Configuração do projeto

Comece clonando este projeto em sua estação de trabalho.

`` `sh
git clone https://github.com/sandrojrs/nestjs-teste my-project
`` `

O próximo passo será instalar todas as dependências do projeto.

`` `sh
cd ./my-project
npm install
`` `

Uma vez que as dependências são instaladas, você pode configurar seu projeto criando um novo arquivo `.env` contendo suas variáveis ​​de ambiente usadas para desenvolvimento.

`` `

Para uma configuração de desenvolvimento padrão, você pode deixar os valores padrão para `API_PORT`,` API_PREFIX` e `API_CORS` na seção` Configuração da API`. A regra `SWAGGER_ENABLE` permite que você controle o módulo de documentação Swagger para NestJS. Deixe em `1` ao iniciar este exemplo.

Em seguida, vem a configuração TypeORM: mude tudo de acordo com sua própria configuração de banco de dados. Também pode ser útil transformar `TYPEORM_SYNCHRONIZE` em` true` para evitar migrações durante a fase de desenvolvimento. Não modifique os valores na seção `TypeORM internos`, a menos que você altere a estrutura da pasta.


### 1.3 Lançar e descobrir

Agora você está pronto para iniciar o aplicativo NestJS usando o comando abaixo.


## Inicie o servidor de desenvolvimento com TSNode
npm run start
`` `

## Documentação
Agora você pode ir para `http://localhost:3000/swagger/` e ver seus documentos da API Swagger

## 2. Comandos NPM padrão

Os comandos NPM abaixo já estão incluídos neste modelo e podem ser usados ​​para executar, construir e testar seu projeto rapidamente.

`` `sh
## Inicie o aplicativo usando o NodeJS transpilado
npm run start

## Execute o aplicativo usando "ts-node"
npm run dev

## Transpile os arquivos TypeScript
npm run build

## Execute os testes funcionais do projeto
npm run test

## 3. Metas do projeto

Este é um projeto de uma API REST construída com NestJS, Mysql  e TypeOrm com objetivo de melhorias de habilidades.

## 4. Roteiro

As seguintes melhorias estão em andamento:

- [x] Testes automatizados


