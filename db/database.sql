/* Para crear la db ejecutar las siguientes instrucciones sql
        una vez creada la db, para poder establecer la conexion entre la db y nuestro ejercicio sera necesario tener mysql2
        npm i mysql2
*/
CREATE DATABASE IF NOT EXISTS act1_AMuchacho;

use act1_AMuchacho;

CREATE TABLE autores(
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(100) NOT NULL,
    `nacionalidad` VARCHAR(100) NOT NULL,
    `sexo` VARCHAR(20) NOT NULL
);

CREATE TABLE libros (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(100) NOT NULL,
    `autor_id` INT NOT NULL, 
    `genero` VARCHAR(100) NOT NULL,
    `paginas` INT NOT NULL,
    `saga` VARCHAR(100) NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES `autores`(id) 
);

Show tables;

describe autores;

describe libros;

-- Insertar registros en la tabla autores
INSERT INTO autores (nombre, nacionalidad, sexo) VALUES
    ('Gabriel García Márquez', 'Colombia', 'Masculino'),
    ('Isabel Allende', 'Chile', 'Femenino'),
    ('J. K. Rowling', 'Reino Unido', 'Femenino');

-- Insertar registros en la tabla libros
INSERT INTO libros (titulo, autor_id, genero, paginas, saga) VALUES
    ('Cien años de soledad', 1, 'Realismo mágico', 421, 'No aplica'), 
    ('La casa de los espíritus', 2, 'Realismo mágico', 512, 'Saga de los Trueba'),
    ('Harry Potter y la piedra filosofal', 3, 'Ficcion', 285, 'Harry Potter Libro 1/7'),
    ('Harry Potter y la camara secreta', 3, 'Ficcion', 322, 'Harry Potter Libro 2/7'),
    ('Harry Potter y el prisionero de Azkaban', 3, 'Ficcion', 394, 'Harry Potter Libro 3/7');