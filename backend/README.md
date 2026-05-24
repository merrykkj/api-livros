# 📚 Projeto Livros

Uma plataforma completa para leitores buscarem livros via API Open Library, gerenciarem perfis e registrarem avaliações literárias.

---

## 🚀 Funcionalidades Principais

* **Autenticação:** Cadastro e login de usuários.
* **Busca Global:** Integração com a API externa do Open Library.
* **Social:** Sistema de avaliações com notas e comentários.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Runtime:** Node.js
* **Framework:** Express
* **Banco de Dados:** SQLite (`sqlite3` & `sqlite`)

### Frontend
* **Framework:** Next.js
* **Estilização:** Tailwind CSS
* **Linguagem:** JavaScript Moderno (ES6+)

---

## 📁 Estrutura Estrutural

```text
projeto-livros/
├── app/                  # Frontend (Páginas, estilos e scripts)
└── backend/              # API RESTful
    ├── src/
    │   ├── config/       # Inicialização do SQLite (db.js)
    │   └── routes/       # Endpoints da aplicação
    ├── database.db       # Banco de dados local (gerado no primeiro boot)
    ├── server.js         # Ponto de entrada do servidor
    └── package.json      # Dependências e scripts
```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado (versão 18 ou superior recomendada)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   cd projeto-livros
   ```

2. **Configure o Backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *O servidor rodará por padrão na porta `3000` ou na definida nas suas variáveis de ambiente.*

4. **Acesse o Frontend:**
   Abra os arquivos da pasta `app/` diretamente no navegador ou utilize uma extensão como a *Live Server* no VS Code.
