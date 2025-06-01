# Guia de Contribuição

Obrigado pelo interesse em contribuir com o **Sistema de Usuários e Departamentos**! Este documento te guiará através 
do processo de contribuição.

## Como Contribuir

Existem várias maneiras de contribuir com este projeto:

-  **Reportar bugs** e problemas encontrados
-  **Sugerir melhorias** e novas funcionalidades  
-  **Melhorar a documentação**
-  **Enviar código** (correções, features, testes)
-  **Melhorar o design** da interface

## Configuração do Ambiente

=== "Fork e Clone"

```bash
# Fork do repositório no GitHub (botão Fork)
# Clone seu fork
git clone https://github.com/SEU-USUARIO/userdept.git
cd userdept

# Adicione o repositório original como upstream
git remote add upstream https://github.com/Alan-oliveir/userdept.git
```

=== "Configurar Ambiente de Desenvolvimento"

!!! info "Siga o **[Guia de Início](getting-started.md)** para configurar"
    - Java 17+
    - Maven 
    - IDE de sua preferência

=== "Verificar o Funcionamento"

```bash
# Executar testes
mvn test

# Executar aplicação
mvn spring-boot:run

# Acessar: http://localhost:8080
```

## Workflow de Contribuição

### 1. Criar Branch

```bash
# Atualizar main
git checkout main
git pull upstream main

# Criar branch para sua feature/correção
git checkout -b feature/nome-da-feature
# ou
git checkout -b bugfix/nome-do-bug
```

### 2. Fazer Alterações

- ✅ Mantenha **commits pequenos** e focados
- ✅ Use **mensagens descritivas** nos commits
- ✅ Siga os **padrões de código** do projeto

### 3. Testar Alterações

```bash
# Executar testes
mvn test

# Testar manualmente
mvn spring-boot:run
```

### 4. Commit e Push

```bash
# Adicionar arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adicionar validação de email no cadastro"

# Push para seu fork
git push origin feature/nome-da-feature
```

### 5. Criar Pull Request

1. Vá ao GitHub (seu fork)
2. Clique em **"Compare & pull request"**
3. Preencha título e descrição detalhada
4. Marque se resolve alguma issue: `Closes #123`

## Padrões de Código

=== "Java (Backend)"

```java
// ✅ Bom - Nomenclatura clara
@RestController
@RequestMapping("/users")
public class UserController {
    
    private final UserRepository userRepository;
    
    // Injeção via construtor
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @GetMapping
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
```

**Diretrizes:**  

- Use **nomes descritivos** para classes, métodos e variáveis  
- **Injeção de dependência** via construtor  
- **Annotations** Spring padrão  
- **Tratamento de exceções** quando necessário  

=== "JavaScript (Frontend)"

```javascript
// ✅ Bom - Funções claras e async/await
async function loadUsers() {
    try {
        const response = await fetch('/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        showErrorMessage('Erro ao carregar usuários');
        console.error('Error:', error);
    }
}

// ✅ Funções pequenas e focadas
function displayUsers(users) {
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = users.map(createUserRow).join('');
}
```

**Diretrizes:**

- Use **async/await** em vez de callbacks  
- **Tratamento de erros** adequado  
- **Funções pequenas** e específicas  
- **Nomes descritivos** de variáveis e funções  

=== "CSS"

```css
/* ✅ Bom - Classes semânticas e responsivas */
.user-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Mobile first */
@media (max-width: 768px) {
    .user-form {
        padding: 1rem;
    }
}
```

## Testes

=== "Executar Testes"

```bash
# Todos os testes
mvn test

# Testes específicos
mvn test -Dtest=UserControllerTest

# Com relatório de cobertura
mvn test jacoco:report
```

=== "Escrever Testes"

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnAllUsers() throws Exception {
        mockMvc.perform(get("/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }
}
```

## Tipos de Issues

=== "Bug Report"

**Template:**
```
**Descrição do Bug**
Descrição clara do que está acontecendo.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Java: [e.g. 17]
```

=== "Feature Request"

**Template:**
```
**Sua feature resolve que problema?**
Descrição clara do problema/necessidade.

**Solução Desejada**
Descrição da solução que você gostaria.

**Alternativas Consideradas**
Outras soluções que você pensou.

**Contexto Adicional**
Screenshots, mockups, etc.
```

## Melhorias Desejadas

### Backend

- [ ] Adicionar validações com Bean Validation
- [ ] Implementar paginação
- [ ] Adicionar testes de integração
- [ ] Service layer para business logic
- [ ] Exception handling centralizado

### Frontend  

- [ ] Modo escuro
- [ ] Animações e transições
- [ ] Confirmação antes de deletar
- [ ] Loading states
- [ ] Paginação na interface
- [ ] Filtros e busca avançada

### Documentação

- [ ] Exemplos de uso da API
- [ ] Diagramas de arquitetura
- [ ] Tutorial passo-a-passo
- [ ] FAQ comum

## Checklist do Pull Request

Antes de enviar seu PR, verifique:

- [ ] **Código compila** sem erros
- [ ] **Testes passam** (`mvn test`)
- [ ] **Funcionalidade testada** manualmente
- [ ] **Documentação atualizada** (se necessário)
- [ ] **Commit messages** são descritivas
- [ ] **Branch atualizada** com main
- [ ] **PR tem descrição** clara do que faz

## Convenção de Commits

Use o padrão **Conventional Commits**:

```bash
# Tipos
feat: nova funcionalidade
fix: correção de bug  
docs: apenas documentação
style: formatação, sem mudança de lógica
refactor: refatoração de código
test: adição/correção de testes
chore: tarefas de build, configuração

# Exemplos
feat: adicionar endpoint DELETE /users/{id}
fix: corrigir validação de email no frontend
docs: atualizar README com instruções Docker
style: formatar código seguindo padrão
```

## Código de Conduta

Todos os colaboradores devem seguir um código de conduta que promova respeito e inclusão.  
Principais pontos:

- Respeite outros colaboradores
- Receba feedback de forma construtiva

## Revisão de Código

- Seu PR será avaliado por um mantenedor
- Você poderá ser solicitado a fazer ajustes
- Uma vez aprovado, será integrado ao projeto

## Contato

Dúvidas ou sugestões?

- Abra uma issue no GitHub
- Ou entre em contato diretamente pelo LinkedIn

!!! success "Agradecimentos"
    Obrigado por contribuir! Sua colaboração é muito valiosa e ajuda a melhorar o projeto.

---

Desenvolvido por **Alan de Oliveira Gonçalves**   
[GitHub](https://github.com/Alan-oliveir) | [LinkedIn](https://www.linkedin.com/in/alan-ogoncalves)  
