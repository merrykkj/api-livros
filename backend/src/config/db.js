import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function iniciarBanco() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });
    
    await db.get("PRAGMA foreign_keys = ON");
    
    await db.exec(`
        CREATE TABLE IF NOT EXISTS livros (
            id_open_library TEXT PRIMARY KEY,
            titulo TEXT NOT NULL,
            autor TEXT,               
            ano_publicacao INTEGER,
            descricao TEXT,
            imagem_capa TEXT,
            edicao_livro TEXT,        
            formato_livro TEXT        
        );

        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_sistema TEXT NOT NULL,
            nome_usuario TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,          
            senha TEXT NOT NULL, 
            telefone TEXT NOT NULL UNIQUE,
            data_nascimento TEXT,                
            foto_perfil TEXT,                    
            biografia TEXT                       
        );

        CREATE TABLE IF NOT EXISTS avaliacoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_livro TEXT NOT NULL,
            id_usuario INTEGER NOT NULL,
            nota INTEGER NOT NULL CHECK(nota >= 1 AND nota <= 5),
            comentario TEXT,
            contem_spoiler INTEGER DEFAULT 0,
            data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_livro) REFERENCES livros(id_open_library) ON DELETE CASCADE,
            FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
        );
    `);

    return db;
}