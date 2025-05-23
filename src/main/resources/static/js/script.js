// Configurações da API
const API_BASE_URL = 'http://localhost:8080';

// Lista de departamentos (baseada no seu import.sql)
// Na prática, você deveria criar um endpoint /departments no Spring Boot
const DEPARTMENTS = [
    { id: 1, name: 'Gestão' },
    { id: 2, name: 'Informática' },
    { id: 3, name: 'Vendas' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Financeiro' }
];

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    loadDepartments();
    loadUsers();
    setupForm();
});

// ========== CONFIGURAÇÃO INICIAL ==========

// Carregar departamentos no select
function loadDepartments() {
    const select = document.getElementById('userDepartment');
    DEPARTMENTS.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.name;
        select.appendChild(option);
    });
}

// Configurar formulário de cadastro
function setupForm() {
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        createUser();
    });
}

// ========== OPERAÇÕES COM USUÁRIOS ==========

// Criar novo usuário
async function createUser() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const departmentId = parseInt(document.getElementById('userDepartment').value);

    const department = DEPARTMENTS.find(d => d.id === departmentId);

    const userData = {
        name: name,
        email: email,
        department: {
            id: departmentId,
            name: department.name
        }
    };

    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const newUser = await response.json();
            showAlert('Usuário cadastrado com sucesso!', 'success');
            document.getElementById('userForm').reset();
            loadUsers(); // Recarrega a lista
        } else {
            throw new Error('Erro ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
        showAlert('Erro ao cadastrar usuário. Verifique se o servidor está rodando.', 'error');
    }
}

// Carregar todos os usuários
async function loadUsers() {
    const container = document.getElementById('usersContainer');
    container.innerHTML = '<div class="loading">Carregando usuários...</div>';

    try {
        const response = await fetch(`${API_BASE_URL}/users`);

        if (response.ok) {
            const users = await response.json();
            displayUsers(users);
        } else {
            throw new Error('Erro ao carregar usuários');
        }
    } catch (error) {
        console.error('Erro:', error);
        container.innerHTML = `
            <div class="alert alert-error">
                Erro ao carregar usuários. Verifique se o servidor Spring Boot está rodando na porta 8080.
            </div>
        `;
    }
}

// Buscar usuário por ID
async function searchUserById() {
    const id = document.getElementById('searchId').value;
    const resultContainer = document.getElementById('searchResult');

    if (!id) {
        showAlert('Por favor, digite um ID válido.', 'error');
        return;
    }

    resultContainer.innerHTML = '<div class="loading">Buscando usuário...</div>';

    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`);

        if (response.ok) {
            const user = await response.json();
            displaySingleUser(user);
        } else if (response.status === 404) {
            resultContainer.innerHTML = `
                <div class="alert alert-info">
                    Usuário com ID ${id} não encontrado.
                </div>
            `;
        } else {
            throw new Error('Erro ao buscar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
        resultContainer.innerHTML = `
            <div class="alert alert-error">
                Erro ao buscar usuário. Verifique se o servidor está rodando.
            </div>
        `;
    }
}

// ========== EXIBIÇÃO DE DADOS ==========

// Exibir lista de usuários na tabela
function displayUsers(users) {
    const container = document.getElementById('usersContainer');

    if (users.length === 0) {
        container.innerHTML = '<div class="no-data">Nenhum usuário cadastrado.</div>';
        return;
    }

    const table = `
        <table class="users-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.department ? user.department.name : 'N/A'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = table;
}

// Exibir um único usuário (resultado da busca)
function displaySingleUser(user) {
    const resultContainer = document.getElementById('searchResult');
    resultContainer.innerHTML = `
        <table class="users-table" style="margin-top: 15px;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.department ? user.department.name : 'N/A'}</td>
                </tr>
            </tbody>
        </table>
    `;
}

// ========== UTILIDADES ==========

// Exibir alertas de feedback
function showAlert(message, type) {
    const alertsContainer = document.getElementById('alerts');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;

    alertsContainer.appendChild(alertDiv);

    // Remove o alerta após 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}
