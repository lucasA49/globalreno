-- Créer la base de données
CREATE DATABASE IF NOT EXISTS globalreno_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE globalreno_db;

-- Table des utilisateurs (admins)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des articles
CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  contenu TEXT NOT NULL,
  image_url VARCHAR(500),
  categorie VARCHAR(100),
  status ENUM('brouillon', 'publie') DEFAULT 'brouillon',
  auteur_id INT NOT NULL,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (auteur_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insérer un admin par défaut (mot de passe: admin123)
INSERT INTO users (username, email, password) VALUES 
('admin', 'admin@globalreno.com', '$2a$10$rZ7qH9X8yJxH5bZJ0J6qHOQJ0pZ5X7Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Zm');