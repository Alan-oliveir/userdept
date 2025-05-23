# Projeto de API REST com banco de dados usando Java e Spring Boot
> Projeto feito durante aula da DevSperior de desenvolvimento web com Rest API e banco de dados usando Java e Spring 
> Boot, posteriormente expandido com interface frontend.

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
- **Dashboard principal** com listagem de usuários
- **Formulário de cadastro** com validação
- **Busca por ID** com resultado em tempo real
- **Design moderno e responsivo**
- **Feedback visual** (alertas de sucesso/erro)
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

## 🔗 Endpoints da API

| Método | Endpoint       | Descrição               |
|--------|----------------|-------------------------|
| GET    | `/users`       | Lista todos os usuários |
| GET    | `/users/{id}`  | Busca usuário por ID    |
| POST   | `/users`       | Cadastra novo usuário   |

### Exemplo JSON para POST:
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "department": {
    "id": 1,
    "name": "Gestão"
  }
}
```

## Dados de exemplo

O projeto inclui dados pré-carregados:

**Departamentos:**
- Gestão (ID: 1)
- Informática (ID: 2)

**Usuários:**
- Maria (maria@gmail.com) - Gestão
- Bob (bob@gmail.com) - Gestão
- Alex (alex@gmail.com) - Informática
- Ana (ana@gmail.com) - Informática

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

- ✅ **Listagem completa** de usuários com departamentos
- ✅ **Cadastro de usuários** com dropdown de departamentos
- ✅ **Busca por ID** com feedback visual
- ✅ **Validação de formulários** em tempo real
- ✅ **Mensagens de sucesso/erro** automáticas
- ✅ **Design responsivo** para mobile e desktop
- ✅ **Atualização automática** da lista após operações

## Próximos passos (sugestões)

- [ ] Implementar endpoint para listar departamentos
- [ ] Adicionar funcionalidade de edição de usuários
- [ ] Implementar exclusão de usuários
- [ ] Adicionar paginação na listagem
- [ ] Implementar busca por nome/email
- [ ] Adicionar validações no backend

## Agradecimentos e Créditos

- [DevSuperior - Escola de programação](https://devsuperior.com.br) - Curso base de Spring Boot
- Interface frontend desenvolvida como extensão do projeto original

## Agradecimentos e Créditos
[DevSuperior - Escola de programação](https://devsuperior.com.br)
