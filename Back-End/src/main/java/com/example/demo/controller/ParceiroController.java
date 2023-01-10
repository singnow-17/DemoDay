package com.example.demo.controller;

import com.example.demo.model.Parceiro;
import com.example.demo.repository.ParceiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //Marca como controladora Rest ou como API
@RequestMapping("/parceiro") //URL base controladora

public class ParceiroController {

    @Autowired //Instância um novo objeto esse em especifico conecta com o banco de dados
    ParceiroRepository parceiroBd;

    @CrossOrigin
    @GetMapping("/todos")
    public List<Parceiro> todosParceiro(){
        return parceiroBd.findAll();
    }

    @RequestMapping(value = "buscar/id/{idparceiro}", method = RequestMethod.GET)
    public Optional<Parceiro> buscarPorid(@PathVariable int idparceiro){

        return parceiroBd.findParceiroByIdparceiro(idparceiro);
    }

    //Criar um novo registro
    @PostMapping("/criar")
    public String criar(@RequestBody Parceiro fazer){
        parceiroBd.save(fazer);
        return "Registro concluido com sucesso: " + fazer.getNome_empresa();
    }

    //Atualizar
    @PutMapping("atualizar/id/{idparceiro}")
    public Parceiro atualizarPorId(@PathVariable int idparceiro, @RequestBody Parceiro art){
        Parceiro parceiro = parceiroBd.findParceiroByIdparceiro(idparceiro).get();

        parceiro.setNome_responsavel(art.getNome_responsavel());
        parceiro.setNome_empresa(art.getNome_empresa());
        parceiro.setDescricao(art.getDescricao());
        parceiro.setTelefone(art.getTelefone());
        parceiro.setSenha(art.getSenha());
        parceiro.setEmail(art.getEmail());
        parceiro.setCpf(art.getCpf());

        parceiroBd.save(parceiro);

        return parceiro;
    }

    //Deletar
    @DeleteMapping("/apagar/id/{idparceiro}")
    public String deletarPorId(@PathVariable int idparceiro){
        Parceiro parceiro = parceiroBd.findParceiroByIdparceiro(idparceiro).get();
        parceiroBd.delete(parceiro);
        return "Registro apagado com sucesso";
    }
}
