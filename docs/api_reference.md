# Referência da API

Este documento complementa a documentação interativa da API, fornecendo informações técnicas sobre configurações e padrões utilizados.

## Documentação Interativa

O projeto utiliza **Scalar** para gerar documentação interativa da API REST, permitindo testar os endpoints diretamente no navegador.

!!! info "URLs da Documentação"  
    - **Scalar (Interativa)**: [http://localhost:8080/scalar/docs](http://localhost:8080/scalar/docs)  
    - **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)
    
=== "Documentação Scalar"    

- Lista completa de endpoints  
- Esquemas de requisição/resposta  
- Testes interativos  
- Exemplos de código  

## Endpoints Resumidos

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|---------|
| `GET` | `/users` | Listar todos usuários | ✅ Implementado |
| `GET` | `/users/{id}` | Buscar usuário por ID | ✅ Implementado |
| `POST` | `/users` | Criar novo usuário | ✅ Implementado |
| `PUT` | `/users/{id}` | Atualizar usuário | 🔄 Planejado |
| `DELETE` | `/users/{id}` | Deletar usuário | 🔄 Planejado |
| `GET` | `/departments` | Lista departamentos | 🔄 Planejado |  

## Modelos de Dados

=== "User"  

```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com",
  "department": {
    "id": 1,
    "name": "Gestão"
  }
}
```

=== "Department"  

```json
{
  "id": 1,
  "name": "Gestão"
}
```

## Configurações Técnicas

=== "CORS Configuration"

A API está configurada para aceitar requisições do frontend:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/users/**")
                .allowedOrigins("http://localhost:8080")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

!!! info "Origens Permitidas"
    - `http://localhost:8080` (desenvolvimento)  
    - Produção: configurar conforme deploy  

=== "Content-Type Headers"

1. Requisições
```http
Content-Type: application/json
Accept: application/json
```

2. Respostas
```http
Content-Type: application/json; charset=UTF-8
```

=== "Properties"

```properties
# Configurações do SpringDoc OpenAPI
springdoc.api-docs.path=/v3/api-docs  
springdoc.swagger-ui.enabled=false  
springdoc.swagger-ui.path=/swagger-ui.html
```

=== "Dependências Maven"

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.0.4</version>
</dependency>
```

## Padrões de Resposta

=== "Sucesso (2xx)"

```json
// GET /users/{id} - 200 OK
{
  "id": 1,
  "name": "Maria Silva",
  "email": "maria@email.com",
  "department": {
    "id": 1,
    "name": "Gestão"
  }
}
```

```json
// GET /users - 200 OK
[
  {
    "id": 1,
    "name": "Maria Silva", 
    "email": "maria@email.com",
    "department": {
      "id": 1,
      "name": "Gestão"
    }
  },
  {
    "id": 2,
    "name": "João Santos",
    "email": "joao@email.com", 
    "department": {
      "id": 2,
      "name": "Informática"
    }
  }
]
```
 
=== "Erro (4xx/5xx)"

```json
// 404 Not Found
{
  "timestamp": "2025-05-31T10:30:00.123Z",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 999",
  "path": "/users/999"
}
```

```json
// 400 Bad Request (futuro - com validações)
{
  "timestamp": "2025-05-31T10:30:00.123Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email deve ser válido"
    }
  ]
}
```

## Códigos de Status HTTP

| Código | Descrição | Quando Usar |
|--------|-----------|-------------|
| `200` | OK | Operação bem-sucedida |
| `201` | Created | Recurso criado (POST) |
| `400` | Bad Request | Dados inválidos |
| `404` | Not Found | Recurso não encontrado |
| `500` | Internal Error | Erro interno do servidor |

## Exemplos de Requisições

### Criar Usuário

```bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ana Costa",
    "email": "ana@email.com",
    "department": {
      "id": 2,
      "name": "Informática"
    }
  }'
```

### Buscar Todos os Usuários

```bash
curl -X GET http://localhost:8080/users \
  -H "Accept: application/json"
```

### Buscar Usuário por ID

```bash
curl -X GET http://localhost:8080/users/1 \
  -H "Accept: application/json"
```

## Limitações  
!!! warning "Limitações"  
    - Não há autenticação implementada  
    - Validações básicas nos dados de entrada  
    - Banco de dados em memória (dados perdidos ao reiniciar)  
    - Sem paginação para grandes volumes de dados  

## Dúvidas e Suporte

1. Consulte a documentação interativa: [Scalar](http://localhost:8080/scalar/docs)  
2. Veja os exemplos nesta documentação  
3. Abra uma issue no GitHub  
4. Entre em contato via LinkedIn  

---

Desenvolvido por **Alan de Oliveira Gonçalves**   
[GitHub](https://github.com/Alan-oliveir) | [LinkedIn](https://www.linkedin.com/in/alan-ogoncalves)  
