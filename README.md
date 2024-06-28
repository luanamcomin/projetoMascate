# MascateSGP

Este repositório contém apenas o frontend do projeto MascateSGP. O backend do projeto pode ser encontrado [aqui](https://github.com/AmandaAguiarF/projeto-mascate.git).

---

**MascateSGP é um sistema de gerenciamento de pedidos internos desenvolvido para os restaurantes da faculdade SENAC PE. O projeto foi desenvolvido como parte da cadeira de Coding 2. Este sistema permite a gestão de pedidos realizados por duas unidades, "Lanchonete" e "Cafeteria", que solicitam produtos da cozinha do restaurante chamado Mascate.**

## Funcionalidades

- **Catálogo de Produtos:** Permite visualizar e adicionar produtos ao pedido.
- **Gestão de Pedidos:** Página onde funcionários da cozinha podem consultar e alterar o status dos pedidos realizados pela lanchonete e cafeteria.
- **Histórico de Pedidos:** Consultar pedidos anteriores.
- **Página Inicial:** Página inicial do site.
- **Login:** Página de login.
- **Carrinho de Compras:** Editar o pedido, adicionando ou removendo produtos para gerar um novo pedido.
- **Relatórios:** Gerar relatórios sobre produtos mais pedidos, quantidade de pedidos por unidade, vendas diárias e mensais, etc.

## Tecnologias Utilizadas

- Angular 17
- Angular Material
- TypeScript
- HTML
- CSS

## Estrutura do Projeto

```
src/
├── app/
│ ├── components/
│ │ ├── cart-item
│ │ ├── footer/
│ │ ├── header/
│ │ ├── modal-produto
│ │ ├── product-card/
│ │ └── tabelas/
│ ├── models/
│ │ ├── pedidos.ts
│ │ └── produtos.ts
│ ├── pages/
│ │ ├── catalogo/
│ │ ├── gestao/
│ │ ├── historico/
│ │ ├── home/
│ │ ├── login/
│ │ ├── pedido/
│ │ └── relatorios/
│ ├── services/
│ │ ├── pedido/
│ │ ├── produto/
│ │ ├── relatorio/
│ │ └── tabela/
├── assets/
├── main.ts
├── styles.css
└── index.html
```


## Como Executar o Projeto

### Pré-requisitos

- Node.js
- Angular CLI

### Passos para executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/MascateSGP.git
   cd MascateSGP
    ```

2. Instale as dependências:

  ```bash
npm install
  ```

3. Execute o servidor de desenvolvimento:
   
  ```bash
ng serve
  ```

4. Acesse o aplicativo em seu navegador:

  ```bash
http://localhost:4200
```

## Estrutura de Diretórios

### Components
- **header:** Componente de cabeçalho.
- **footer:** Componente de rodapé.
- **product-card:** Cartão de visualização de produtos.
- **modal-produto:** Modal para seleção de sabor e quantidade do produto.

### Pages
- **catalogo:** Página de catálogo de produtos.
- **gestao:** Página de gestão de pedidos.
- **historico:** Página de histórico de pedidos.
- **home:** Página inicial do site.
- **login:** Página de login.
- **pedido:** Página do carrinho de compras.
- **relatorios:** Página de relatórios.

### Services
- **produto:** Serviço para gerenciamento de produtos.
- **pedido:** Serviço para gerenciamento de pedidos.
- **relatorio:** Serviço para geração de relatórios.

### Models
- **produtos.ts:** Modelo de dados para produtos.
- **pedidos.ts:** Modelo de dados para pedidos

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir issues e pull requests. Toda ajuda é bem-vinda!

---

Desenvolvido por Luana Martins para a cadeira de Coding 2 da faculdade SENAC PE.

---

Se tiver alguma dúvida ou sugestão, entre em contato pelo email: luana.martinscomin@gmail.com
