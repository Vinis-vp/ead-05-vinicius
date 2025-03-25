```md
# Projeto EAD-05-Vinicius

Este repositório reúne o trabalho de refatoração de um código legado, com o objetivo de torná-lo mais organizado, eficiente e sustentável. A refatoração foi realizada com base na análise de débitos técnicos e na aplicação de boas práticas de desenvolvimento.

## Cenário

A equipe identificou que o código original (branch **main**) apresentava diversos problemas que comprometiam a manutenção e a escalabilidade, tais como:

- **Uso excessivo de estilos inline e interno:** Dificulta a manutenção do layout.
- **Código duplicado:** Aumenta o risco de inconsistências e erros.
- **Layout quebrado e fora dos padrões de UI/UX:** Impacta negativamente a experiência do usuário.
- **Falta de boas práticas de acessibilidade:** Prejudica a usabilidade para pessoas com necessidades especiais.
- **Código JavaScript pouco modular:** Dificulta a extensão e manutenção do código.
- **Ausência de padrões de nomenclatura:** Reduz a clareza e consistência do projeto.
- **Validações de JavaScript não funcionais:** Podem causar erros em tempo de execução.

## Abordagem e Metodologia de Refatoração

Para resolver os problemas identificados, a equipe adotou a seguinte abordagem:

1. **Identificação de Problemas:**  
   - Mapeamento das inconsistências no código legado.
   - Análise dos pontos que impactam na manutenção e escalabilidade.

2. **Definição de um Novo Padrão:**  
   - Proposta de uma nova organização do projeto, incluindo a separação dos estilos em arquivos CSS externos e a criação de componentes reutilizáveis.
   - Adoção de padrões consistentes de nomenclatura e práticas modernas de acessibilidade (como o uso de atributos ARIA e foco no contraste).

3. **Refatoração e Otimização:**  
   - Remoção de estilos inline e internos.
   - Eliminação de código duplicado.
   - Modularização do código JavaScript com validações corrigidas e melhores práticas de desenvolvimento.
   - Reorganização do layout para atender aos padrões de UI/UX.

4. **Análise e Relato:**  
   - Documentação detalhada para cada trecho refatorado:
     - **Situação Atual:** Comportamento original do código.
     - **Problema Identificado:** Débitos técnicos e inconsistências.
     - **Estratégia de Correção:** Abordagem adotada para a melhoria.
     - **Testes e Validações:** Medidas adotadas para garantir a eficácia das alterações.

## Comparação Entre Branches

### Branch **main**
- **Contexto:** Código legado que apresenta diversos débitos técnicos.
- **Principais Problemas:**
  - Estilos inline e internos excessivos.
  - Código duplicado.
  - Layout com falhas de UI/UX.
  - Falta de acessibilidade.
  - Código JavaScript pouco modular e com validações ineficazes.
- **Impactos:**  
  - Dificuldade na manutenção.
  - Risco aumentado de erros.
  - Experiência do usuário comprometida.

### Branch **beta**
- **Contexto:** Versão refatorada com melhorias baseadas nos conceitos apresentados.
- **Melhorias Implementadas:**
  - **Estilos:** Uso de arquivos CSS externos, eliminando a necessidade de estilos inline e internos.
  - **Código:** Remoção de duplicações e criação de funções/componentes reutilizáveis.
  - **Layout:** Ajustes para seguir os padrões modernos de UI/UX.
  - **Acessibilidade:** Implementação de práticas recomendadas, como uso de ARIA e foco no contraste.
  - **JavaScript:** Modularização do código e correção das validações.
  - **Padrão de Nomenclatura:** Adoção de convenções que facilitam a leitura e manutenção.
- **Benefícios:**  
  - Código mais limpo, organizado e sustentável.
  - Facilidade de manutenção e escalabilidade.
  - Melhor experiência do usuário.
  - Base sólida para futuras integrações e evoluções.

## Como Contribuir

- **Clonando o Repositório:**  
  ```bash
  git clone https://github.com/Vinis-vp/ead-05-vinicius.git
  cd ead-05-vinicius
  ```
- **Verificando as Branches:**  
  Para visualizar as diferenças entre as branches **main** e **beta**, utilize:
  ```bash
  git checkout main
  git diff beta
  ```
- **Colaborações:**  
  - Realize melhorias seguindo os padrões definidos.
  - Abra _issues_ e _pull requests_ para discutir e submeter novas melhorias.
  - Mantenha a documentação atualizada conforme novas alterações forem implementadas.

## Testes e Validações

- **Testes Funcionais:**  
  Foram criados testes para as funções JavaScript refatoradas, garantindo a validação automática das funcionalidades principais.
- **Auditorias de Acessibilidade:**  
  Ferramentas como o Lighthouse foram utilizadas para assegurar que as melhorias de acessibilidade estejam em conformidade com os padrões recomendados.

## Conclusão

A refatoração realizada na branch **beta** representa um avanço significativo na qualidade do código. As melhorias implementadas corrigem os débitos técnicos existentes e estabelecem um novo padrão de desenvolvimento que facilita a manutenção, a escalabilidade e a evolução do sistema.
```