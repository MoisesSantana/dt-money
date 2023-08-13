# Boas-vindas ao repositório!

Esta aplicação é um controlador de transações, utilizando React com TS e Context API para gerenciamento do estado global. Já para a fake API você pode acessar <a href="https://github.com/MoisesSantana/dt-money-fake-api" target="_blank">esse repositório</a>.

# Técnologias Utilizadas

<details>
  <summary><strong>React</strong></summary><br />

  >O <a href="https://react.dev/" target="_blank">React</a> é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e responsivas. Ele adota uma abordagem eficiente ao utilizar uma representação virtual do DOM, o que permite atualizações rápidas e eficientes na interface, minimizando o impacto no DOM real. Com o suporte à sintaxe JSX e o foco na criação de componentes reutilizáveis, o React torna mais fácil a construção de interfaces modulares e a composição de aplicativos web complexos. Devido à sua popularidade e comunidade ativa, o React é uma escolha comum para o desenvolvimento de aplicações modernas e escaláveis.
  
</details>

<details>
  <summary><strong>Vite</strong></summary><br />

  ><a href="https://vitejs.dev/" target="_blank">Vite</a> é uma ferramenta de compilação extremamente rápida e leve para o desenvolvimento de aplicações web. Ela foi projetada para substituir a tradicional abordagem de compilação baseada em bundlers, permitindo um processo de desenvolvimento mais ágil e eficiente. Ao contrário dos bundlers convencionais, como o Webpack, o Vite adota uma abordagem de "módulos nativos" (native ESM) para carregar e compilar os arquivos durante o desenvolvimento. Isso resulta em tempos de inicialização incrivelmente rápidos, permitindo que as alterações sejam refletidas instantaneamente no navegador, sem a necessidade de reconstruir e recarregar a aplicação. Além disso, o Vite possui suporte nativo para o Vue.js e o React, tornando-se uma escolha popular para projetos dessas frameworks. Com sua velocidade, simplicidade e suporte moderno, o Vite oferece uma experiência de desenvolvimento aprimorada para construção de aplicações web.
  
</details>

<details>
  <summary><strong>TypeScript</strong></summary><br />

  ><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que se baseia no JavaScript padrão, porém com a adição de recursos de tipagem estática. Ao usar o TypeScript, os desenvolvedores podem adicionar tipos aos seus códigos, permitindo a detecção de erros de forma antecipada durante o desenvolvimento. Isso ajuda a melhorar a qualidade e a robustez dos programas, ao mesmo tempo em que fornece recursos avançados, como autocompletar e refatoração de código. O TypeScript é compatível com o JavaScript existente e pode ser usado para criar aplicativos web, aplicativos móveis, APIs e muito mais, tornando-se uma escolha popular entre os desenvolvedores que buscam uma experiência de desenvolvimento mais sólida e escalável.
</details>

<details>
  <summary><strong>Context API</strong></summary><br />

  ><a href="https://react.dev/reference/react/createContext" target="_blank">Context API</a> é uma funcionalidade da biblioteca React que possibilita o compartilhamento eficiente de dados entre componentes, eliminando a necessidade de passar props através de múltiplos níveis de hierarquia. Ela permite criar um contexto contendo um estado compartilhado, que pode ser fornecido aos componentes relevantes através de um Provider. Isso possibilita que os componentes consumam esse contexto usando Consumers ou o hook useContext, acessando e atualizando o estado compartilhado de maneira direta, simplificando a gestão de estados globais e informações que precisam ser acessadas por vários componentes em uma aplicação React.
</details>

<details>
  <summary><strong>React Hook Form</strong></summary><br />
  
  ><a href="https://react-hook-form.com/" target="_blank">React Hook Form</a> é uma biblioteca de gerenciamento de formulários para React que se concentra na simplicidade e desempenho. Ele utiliza os conceitos de hooks para facilitar a criação e validação de formulários de maneira eficiente. Ao fornecer um conjunto de hooks e componentes, o React Hook Form permite aos desenvolvedores controlar o estado do formulário, validar entradas, lidar com erros e submeter dados de forma simplificada. Ele otimiza o desempenho ao minimizar as re-renderizações e regras de validação desnecessárias, tornando-o uma opção robusta para a construção de formulários interativos e responsivos em aplicações React.

</details>

