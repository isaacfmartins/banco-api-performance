# Testes de Performance - Banco API

## 📘 Introdução

Este repositório contém testes de performance para a API do projeto **Banco API**, utilizando a ferramenta [k6](https://k6.io/). O foco é avaliar o comportamento da aplicação sob diferentes cargas, garantindo estabilidade, escalabilidade e desempenho adequado.

## 🧰 Tecnologias Utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [k6](https://k6.io/) - ferramenta de testes de carga moderna e extensível
- [k6 Web Dashboard](https://k6.io/docs/results-output/web-dashboard/) - visualização em tempo real dos testes

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/
│   ├── config.local.json
├── fixtures/
│   ├── postLogin.json
│   ├── postTransfencias.json
├── helpers/
│   ├── autenticacao.js
├── tests/
│   ├── login.tests.js
│   ├── transferencias.tests.js
├── utils/
│   └── variaveis.js
└── .gitignore
└── htmal-report.html
└── README.md
```

## 🎯 Objetivo de Cada Grupo de Arquivos

- `cofig/`: 
  - `config.local.json`: Contem o valor da variavel BASE_URL local
- `fixtures/`: 
  - `postLogin.json`: Contem o payload para o endpoint login
  - `postTransferencia`: Contem o payload para o endpoint transferencias
- `helpers/`:
  - `autenticacao.js`: Contém a função de autenticacao
- `tests/`: Contém os cenários de testes de performance:
  - `login.tests.js`: Verificação do endpoints de login
  - `transferencias.tests.js`: Verificação do endpoints de transferencias
- `utils/`: 
  - `variaveis.js`: Função que verifica a existência da variavel BASE_URL e realiza a exportação.

## 🛠️ Modo de Instalação

1. Clone o repositório:

```bash
git clone https://github.com/isaacfmartins/banco-api-performance.git
cd banco-api-performance
```

2. Instale o k6 (caso ainda não tenha):

```bash
# via Homebrew (macOS)
brew install k6

# via Chocolatey (Windows)
choco install k6
```

Ou consulte a [documentação oficial do k6](https://k6.io/docs/get-started/installation/) para outros métodos.

## 🚀 Execução dos Testes

Antes de executar, defina a variável de ambiente `BASE_URL` apontando para a API que deseja testar:

```bash
k6 run tests/login.tests.js -e BASE_URL=http://localhost:3000
```

Para executar um dos testes, utilize:

```bash
k6 run tests/login.tests.js
```

### Relatório em tempo real + exportação do relatório

Você pode ativar o dashboard web do k6 e exportar o relatório HTML com o seguinte comando:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html BASE_URL=http://localhost:3000 k6 run tests/login.tests.js
```

Após a execução, o arquivo `html-report.html` será gerado com o relatório completo.

---

📎 Repositório original: [isaacfmartins/banco-api-performance](https://github.com/isaacfmartins/banco-api-performance)
