package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;


//Entity esta marcando que é uma entidade do banco
//Table referencia a nossa tabela

@Entity
@Table(schema = "artista")
public class Artista {

    @Id
    private int idartista;

    private String nome_artistico;
    private String nome_completo;
    private String email;
    private String senha;
    private String cpf_cnpj;
    private Date data_nasc;
    private String telefone;
    private int numero_integrantes;
    private boolean termos_de_uso;
    private String descricao;
    private Date data_cadastro;

    public int getIdartista() {
        return idartista;
    }

    public void setIdartista(int idartista) {
        this.idartista = idartista;
    }

    public String getNome_artistico() {
        return nome_artistico;
    }

    public void setNome_artistico(String nome_artistico) {
        this.nome_artistico = nome_artistico;
    }

    public String getNome_completo() {
        return nome_completo;
    }

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf_cnpj() {
        return cpf_cnpj;
    }

    public void setCpf_cnpj(String cpf_cnpj) {
        this.cpf_cnpj = cpf_cnpj;
    }

    public Date getData_nasc() {
        return data_nasc;
    }

    public void setData_nasc(Date data_nasc) {
        this.data_nasc = data_nasc;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public int getNumero_integrantes() {
        return numero_integrantes;
    }

    public void setNumero_integrantes(int numero_integrantes) {
        this.numero_integrantes = numero_integrantes;
    }

    public boolean isTermos_de_uso() {
        return termos_de_uso;
    }

    public void setTermos_de_uso(boolean termos_de_uso) {
        this.termos_de_uso = termos_de_uso;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getData_cadastro() {
        return data_cadastro;
    }

    public void setData_cadastro(Date data_cadastro) {
        this.data_cadastro = data_cadastro;
    }
}