<details>
  <summary><strong>Zod</strong></summary><br />
  
  >O <a href="https://zod.dev/" target="_blank">Zod</a>  é uma biblioteca de validação em JavaScript que permite criar esquemas de validação de dados de forma declarativa. Com foco na segurança e confiabilidade, o Zod oferece um sistema de tipagem seguro para verificar a conformidade dos dados com os requisitos especificados. Com recursos avançados como validações condicionais e composição de esquemas, ele ajuda os desenvolvedores a garantir a integridade dos dados e a reduzir erros ao lidar com entradas de usuário ou informações externas em suas aplicações.

</details>

<details>
  <summary><strong>UseContextSelector</strong></summary><br />
  
  ><a href="https://www.npmjs.com/package/use-context-selector" target="_blank">UseContextSelector</a> é uma biblioteca para consumir o context API assim como o useContext, no entanto, é conhecido que existe um problema de desempenho no useContext. Quando um valor de contexto é alterado, todos os componentes que utilizam useContext serão renderizados novamente. Para resolver esse problema, foi proposto o useContextSelector e posteriormente o Speculative Mode com suporte para o seletor de contexto. Essa biblioteca disponibiliza a API no espaço do usuário.

</details>

<details>
  <summary><strong>Axios</strong></summary><br />
  
  ><a href="https://axios-http.com/" target="_blank">Axios</a> é uma biblioteca JavaScript amplamente utilizada para fazer requisições HTTP baseadas em Promises, tanto no navegador quanto no Node.js. O Axios tem uma sintaxe mais concisa para configuração de requisições, a capacidade de definir interceptadores de requisição e resposta para lógica centralizada, melhor tratamento de erros com interceptores específicos, suporte a Promises mais previsível, cancelamento de requisições embutido, transformadores de dados, compatibilidade com Node.js e capacidade de monitorar progresso de download/envio. Esses recursos tornam o Axios uma escolha abrangente e conveniente para realizar requisições HTTP em comparação com a abordagem mais básica do fetch.

</details>

<details>
  <summary><strong>Husky</strong></summary><br />
  
  ><a href="https://typicode.github.io/husky/" target="_blank">Husky</a> é uma ferramenta amplamente utilizada no desenvolvimento web que facilita a integração de hooks do Git diretamente no fluxo de trabalho do desenvolvedor. Ao ser configurado no projeto, o Husky permite a execução automática de scripts, como pre-commit, pré-push e outros, auxiliando na aplicação de testes, linting e ações personalizadas, garantindo a consistência do código e a detecção de possíveis problemas antes que as alterações sejam enviadas ao repositório compartilhado. Isso ajuda a manter a qualidade do código e a colaboração eficiente entre membros da equipe.

</details>

<details>
  <summary><strong>ESLint</strong></summary><br />
  
  ><a href="https://eslint.org/" target="_blank">ESLint</a> é uma ferramenta de linting de código estático amplamente utilizada no desenvolvimento de software. Ela ajuda a identificar e corrigir problemas de código, seguindo as regras e diretrizes definidas no projeto. O ESLint analisa o código-fonte JavaScript e fornece avisos e erros relacionados a práticas inadequadas, problemas de formatação, potenciais erros e outras questões de qualidade. Com configurações personalizáveis, o ESLint pode ser adaptado às necessidades específicas de um projeto, permitindo que as equipes de desenvolvimento mantenham um código consistente, legível e livre de erros. É uma ferramenta valiosa para melhorar a qualidade e a manutenibilidade do código, garantindo boas práticas de programação.

</details>

<details>
  <summary><strong>Commitizen</strong></summary><br />
  
  ><a href="https://commitizen-tools.github.io/commitizen/" target="_blank">Commitizen</a> é uma ferramenta que visa padronizar e melhorar a consistência das mensagens de commit em projetos de desenvolvimento de software. Através de um processo interativo e guiado na linha de comando, o Commitizen auxilia os desenvolvedores a escreverem mensagens de commit mais descritivas e bem formatadas, seguindo um estilo específico. Isso não apenas torna o histórico de commits mais legível, mas também facilita a compreensão das mudanças ao longo do tempo, contribuindo para uma comunicação mais clara e eficaz dentro das equipes de desenvolvimento.

</details>

