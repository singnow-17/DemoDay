package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;


//Entity esta marcando que é uma entidade do banco
//Table referencia a nossa tabela

@Entity
@Table(schema = "parceiro")
public class Parceiro {
    @Id
    private int idparceiro;

    private String nome_empresa;
    private String nome_responsavel;
    private String email;
    private String senha;
    private String cnpj;
    private Date data_nasc;
    private String telefone;
    private boolean termos_de_uso;
    private String Cpf;
    private String descricao;
    private Date data_cadastro;

    public int getIdparceiro() {
        return idparceiro;
    }

    public void setIdparceiro(int idparceiro) {
        this.idparceiro = idparceiro;
    }

    public String getNome_empresa() {
        return nome_empresa;
    }

    public void setNome_empresa(String nome_empresa) {
        this.nome_empresa = nome_empresa;
    }

    public String getNome_responsavel() {
        return nome_responsavel;
    }

    public void setNome_responsavel(String nome_responsavel) {
        this.nome_responsavel = nome_responsavel;
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

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
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

    public String getCpf() {
        return Cpf;
    }

    public void setCpf(String Cpf) {
        this.Cpf = Cpf;
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
