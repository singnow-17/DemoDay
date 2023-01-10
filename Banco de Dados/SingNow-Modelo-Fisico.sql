CREATE DATABASE singnow;

USE singnow;

CREATE TABLE IF NOT EXISTS artista(
	idartista INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_artistico VARCHAR(125) NOT NULL,
    nome_completo VARCHAR(125) NOT NULL,
    email VARCHAR(125) NOT NULL,
    senha VARCHAR(120) NOT NULL,
    cpf_cnpj VARCHAR(15) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    numero_integrantes INT DEFAULT 1,
    termos_de_uso BOOLEAN,
    descricao TEXT,
    data_cadastro DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS banda(
	idbanda INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_banda VARCHAR(125) NOT NULL,
    numero_integrantes INT(11) NOT NULL,
    email VARCHAR(125) NOT NULL,
    senha VARCHAR(120) NOT NULL,
    nome_responsavel VARCHAR(125) NOT NULL,
    cpf_cnpj VARCHAR(15) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    termos_de_uso BOOLEAN,
    descricao TEXT,
    data_cadastro DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS parceiro(
	idparceiro INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome_empresa VARCHAR(125) NOT NULL,
    email VARCHAR(125) NOT NULL,
    senha VARCHAR(120) NOT NULL,
    cnpj VARCHAR(15) NOT NULL UNIQUE,
    nome_responsavel VARCHAR(125) NOT NULL,
    data_nasc DATE NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    cpf VARCHAR(12) NOT NULL UNIQUE,
    termos_de_uso BOOLEAN,
    descricao TEXT,
    data_cadastro DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS visitante(
	idvisitante INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome_visitante VARCHAR(125) NOT NULL,
    email VARCHAR(125) NOT NULL,
    senha VARCHAR(120) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco(
	idendereco INT(11) AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(125) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    numero INT(5) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    artistaId INT(11),
    bandaId INT(11),
    parceiroId INT(11),
    FOREIGN KEY(artistaId) REFERENCES artista (idartista) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(bandaId) REFERENCES banda (idbanda) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(parceiroId) REFERENCES parceiro (idparceiro) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS agenda(
	idagenda INT(11) AUTO_INCREMENT PRIMARY KEY,
    data_agenda DATE NOT NULL,
    hora_agenda TIME NOT NULL,
    artistaId INT(11),
    bandaId INT(11),
    parceiroId INT(11),
    FOREIGN KEY(artistaId) REFERENCES artista (idartista) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(bandaId) REFERENCES banda (idbanda) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(parceiroId) REFERENCES parceiro (idparceiro) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS genero(
	idgenero INT(11) AUTO_INCREMENT PRIMARY KEY,
    genero VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS genero_escolhido(
	idgeneroEscolhido INT(11) AUTO_INCREMENT PRIMARY KEY,
    generoId INT(11) NOT NULL,
    artistaId INT(11),
    bandaId INT(11),
    FOREIGN KEY(artistaId) REFERENCES artista (idartista) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(bandaId) REFERENCES banda (idbanda) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(generoId) REFERENCES genero (idGenero) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO genero (genero) VALUES('Afropop');
INSERT INTO genero (genero) VALUES('Axé');
INSERT INTO genero (genero) VALUES('Black Music');
INSERT INTO genero (genero) VALUES('Blues');
INSERT INTO genero (genero) VALUES('Bossa Nova');
INSERT INTO genero (genero) VALUES('Country');
INSERT INTO genero (genero) VALUES('Eletrônica');
INSERT INTO genero (genero) VALUES('Forró');
INSERT INTO genero (genero) VALUES('Funk');
INSERT INTO genero (genero) VALUES('Gospel');
INSERT INTO genero (genero) VALUES('Hip Hop');
INSERT INTO genero (genero) VALUES('Heavy Metal');
INSERT INTO genero (genero) VALUES('Jazz');
INSERT INTO genero (genero) VALUES('K-Pop');
INSERT INTO genero (genero) VALUES('Mambo');
INSERT INTO genero (genero) VALUES('Música Ambiente');
INSERT INTO genero (genero) VALUES('Música Clássica');
INSERT INTO genero (genero) VALUES('MPB');
INSERT INTO genero (genero) VALUES('Pagode');
INSERT INTO genero (genero) VALUES('Pop');
INSERT INTO genero (genero) VALUES('Punk');
INSERT INTO genero (genero) VALUES('Reggaeton');
INSERT INTO genero (genero) VALUES('Rap');
INSERT INTO genero (genero) VALUES('Reggae');
INSERT INTO genero (genero) VALUES('Rock Alternativo');
INSERT INTO genero (genero) VALUES('Rock');
INSERT INTO genero (genero) VALUES('Samba');
INSERT INTO genero (genero) VALUES('Samba Rock');
INSERT INTO genero (genero) VALUES('Sertanejo');
INSERT INTO genero (genero) VALUES('Trap');

