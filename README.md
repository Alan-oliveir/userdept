# Sistema de Usuários e Departamentos

![Java](https://img.shields.io/badge/Java-17-blue?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring--Boot-2.7-green?logo=spring)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> Sistema completo de gerenciamento de usuários e departamentos com API REST e interface web moderna e responsiva.

## 📸 Screenshots

![Interface do Sistema](https://github.com/Alan-oliveir/userdept/blob/main/images/screenshot.png)

## ✨ Funcionalidades

### 🔧 API REST
- **Listagem de usuários** com seus departamentos
- **Busca individual** por ID
- **Cadastro** de novos usuários
- **Documentação interativa** com Scalar

### 🎨 Interface Web
- **Design moderno e responsivo** para desktop e mobile
- **Integração completa** com a API REST
- **Feedback visual** para todas as operações
- **Formulários validados** com mensagens de erro/sucesso
- **Atualização automática** da lista após operações

## 🚀 Tecnologias

### Backend
- **Java 17** - Linguagem principal
- **Spring Boot 2.7** - Framework web
- **Spring Data JPA** - Persistência de dados
- **H2 Database** - Banco de dados em memória
- **Maven** - Gerenciamento de dependências

### Frontend
- **HTML5** - Estrutura da página
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e integração com API

### Documentação
- **Scalar** - Documentação interativa da API

## 📋 Pré-requisitos

- Java 17+ instalado
- Maven instalado
- Navegador moderno (Chrome, Firefox, Edge...)

## 🔧 Como executar

### 1. Clone o repositório
```bash
git clone https://github.com/Alan-oliveir/userdept.git
cd userdept
```

### 2. Execute o projeto
```bash
# Via Maven
mvn spring-boot:run

# Ou via IDE (IntelliJ/Eclipse)
# Run As -> Spring Boot App
```

### 3. Acesse a aplicação
- **Interface Web**: http://localhost:8080/
- **Documentação da API**: http://localhost:8080/scalar/docs
- **Console H2**: http://localhost:8080/h2-console

### 4. Dados de acesso H2
- **URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: *(vazio)*

## 📚 Documentação

- **[📖 Documentação da API (Scalar)](http://localhost:8080/scalar/docs)** - Documentação interativa completa
- **[🔧 Documentação Técnica](https://alan-oliveir.github.io/userdept/)** - Detalhes de implementação e arquitetura

## 🏗️ Estrutura do Projeto

```
src/
├── main/
│   ├── java/com/devsuperior/userdept/
│   │   ├── controllers/
|   |   |   ├── ScalarDocController.java
│   │   │   └── UserController.java
│   │   ├── entities/
│   │   │   ├── User.java
│   │   │   └── Department.java
│   │   ├── repositories/
│   │   │   └── UserRepository.java
│   │   └── config/
│   │       ├── CorsConfig.java
|   |       └── OpenApiConfig.java
|   |         
│   └── resources/
│       ├── static/
│       │   ├── index.html
│       │   ├── css/
│       │   │   └── style.css
│       │   └── js/
│       │       └── script.js
│       ├── application.properties
│       └── import.sql
```

## 🎓 Aprendizado

Este projeto foi feito durante aula da **DevSperior** de desenvolvimento web com Rest API e banco de dados usando Java e Spring Boot, posteriormente expandido:
- Interface frontend completa
- Documentação interativa
- Melhorias na experiência do usuário
- Design responsivo moderno

## 🤝 Contribuições

Quer contribuir para o projeto? Ótimo! Confira o nosso [guia de contribuição](docs/contributing.md) para saber como participar.

## 🙏 Agradecimentos

- **[DevSuperior](https://devsuperior.com.br)** - Curso base de Spring Boot
- **[Claude AI](https://claude.ai)** - Auxílio no desenvolvimento do frontend
- **[ChatGPT](https://openai.com/chatgpt)** - Apoio na documentação técnica

---

### 📧 Contato
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alan-ogoncalves)

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**
