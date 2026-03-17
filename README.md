# Automação E2E com Cypress, CI/CD e Allure

Este repositório foi desenvolvido como parte dos meus estudos em **Qualidade de Software**, com foco em **automação de testes End to End** e integração com **CI/CD**.

Neste projeto, utilizei o **Cypress** para automatizar testes da loja EBAC e integrei a execução com **GitHub Actions**, geração de **relatórios Allure**, publicação no **GitHub Pages** e upload de **evidências** como screenshots e vídeos.

A proposta foi ir além da automação local, praticando também uma estrutura inicial de pipeline para execução contínua dos testes.

## Objetivo do projeto

O objetivo deste projeto foi praticar conceitos importantes de automação E2E, como:

- execução de testes automatizados em interface web;
- organização básica dos testes com Cypress;
- uso de Page Objects para melhorar a legibilidade;
- geração de evidências de execução;
- criação de pipeline CI/CD no GitHub Actions;
- geração e publicação de relatório Allure;
- parametrização da URL da aplicação via variável de ambiente.

## Tecnologias utilizadas

- **JavaScript**
- **Node.js**
- **Cypress**
- **GitHub Actions**
- **Allure Report**
- **GitHub Pages**
- **@faker-js/faker**

## O que foi desenvolvido

Neste projeto, foram implementados testes automatizados E2E com Cypress e uma pipeline de integração contínua para execução dos testes.

A automação conta com:

- testes organizados em specs separadas;
- estrutura de suporte do Cypress;
- uso de **Page Objects**;
- geração de **screenshots** e **vídeos** em falhas;
- geração de **relatório Allure**;
- publicação automática do relatório no **GitHub Pages**;
- upload de artefatos da execução no workflow.

## Estrutura do projeto

```text
.
├── .github
│   └── workflows
│       └── teste-ci.yml
├── cypress
│   ├── e2e
│   │   ├── exercicio-e2e.cy.js
│   │   └── login.cy.js
│   ├── fixtures
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── page_objects
│           ├── checkout.page.js
│           └── produtos.page.js
├── cypress.config.js
├── package.json
└── README.md
```

## Cenários automatizados

Os testes deste projeto estão organizados em duas specs principais:

### Login

- validação do fluxo de login;
- execução isolada de um cenário focado em autenticação.

### Fluxo E2E

- execução de um fluxo completo de ponta a ponta;
- apoio de Page Objects para organizar interações relacionadas a produtos e checkout.

## Pipeline CI/CD

O workflow configurado neste projeto realiza as seguintes etapas:

- checkout do código;
- configuração do Node.js;
- instalação das dependências;
- execução dos testes automatizados com Cypress;
- geração do relatório Allure;
- publicação do relatório no GitHub Pages;
- upload de evidências da execução, como screenshots e vídeos.

Essa configuração me permitiu praticar não apenas a automação dos testes, mas também a integração dos testes em um fluxo contínuo.

## Relatórios e evidências

O projeto foi configurado para:

- gerar resultados no diretório `allure-results`;
- gerar o relatório final em `allure-report`;
- publicar o relatório automaticamente no GitHub Pages;
- armazenar screenshots e vídeos como artefatos da execução.

## Execução local

Para instalar as dependências:

`npm install`

Para executar os testes:

`npm test`

Para gerar o relatório Allure:

`npm run report:generate`

Para abrir o relatório localmente:

`npm run report`

## Configuração da aplicação

A URL da aplicação pode ser definida por variável de ambiente:

`CYPRESS_BASE_URL`

Caso a variável não seja informada, o projeto utiliza por padrão:

`http://lojaebac.ebaconline.art.br/`

## O que pratiquei com este projeto

Com este projeto, pratiquei principalmente:

- automação E2E com Cypress;
- organização básica de testes web;
- uso de Page Objects;
- geração de relatórios com Allure;
- integração contínua com GitHub Actions;
- publicação de relatórios no GitHub Pages;
- armazenamento de evidências da execução;
- configuração de ambiente via variável.

## Pontos de melhoria

Como este é um projeto de estudo, ainda existem melhorias que podem ser feitas no futuro, como:

- ampliar a cobertura de cenários automatizados;
- melhorar a separação entre dados, comandos e páginas;
- adicionar badges no README;
- deixar os relatórios e links da pipeline mais visíveis;
- incluir mais validações e cenários negativos;
- evoluir a estrutura para uma suíte mais completa.

## Considerações finais

Este projeto representa uma etapa importante do meu aprendizado em **automação de testes** e **CI/CD**.

Meu objetivo aqui foi mostrar que consigo não apenas automatizar um fluxo E2E com Cypress, mas também integrar essa automação a uma pipeline de execução contínua com geração de relatórios e evidências.

## Autor

**Gustavo Alves Moreno**

Em transição de carreira para a área de **Qualidade de Software**, com foco em testes manuais e automação.

- GitHub: [Guss182](https://github.com/Guss182)

---

Projeto desenvolvido para fins de estudo e prática em automação E2E com Cypress e integração CI/CD.
