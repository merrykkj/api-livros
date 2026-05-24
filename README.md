# 📚 API Livros & Avaliações

Uma plataforma Full Stack que conecta leitores ao vasto universo da **Open Library**. Os usuários podem explorar livros, gerenciar seus perfis e registrar experiências literárias através de avaliações detalhadas.

---

## 🚀 Funcionalidades Principais

* **🔐 Autenticação Segura:** Sistema de cadastro e login de usuários com proteção de dados.
* **🌍 Integração com Open Library:** Busca global de livros consumindo API externa em tempo real.
* **⭐ Sistema de Social Learning:** Registro de avaliações, notas e comentários sobre as leituras.
* **🛡️ Segurança:** Implementação de variáveis de ambiente para proteção de chaves e configurações.

---

## 🛠️ Tecnologias Utilizadas

### **Backend**
* **Runtime:** Node.js
* **Framework:** Express
* **Banco de Dados:** SQLite (persistência de dados local com `sqlite3`)
* **Segurança:** CORS e Variáveis de Ambiente (`dotenv`)

### **Frontend** (Em desenvolvimento)
* **Framework:** Next.js
* **Estilização:** Tailwind CSS
* **Linguagem:** JavaScript Moderno (ES6+)

---

## 📁 Estrutura do Projeto

```text
api-livros/
├── backend/               # API RESTful (Node.js + Express)
│   ├── src/
│   │   ├── config/        # Conexão com Banco de Dados (db.js)
│   │   ├── controllers/   # Lógica de negócio
│   │   ├── models/        # Estrutura dos dados
│   │   └── routes/        # Endpoints da aplicação
│   ├── .env.example       # Exemplo de variáveis de ambiente
│   ├── server.js          # Ponto de entrada (Boot do Servidor)
│   └── database.db        # Banco de dados SQLite (gerado automaticamente)
└── frontend/              # Interface do Usuário (Next.js)
