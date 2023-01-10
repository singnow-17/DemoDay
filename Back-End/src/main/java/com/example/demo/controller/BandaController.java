package com.example.demo.controller;

import com.example.demo.model.Banda;
import com.example.demo.repository.BandaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //Marca como controladora Rest ou como API
@RequestMapping("/banda") //URL base controladora
public class BandaController {

    @Autowired //Instância um novo objeto esse em especifico conecta com o banco de dados
    BandaRepository bandaBd;

    @CrossOrigin
    @GetMapping("/todos")
    public List<Banda> todasBandas(){
        return bandaBd.findAll();
    }

    //Encontra um único elemento por id
    @RequestMapping(value = "buscar/id/{idbanda}", method = RequestMethod.GET)
    public Optional<Banda> buscarPorid(@PathVariable int idbanda){

        return bandaBd.findBandaByIdbanda(idbanda);
    }

    //Criar um novo registro
    @PostMapping("/criar")
    public String criar(@RequestBody Banda fazer){
        bandaBd.save(fazer);
        return "Registro concluido com sucesso: " + fazer.getNome_banda();
    }


    //Atualizar
    @PutMapping("atualizar/id/{idbanda}")
    public Banda atualizarPorId(@PathVariable int idbanda, @RequestBody Banda bda){
        Banda banda = bandaBd.findBandaByIdbanda(idbanda).get();

        banda.setNome_banda(bda.getNome_banda());
        banda.setNumero_integrantes(bda.getNumero_integrantes());
        banda.setNome_responsavel(bda.getNome_responsavel());
        banda.setCpf_cnpj(bda.getCpf_cnpj());
        banda.setEmail(bda.getEmail());
        banda.setDescricao(bda.getDescricao());
        banda.setTelefone(bda.getTelefone());
        banda.setSenha(bda.getSenha());

        bandaBd.save(banda);

        return banda;
    }

    //Deletar
    @DeleteMapping("/apagar/id/{idbanda}")
    public String deletarPorId(@PathVariable int idbanda){
        Banda banda = bandaBd.findBandaByIdbanda(idbanda).get();
        bandaBd.delete(banda);
        return "Registro apagado com sucesso";
    }
}
