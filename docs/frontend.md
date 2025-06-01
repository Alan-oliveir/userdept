# Documentação da Interface Web

A interface foi desenvolvida com HTML, CSS e JavaScript puro, consumindo os endpoints REST da API.

## Estrutura de Arquivos

```
static/
├── index.html
├── css/
│ └── style.css
└── js/
└── script.js
```

## Funcionalidades da Interface

- Listagem completa de usuários com departamentos
- Cadastro com formulário validado
- Busca por ID com feedback visual
- Mensagens de sucesso e erro automáticas
- Design responsivo para mobile/desktop
- Atualização automática da lista após operações

## Capturas de Tela

![Screenshot](https://raw.githubusercontent.com/Alan-oliveir/userdept/main/images/screenshot.png)

## Tecnologias Usadas

- HTML5 sem bibliotecas externas
- CSS3 com design responsivo
- JavaScript puro com `fetch` para comunicação com a API

## Lógica de Integração (JavaScript)

- `GET /users`: exibe lista na dashboard
- `POST /users`: envia novo usuário e atualiza a tabela
- `GET /users/{id}`: busca usuário pelo ID digitado

## Melhorias Futuras

- Animações ou efeitos com CSS/JS
- Modo escuro
- Validações visuais mais sofisticadas
- Refatorar JS em módulos

---

Desenvolvido por **Alan de Oliveira Gonçalves**   
[GitHub](https://github.com/Alan-oliveir) | [LinkedIn](https://www.linkedin.com/in/alan-ogoncalves)  