<details>
  <summary><strong>JSON Server</strong></summary><br />
  
  ><a href="https://github.com/typicode/json-server" target="_blank">JSON Server</a> é uma biblioteca Node.js que permite criar rapidamente uma API REST totalmente funcional a partir de um arquivo JSON. Com configuração simples, é possível simular endpoints, dados e operações CRUD, tornando-o uma ferramenta valiosa para prototipagem, testes e desenvolvimento frontend. O JSON Server simplifica a criação de APIs falsas para interações iniciais ou para cenários onde a backend real ainda não está pronta, agilizando o processo de desenvolvimento e a depuração de aplicativos que dependem de APIs.

</details>

<details>
  <summary><strong>Styled Components</strong></summary><br />
  
  ><a href="https://styled-components.com/" target="_blank">Styled Components</a> é uma biblioteca popular no ecossistema React que permite escrever estilos CSS diretamente em componentes JavaScript. Através da criação de estilos encapsulados, onde cada componente possui seus estilos definidos como parte do código, Styled Components facilita a construção de interfaces consistentes e reutilizáveis. Ao utilizar uma sintaxe semelhante à do CSS-in-JS, essa abordagem ajuda a evitar problemas de colisão de estilos, melhora a legibilidade do código e oferece suporte a recursos avançados como animações e temas dinâmicos. Isso torna Styled Components uma escolha poderosa para criar componentes estilizados de forma modular e altamente flexível.

</details>

<details>
  <summary><strong>Radix</strong></summary><br />
  
  ><a href="https://www.radix-ui.com/" target="_blank">Radix</a> é uma biblioteca que oferece componentes de interface de usuário (UI) prontos para uso, focados em acessibilidade e design flexível. Com uma abordagem de "unstyled components", o Radix permite que os desenvolvedores personalizem a aparência e o comportamento dos componentes de acordo com as necessidades do projeto, mantendo a responsabilidade pela acessibilidade e pela estrutura básica. Ao adotar uma filosofia de construção em camadas, o Radix facilita a criação de interfaces consistentes e de alta qualidade, ao mesmo tempo em que oferece um controle granular sobre o estilo e a interatividade dos componentes.

</details>

# Implementação de features

## Legenda:
  >**Concluído ✔️:**<br/>
  >**Não concluído ❌:**

### Lista de features:
  >**Concluído ✔️:** Exibir uma lista de transações, mostrando a descrição, valor, categoria e data de cada transação.<br/>
  >**Concluído ✔️:** O valor da transação deverá está verde caso seja uma entrada e vermelho caso seja uma saída.<br/>
  >**Concluído ✔️:** É necessário utilizar o JSON Server para alterar a lista de transações.<br/>
  >**Concluído ✔️:** A lista de transação deve ser ordenada da mais atual para a mais antiga.<br/>
  >**Concluído ✔️:** Deve conter um formulário de pesquisa que fará uma requisição para o JSON Server.<br/>
  >**Concluído ✔️:** Exibir três cards onde o primeiro deverá ter o total de entradas, o segundo o total de saídas e o terceiro a diferença entre os dois cards e irá representar o total.<br/>
  >**Concluído ✔️:** Os valores dos cards deverão ser atualizado de acordo com a lista de transações, isso significa que se for feito uma pesquisa por uma data específica esses cards terão, entradas, saídas e total relacionado a aquele dia.<br/>
  >**Concluído ✔️:** Deve conter um botão para adicionar uma nova transação que ao ser clicado abrirá um modal para criar uma nova transação que será adicionada no JSON Server.<br/><br/>

# Aplicação

## Acesso ao deploy

<a href="dt-money.surge.sh" target="_blank">Aqui</a> você consegue acessar a aplicação sem a necessidade da instalação.
Caso queira ver a fake API construída com JSON Server, pode abrir <a href="https://dt-money-fake-api.vercel.app" target="_blank">aqui</a>.

## Guia de instalação

Caso queira baixar essa aplicação e rodar em sua maquina você pode seguir este passo a passo:

> **Atenção ⚠️:** Para seguir esses passos é necessário ter o node e npm instalados e garantir que está no diretório correto. Para instalar o Node com npm você pode encontrar mais detalhes <a href="https://nodejs.org/en" target="_blank">aqui</a>

```bash
# Instalação de pacotes
$ npm install

# Execução local
$ npm run dev
```
