# DevSecDrops

Este é um projeto React que contém intencionalmente vulnerabilidades de segurança para fins educacionais. **Este projeto não deve ser implantado ou usado em um ambiente de produção**. Ele foi criado com o propósito de demonstrar exemplos de vulnerabilidades comuns encontradas em aplicativos e como se proteger contra elas.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e, em seguida, execute o seguinte comando para instalar as dependências:

### `npm install`

## Executando o Projeto

Para executar o projeto, utilize o seguinte comando:

### `npm start`

Isso iniciará o aplicativo em modo de desenvolvimento e abrirá a página no navegador. Você poderá acessar o aplicativo em `http://localhost:3000`.

## Vulnerabilidades Demonstradas

O projeto contém as seguintes vulnerabilidades demonstradas:

1. **Injeção de Código**: O componente `DangerVulnerableComponent` permite a injeção de código `html` dentro de uma `div`. Sem realizar a sanitização desse `input`, isso pode levar a execução não autorizada de código inserido pelo usuário. No exemplo, foi utilizada a instrução: `<img src=x onerror=alert('Hacked')//>` que provoca um erro no `src=x` e executa uma chamada `onerror=<código_javascript>`, permitindo a chamada de um código javascript.

2. **Injeção de Código**: O componente `EvalVulnerableComponent` permite a injeção de código malicioso ao usar a função `eval`. Isso pode levar a execução não autorizada de código inserido pelo usuário. No exemplo, foi utilizada a instrução: `"); alert('Hacked'); alert("` que propoe a finalização de uma instrução e a execução de uma próxima função.

3. **Injeção de Código**: O componente `HrefVulnerableComponent` permite a injeção de código malicioso ao usar `href` sem tratar o input do usuário. Isso pode levar a execução não autorizada de código inserido pelo usuário. No exemplo, foi utilizada a instrução: `javascript: alert('Hacked');` para executar um código javascript diretamente.

## Como se Proteger

Este projeto é destinado apenas para fins educacionais e serve como uma demonstração de vulnerabilidades comuns. Para proteger seu aplicativo contra vulnerabilidades de segurança, aqui estão algumas práticas recomendadas:

- Evite o uso de funções como `eval` ou `Function` para executar código inserido pelo usuário.
- Valide e sanitize todas as entradas do usuário antes de processá-las ou exibi-las no aplicativo.
- Utilize bibliotecas e frameworks seguros que ofereçam proteções integradas contra vulnerabilidades conhecidas.
- Mantenha-se atualizado com as melhores práticas de segurança e mantenha seu aplicativo e dependências atualizados.
- Evite o uso de parâmetros como `dangerouslySetInnerHTML` para atribuir novos elementos.

## Contribuindo

Sinta-se à vontade para contribuir para este projeto adicionando exemplos de outras vulnerabilidades comuns ou melhorando a documentação existente. Por favor, envie um pull request com suas alterações.

## Aviso de Responsabilidade

Este projeto é fornecido "no estado em que se encontra" e não oferece garantias ou responsabilidades. O uso deste projeto é de sua inteira responsabilidade. O autor não será responsável por quaisquer danos ou consequências resultantes do uso deste projeto.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).