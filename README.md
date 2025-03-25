```md
# Projeto EAD-05-Vinicius: Refatoração de Código

## Descrição do Projeto

Este projeto consiste na refatoração de um código legado, com o objetivo de tornar o sistema mais organizado, eficiente e sustentável. A refatoração foi realizada para corrigir problemas de débito técnico e modernizar o sistema, facilitando a manutenção, a escalabilidade e a experiência do usuário.

## Objetivos da Refatoração

O código original apresentava diversos problemas que comprometiam sua qualidade, dentre eles:

- Uso excessivo de estilos inline e internos.
- Código duplicado e de difícil manutenção.
- Layout quebrado e desalinhado com padrões modernos de UI/UX.
- Falta de boas práticas de acessibilidade.
- Código JavaScript pouco modular e com validações ineficazes.
- Ausência de padrões consistentes de nomenclatura.

Com a refatoração, os principais objetivos foram:

1. **Melhoria na organização do código** – Remoção de duplicações e centralização dos estilos e scripts.
2. **Aderência aos princípios de Clean Code** – Estruturação modular, clareza e consistência na nomenclatura.
3. **Aprimoramento do Layout** – Criação de uma interface responsiva, alinhada com padrões modernos de design e usabilidade.
4. **Validações e Funcionalidades** – Implementação de validações robustas e correção de funcionalidades críticas.
5. **Acessibilidade** – Inclusão de boas práticas para garantir que o sistema seja acessível a todos os usuários.

## 🗂 Estrutura de Pastas do Projeto

```
/assets
  /css
    styles.css
  /img
    (diretório vazio para futuras imagens)
  /js
    contato.js
    home.js
    script.js
  /paginas
    cadastro.html
    contato.html
    sobre.html
    index.html
README.md
```

## Comparação Entre Branches

### Branch **main**

- **Contexto:**  
  Código legado com diversas inconsistências e débito técnico.
- **Principais Problemas:**
  - Estilos inline e internos dispersos pelo HTML.
  - Código duplicado e de difícil manutenção.
  - Layout desalinhado com as boas práticas de UI/UX.
  - Falta de acessibilidade e usabilidade para pessoas com necessidades especiais.
  - JavaScript pouco modular, com funções repetitivas e validações ineficazes.

### Branch **beta**

- **Contexto:**  
  Versão refatorada que implementa melhorias para corrigir os problemas identificados.
- **Melhorias Implementadas:**
  - **Organização dos Estilos:**  
    Todos os estilos foram movidos para arquivos CSS externos, garantindo centralização e facilidade de manutenção.
  - **Modularização do Código:**  
    O JavaScript foi reorganizado em funções e módulos claros, eliminando duplicações e facilitando futuras alterações.
  - **Aprimoramento do Layout:**  
    O layout foi redesenhado para atender aos padrões modernos de UI/UX, proporcionando uma interface responsiva e intuitiva.
  - **Validações Robústas:**  
    Implementação de validações eficientes, principalmente em formulários, com feedback visual adequado ao usuário.
  - **Acessibilidade:**  
    Inclusão de práticas de acessibilidade, como o uso correto de tags semânticas, `label` nos formulários, e navegação facilitada por teclado.
  - **Padrões de Nomenclatura:**  
    Adoção de convenções que melhoram a legibilidade e a consistência do código.

## Mudanças Realizadas

### 1. Remoção de Estilos Inline e Internos
- **Problema:**  
  A utilização excessiva de estilos diretamente no HTML dificultava a manutenção e a atualização visual do sistema.
- **Solução:**  
  Transferência completa dos estilos para o arquivo `styles.css`, organizando-os de forma modular.

### 2. Modularização do JavaScript
- **Problema:**  
  Código JavaScript disperso e duplicado, o que complicava a manutenção e a escalabilidade.
- **Solução:**  
  Centralização das funções em um único arquivo (ou módulos separados) e eliminação de redundâncias, facilitando a manutenção e os testes.

### 3. Validação de Formulários
- **Problema:**  
  Validações ineficazes que permitiam a inserção de dados malformados, especialmente no campo de e-mail.
- **Solução:**  
  Implementação de expressões regulares para validar os formulários e feedback visual que informa ao usuário sobre o sucesso ou erro na inserção dos dados.

### 4. Responsividade e Aprimoramento do Layout
- **Problema:**  
  O layout original não se adaptava a diferentes tamanhos de tela, comprometendo a experiência em dispositivos móveis.
- **Solução:**  
  Redesenho do layout utilizando frameworks e boas práticas de UI/UX para garantir uma interface responsiva e agradável.

### 5. Acessibilidade
- **Problema:**  
  Falta de diretrizes de acessibilidade, dificultando o uso por pessoas com necessidades especiais.
- **Solução:**  
  Correção de elementos semânticos e implementação de atributos ARIA, melhorando a usabilidade para todos os usuários.

## Passos para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Vinis-vp/ead-05-vinicius.git
   cd ead-05-vinicius
   ```
2. Abra o arquivo `index.html` no navegador para acessar a página inicial.
3. Explore as demais páginas (Cadastro, Contato, etc.) e observe as melhorias implementadas.

## Problemas Encontrados e Justificativas para os Ajustes

### Uso Excessivo de Estilos Inline
- **Problema:**  
  Dificuldade de manutenção e escalabilidade do design.
- **Justificativa:**  
  Centralizar os estilos em `styles.css` facilita futuras modificações e a aplicação de temas.

### Código Duplicado
- **Problema:**  
  Redundância que aumenta a probabilidade de erros e dificulta a manutenção.
- **Justificativa:**  
  Consolidar funções comuns em um único módulo melhora a legibilidade e a manutenibilidade do código.

### Layout Desalinhado com Padrões Modernos
- **Problema:**  
  Interface desorganizada que compromete a experiência do usuário.
- **Justificativa:**  
  Adoção de um layout responsivo e intuitivo melhora significativamente a usabilidade do sistema.

### Validações Ineficazes
- **Problema:**  
  Inserção de dados malformados e falta de feedback ao usuário.
- **Justificativa:**  
  Validações robustas garantem a integridade dos dados e proporcionam uma experiência de uso mais segura.

### Acessibilidade
- **Problema:**  
  Falta de suporte para usuários com necessidades especiais.
- **Justificativa:**  
  A implementação de boas práticas de acessibilidade torna o sistema mais inclusivo e de fácil navegação para todos.
