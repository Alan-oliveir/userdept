# Projeto de API REST com banco de dados usando Java e Spring Boot

![Java](https://img.shields.io/badge/Java-17-blue?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring--Boot-2.7-green?logo=spring)

> Projeto feito durante aula da DevSperior de desenvolvimento web com Rest API e banco de dados usando Java e Spring 
> Boot, posteriormente expandido com interface frontend.

**Documentações**:

- [API REST](docs/api.md)
- [Interface Web](docs/frontend.md)

## Tecnologias aprendidas

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Maven
- Rest API
- Banco de Dados H2

### Frontend

- HTML5
- CSS3
- JavaScript
- Design Responsivo

## Ferramentas utilizadas

- IntelliJ IDEA
- Postman (para testar a API)
- Navegador (para testar o frontend)
- Banco de Dados H2 

## Visão geral do sistema

O objetivo é construir um pequeno sistema (API REST) de usuários e departamentos. O projeto tem os seguintes casos de 
uso:

### API REST (Backend)

- Buscar todos usuários
- Buscar um usuário pelo seu id
- Inserir um novo usuário

**Observação:** Configuração de CORS para permitir acesso ao frontend.

### Interface (Frontend)  

- **Design moderno e responsivo**
- **Integração completa** com a API REST

## Screenshots
![Image](https://github.com/Alan-oliveir/userdept/blob/main/images/screenshot.png)

## Modelo conceitual
![Image](https://github.com/Alan-oliveir/userdept/blob/main/images/dominio.png)

## Mapeamento objeto-relacional
![Image](https://github.com/Alan-oliveir/userdept/blob/main/images/objetos.png)

## Estrutura do projeto

```
src/
├── main/
│   ├── java/com/devsuperior/userdept/
│   │   ├── controllers/
│   │   │   └── UserController.java
│   │   ├── entities/
│   │   │   ├── User.java
│   │   │   └── Department.java
│   │   ├── repositories/
│   │   │   └── UserRepository.java
│   │   └── config/
│   │       └── CorsConfig.java
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

## Requisitos

- Java 17+ instalado
- Maven instalado
- Navegador moderno (Chrome, Firefox, Edge...)

## Como executar o projeto

### 1. Executar o Backend

```bash
# Via Maven
mvn spring-boot:run

# Ou via IDE (IntelliJ)
# Run As -> Spring Boot App
```

### 2. Acessar a aplicação

- **API REST**: `http://localhost:8080/users`
- **Interface Web**: `http://localhost:8080/`
- **Console H2**: `http://localhost:8080/h2-console`

### 3. Dados de acesso H2

- **URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: *( )*

## Endpoints da API

A API possui endpoints para listagem, cadastro e busca de usuários.  
Detalhes completos estão disponíveis na [documentação da API](docs/api.md).

## Etapas de construção

### Backend (Original)

1. Criar o projeto Spring Boot
2. Implementar o modelo de domínio
3. Mapeamento objeto-relacional com JPA
4. Configurar o banco de dados H2
5. Criar os endpoints da REST API

### Frontend (Adicionado)

6. Configurar CORS no Spring Boot
7. Criar interface HTML responsiva
8. Implementar estilos CSS modernos
9. Desenvolver lógica JavaScript
10. Integrar frontend com API REST

## Funcionalidades da interface

A interface web permite visualizar, cadastrar e buscar usuários de forma responsiva.  
Veja a [documentação da interface](docs/frontend.md) para detalhes técnicos.  

## Agradecimentos e Créditos

- [DevSuperior - Escola de programação](https://devsuperior.com.br) - Curso base de Spring Boot
- Interface frontend desenvolvida como extensão do projeto original
- Ferramentas de Inteligência Artificial utilizadas como suporte:
    - [Claude](https://claude.ai) — Auxílio na geração e revisão de código JavaScript e HTML
    - [ChatGPT](https://openai.com/chatgpt) — Apoio na criação e organização da documentação técnica

---   

### Contato:  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alan-ogoncalves)
