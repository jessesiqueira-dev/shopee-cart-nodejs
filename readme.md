<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Simulador de Carrinho de Compras (Shopee Style)</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=DIO&message=Challenge&color=E94D5F&labelColor=202024" alt="DIO Project" />
  <img src="https://img.shields.io/static/v1?label=Status&message=Completed&color=success&labelColor=202024" alt="Status" />
  <img src="https://img.shields.io/static/v1?label=Node.js&message=v20+&color=339933&labelColor=202024" alt="Node Version" />
</p>

<table align="center">
<thead>
  <tr>
    <td>
        <p align="center">Jessé Siqueira</p>
        <a href="https://github.com/jessesiqueira">
        <img src="https://github.com/jessesiqueira.png" width="115px" alt="Jessé Siqueira"><br>
      </a>
    </td>
    <td colspan="3">
    <p>🚀 <b>Full Stack Developer | Estudante de ADS (Unicesumar)</b>
      <br/>
      🎓 Mestre em Bioenergia com foco em sustentabilidade e tecnologia.
      <br/>
      👨‍💻 Atuando com Java, Spring Boot, React e Node.js.
    </p>
      <a href="https://www.linkedin.com/in/jessé-siqueira/" align="center">
        <img align="center" alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
      </a>
    </td>
  </tr>
</thead>
</table>

<br/>

## 💻 Sobre o Projeto

Este projeto foi desenvolvido como um desafio prático na **DIO**, com o objetivo de recriar a lógica fundamental de um carrinho de compras de e-commerce. A aplicação gerencia itens, calcula totais e sub-totais, e manipula a quantidade de produtos de forma dinâmica.

### 🚀 Melhorias Implementadas (Diferenciais)
Para elevar o nível da entrega, apliquei melhorias que vão além do código base:
- **Lógica de Agrupamento:** O sistema agora verifica se um item já existe no carrinho ao ser adicionado. Se existir, ele incrementa a quantidade em vez de duplicar a linha.
- **Formatação de Moeda:** Utilizei a API `Intl.NumberFormat` para exibir todos os valores formatados como Real Brasileiro (BRL).
- **UX no Console:** Mensagens de feedback personalizadas para cada ação (adicionar, remover, deletar).

## 🛠️ Tecnologias e Habilidades

- **Node.js**: Ambiente de execução.
- **Javascript (ES6+)**: Uso intenso de `Async/Await`, `Reduce`, `FindIndex` e `Modules`.
- **Modularização (ESM)**: Organização do código em camadas de serviços específicas para itens e carrinho.

## 📚 Funcionalidades Principais

*   [x] **Criar Item**: Gera um objeto de item com cálculo automático de subtotal.
*   [x] **Adicionar ao Carrinho**: Adiciona novos itens ou incrementa a quantidade de existentes.
*   [x] **Remover Item (Qtd)**: Diminui a quantidade de um item; se chegar a 1, ele é removido.
*   [x] **Deletar Item**: Remove completamente o item do carrinho, independente da quantidade.
*   [x] **Cálculo de Total**: Soma todos os subtotais de forma otimizada.
*   [x] **Exibição Formatada**: Mostra a lista de compras de forma organizada no terminal.

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/jessesiqueira/seu-repositorio.git](https://github.com/jessesiqueira/seu-repositorio.git)