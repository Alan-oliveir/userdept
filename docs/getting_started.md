# Guia de Início Rápido

Este guia te ajudará a executar o Sistema de Usuários e Departamentos em poucos minutos.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### Obrigatórios
- **Java 17+** ([Download Oracle](https://www.oracle.com/java/technologies/downloads/) ou [OpenJDK](https://openjdk.org/))
- **Maven 3.6+** ([Download Maven](https://maven.apache.org/download.cgi))
- **Git** ([Download Git](https://git-scm.com/downloads))

### Opcionais (Recomendados)
- **IntelliJ IDEA** ou **Eclipse** - IDE para desenvolvimento
- **Postman** - Para testar endpoints da API
- **Navegador moderno** - Chrome, Firefox, Edge

### Verificar Instalação

```bash
# Verificar Java
java -version
# Deve mostrar: java version "17.x.x" ou superior

# Verificar Maven  
mvn -version
# Deve mostrar: Apache Maven 3.x.x

# Verificar Git
git --version
# Deve mostrar: git version x.x.x
```

## Clonando o Projeto

```bash
# Clonar o repositório
git clone https://github.com/Alan-oliveir/userdept.git

# Entrar na pasta do projeto
cd userdept

# Verificar estrutura
ls -la
```

## Executando o Projeto

### Método 1: Via Maven (Recomendado)

```bash
# Na pasta raiz do projeto
mvn spring-boot:run
```

### Método 2: Via IDE

=== "IntelliJ IDEA"
    1. Abrir o projeto (`File` → `Open` → selecionar pasta `userdept`)
    2. Aguardar indexação e download das dependências
    3. Localizar classe `UserdeptApplication.java`
    4. Clicar com botão direito → `Run 'UserdeptApplication'`

=== "Eclipse"
    1. `File` → `Import` → `Existing Maven Projects`
    2. Selecionar pasta `userdept`
    3. Aguardar build do projeto
    4. Localizar `UserdeptApplication.java` 
    5. Botão direito → `Run As` → `Spring Boot App`

### Método 3: Via JAR

```bash
# Gerar o JAR
mvn clean package -DskipTests

# Executar o JAR
java -jar target/userdept-0.0.1-SNAPSHOT.jar
```

## Acessando a Aplicação

Quando o servidor estiver rodando, você verá no console:

```
Started UserdeptApplication in X.XXX seconds
```

### URLs Importantes

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Interface Web** | http://localhost:8080/ | Aplicação principal |
| **API REST** | http://localhost:8080/users | Endpoints REST |
| **Documentação API** | http://localhost:8080/scalar/docs | Scalar (interativo) |
| **Console H2** | http://localhost:8080/h2-console | Banco de dados |
| **Documentação Geral** | http://localhost:8080/docs | Documentação (MkDocs) |

## Configurando o Banco H2

### Acessar Console H2
1. Ir para: http://localhost:8080/h2-console
2. Usar as configurações:

```
JDBC URL: jdbc:h2:mem:testdb
Username: sa  
Password: (deixar vazio)
```

3. Clicar em **Connect**

### Dados Pré-carregados

O sistema já vem com dados de exemplo:

**Departamentos:**
- Gestão
- Informática  
- Vendas
- Marketing
- Financeiro

**Usuários:**
- Maria (Gestão)
- Bob (Gestão)
- Alex (Informática)
- Ana (Informática)

## Testando a Aplicação

### 1. Interface Web
- Acesse: http://localhost:8080/
- Visualize a lista de usuários
- Teste o cadastro de um novo usuário
- Teste a busca por ID

### 2. API REST (via Postman)

#### Buscar todos usuários
```http
GET http://localhost:8080/users
```

#### Buscar usuário por ID
```http
GET http://localhost:8080/users/1
```

#### Cadastrar novo usuário
```http
POST http://localhost:8080/users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com", 
  "department": {
    "id": 1,
    "name": "Gestão"
  }
}
```

### 3. Documentação Scalar
- Acesse: http://localhost:8080/scalar/docs
- Explore os endpoints interativamente
- Teste diretamente na interface

## Comandos Úteis

### Desenvolvimento
```bash
# Executar com profile específico
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Executar testes
mvn test

# Limpar e compilar
mvn clean compile

# Gerar JAR sem testes
mvn clean package -DskipTests
```

### Logs e Debug
```bash
# Executar com logs detalhados
mvn spring-boot:run -Dspring-boot.run.arguments="--logging.level.com.devsuperior=DEBUG"

# Ver logs de SQL
mvn spring-boot:run -Dspring-boot.run.arguments="--logging.level.org.hibernate.SQL=DEBUG"
```

## Problemas Comuns

### Porta já está em uso
```bash
# Erro: Port 8080 was already in use
# Solução: Mudar porta no application.properties
server.port=8081
```

### Java não encontrado
```bash
# Erro: 'java' is not recognized
# Solução: Configurar JAVA_HOME
export JAVA_HOME=/path/to/java
export PATH=$JAVA_HOME/bin:$PATH
```

### Maven não baixa dependências
```bash
# Limpar cache do Maven
mvn dependency:purge-local-repository

# Forçar download
mvn clean install -U
```

### H2 Console não carrega
- Verificar se está acessando: http://localhost:8080/h2-console
- Verificar JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`, Password: vazio

## Reiniciando a Aplicação

Para parar:
- **Maven**: `Ctrl + C` no terminal
- **IDE**: Botão stop na aba de execução

Para reiniciar:
- Execute novamente qualquer um dos métodos acima
- Os dados do H2 serão recarregados automaticamente

## Próximos Passos

Agora que o projeto está rodando:

1. **Explore a Interface** - Teste todas as funcionalidades
2. **Leia a [Arquitetura](architecture.md)** - Entenda como funciona
3. **Teste a API** - Use Postman ou Scalar
4. **Veja o [Frontend](frontend.md)** - Entenda a implementação
5. **Contribua** - Leia o [Guia de Contribuição](contributing.md)

## Contato

**Problemas?**
- Abra uma issue no GitHub
- Ou entre em contato diretamente pelo LinkedIn

---

Desenvolvido por **Alan de Oliveira Gonçalves**   
[GitHub](https://github.com/Alan-oliveir) | [LinkedIn](https://www.linkedin.com/in/alan-ogoncalves)  
