# Projeto EAD-05-Vinicius: Refatoração de Código

## Descrição do Projeto

Este projeto consiste na refatoração de um código legado, com o objetivo de tornar o sistema mais organizado, eficiente e sustentável. Foram identificados diversos problemas técnicos e de usabilidade na versão original (branch **main**), e as melhorias implementadas na versão refatorada (branch **beta**) visam corrigir esses problemas.

## Objetivos da Refatoração

O código original apresentava os seguintes problemas:
- Uso excessivo de estilos inline e internos.
- Código duplicado e de difícil manutenção.
- Layout desalinhado com os padrões modernos de UI/UX.
- Falta de boas práticas de acessibilidade.
- Código JavaScript pouco modular e com validações ineficazes.
- Ausência de padrões consistentes de nomenclatura.

Os principais objetivos da refatoração foram:
1. **Melhoria na Organização do Código** – Remoção de duplicações e centralização dos estilos e scripts.
2. **Aderência aos Princípios de Clean Code** – Estruturação modular, clareza e consistência na nomenclatura.
3. **Aprimoramento do Layout** – Criação de uma interface responsiva e alinhada com padrões modernos de design.
4. **Validações e Funcionalidades** – Implementação de validações robustas e correção de funcionalidades críticas.
5. **Acessibilidade** – Inclusão de boas práticas para garantir que o sistema seja acessível a todos os usuários.

## Estrutura de Pastas do Projeto

A estrutura atual do projeto é a seguinte:

```

├── css
    ├── sobre.css
    └── styles.css
├── js
    └── script.js
├── index.html
└── paginas
    ├── contato.html
    └── sobre.html
├── README.md
```

> **Observação:** A estrutura de pastas foi ajustada para refletir a organização necessária para manter os estilos, scripts e páginas separadamente, facilitando a manutenção e a escalabilidade do sistema.

## Comparação Entre Branches

### Branch **main**

- **Contexto:**  
  Código legado com vários problemas de organização e manutenção.
- **Principais Problemas:**
  - Estilos inline e internos espalhados no HTML.
  - Código duplicado e redundante.
  - Layout desalinhado e fora dos padrões modernos de UI/UX.
  - Falta de práticas de acessibilidade.
  - JavaScript pouco modular e com validações ineficazes.

### Branch **beta**

- **Contexto:**  
  Versão refatorada que implementa melhorias para corrigir os problemas identificados.
- **Melhorias Implementadas:**
  - **Organização dos Estilos:**  
    Todos os estilos foram migrados para arquivos CSS externos, centralizando a aparência visual.
  - **Modularização do Código:**  
    O JavaScript foi organizado em módulos e funções específicas, eliminando duplicações.
  - **Aprimoramento do Layout:**  
    O layout foi redesenhado para se adequar aos padrões modernos de UI/UX, garantindo responsividade.
  - **Validações Robústas:**  
    Foram implementadas validações eficazes em formulários, com feedback visual para o usuário.
  - **Acessibilidade:**  
    Melhorias na utilização de tags semânticas, `label` nos formulários e atributos ARIA, promovendo uma navegação mais inclusiva.
  - **Padrões de Nomenclatura:**  
    Adoção de convenções que facilitam a leitura e a manutenção do código.

## Mudanças Realizadas

### 1. Remoção de Estilos Inline e Internos
- **Problema:**  
  Estilos aplicados diretamente no HTML dificultavam a manutenção.
- **Solução:**  
  Centralizamos todos os estilos no arquivo `styles.css`, permitindo uma gestão mais simples e organizada do design.

### 2. Modularização do JavaScript
- **Problema:**  
  Código JavaScript disperso, com funções duplicadas e pouca organização.
- **Solução:**  
  Unificamos a lógica em módulos e arquivos específicos (como `script.js`, `home.js` e `contato.js`), facilitando a manutenção e a escalabilidade.

### 3. Validação de Formulários
- **Problema:**  
  Validações insuficientes que permitiam a inserção de dados malformados.
- **Solução:**  
  Implementamos expressões regulares e feedback visual para validar corretamente os formulários, garantindo a integridade dos dados.

### 4. Responsividade e Aprimoramento do Layout
- **Problema:**  
  Layout original não responsivo, comprometendo a experiência em dispositivos móveis.
- **Solução:**  
  O layout foi redesenhado para ser responsivo e intuitivo, melhorando a usabilidade em diferentes dispositivos.

### 5. Acessibilidade
- **Problema:**  
  Falta de suporte a usuários com necessidades especiais.
- **Solução:**  
  Foram implementadas melhorias de acessibilidade, como o uso adequado de `label`, atributos ARIA e uma navegação facilitada por teclado.

## Passos para Rodar o Projeto

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/Vinis-vp/ead-05-vinicius.git
   cd ead-05-vinicius
   ```
2. **Abra o Arquivo Inicial:**
   - Execute o `index.html` em seu navegador para visualizar a página inicial.
3. **Explore o Sistema:**
   - Navegue pelas páginas de cadastro, contato e sobre para conferir as melhorias implementadas.

---

Este README documenta as principais mudanças realizadas na refatoração, evidenciando os problemas do código original (branch **main**) e as melhorias implementadas na versão refatorada (branch **beta**). O objetivo é oferecer um sistema mais robusto, modular e preparado para futuras evoluções.
```
