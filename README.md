# Marvel Comic's Store

Este é um projeto React com Typescript e Vite, que usa a API da Marvel para exibir uma lista de quadrinhos. Você pode ver mais informações sobre um quadrinho individual e adicioná-lo ao carrinho.

##### Como Baixar
Para baixar este projeto, certifique-se de ter a chave SSH configurada em sua conta GitHub e execute o seguinte comando no terminal:

```
git@github.com:pvitor7/marvel-store.git
```


##### Instalação
Para instalar as dependências do projeto, basta executar o seguinte comando no terminal:

```
npm install
```
ou
```
yarn install
```


Execução
Para executar o projeto em modo de desenvolvimento, basta executar o seguinte comando no terminal:


```
npm run dev
```
ou
```
yarn dev
```


Isso iniciará um servidor local com o projeto no navegador padrão em http://localhost:3000. 

### Tecnologias Usadas

React
Typescript
Vite
Cypress

<br/>

#### Testes

Este projeto usa Cypress para testes end-to-end automatizados. Certifique-se de ter o Cypress instalado globalmente:

```
yarn global add cypress
```

Para executar os testes, execute o seguinte comando:

```
yarn cypress open
```

Isso abrirá a interface do Cypress, onde você pode selecionar os testes que deseja executar. Se desejar **executar todos os testes de uma vez**, basta clicar no botão **"Run all specs"** na parte superior da interface.

Você também pode executar os testes em segundo plano usando o seguinte comando:

```
yarn cypress:run
```

Isso executará todos os testes sem abrir a interface do Cypress.