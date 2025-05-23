# Documentação da API REST

Esta API fornece endpoints para gerenciamento de usuários e seus respectivos departamentos.

## 🔗 Endpoints

| Método | Endpoint       | Descrição               |
|--------|----------------|-------------------------|
| GET    | `/users`       | Lista todos os usuários |
| GET    | `/users/{id}`  | Busca usuário por ID    |
| POST   | `/users`       | Cadastra novo usuário   |

---

## Exemplo de Requisição POST

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

## Exemplo de Resposta (GET /users)

```json
{
    "id": 1,
    "name": "Maria",
    "email": "maria@gmail.com",
    "department": {
      "id": 1,
      "name": "Gestão"
    }
}
```

## Configuração de CORS

O backend está configurado com CORS para permitir acesso da interface web.  
Arquivo responsável: CorsConfig.java.

## Futuras melhorias na API

- Listar departamentos (GET /departments)
- Editar usuários (PUT /users/{id})
- Deletar usuários (DELETE /users/{id})
- Paginação e ordenação
- Busca por nome ou email
- Validações no backend
