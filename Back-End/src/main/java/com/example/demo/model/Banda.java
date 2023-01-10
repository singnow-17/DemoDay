package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;

//Entity esta marcando que é uma entidade do banco
//Table referencia a nossa tabela

@Entity
@Table(schema = "banda")
public class Banda{

    @Id
    private int idbanda;

    private String nome_banda;

    private int numero_integrantes;

    private String email;

    private String senha;

    private String nome_responsavel;

    private String cpf_cnpj;

    private Date data_nasc;

    private String telefone;

    private boolean termos_de_uso;

    private String descricao;

    private Date data_cadastro;

    public int getIdbanda() {
        return idbanda;
    }

    public void setIdbanda(int idbanda) {
        this.idbanda = idbanda;
    }

    public String getNome_banda() {
        return nome_banda;
    }

    public void setNome_banda(String nome_banda) {
        this.nome_banda = nome_banda;
    }

    public int getNumero_integrantes() {
        return numero_integrantes;
    }

    public void setNumero_integrantes(int numero_integrantes) {
        this.numero_integrantes = numero_integrantes;
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

    public String getNome_responsavel() {
        return nome_responsavel;
    }

    public void setNome_responsavel(String nome_responsavel) {
        this.nome_responsavel = nome_responsavel;
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

