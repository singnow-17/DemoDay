package com.example.demo.controller;

import com.example.demo.model.Artista;
import com.example.demo.repository.ArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //Marca como controladora Rest ou como API
@RequestMapping("/artista") //URL base controladora
public class ArtistaController {

    @Autowired //Instância um novo objeto esse em especifico conecta com o banco de dados
    ArtistaRepository artistaBd;

    @CrossOrigin
    @GetMapping("/todos")
    public List<Artista> todosArtistas(){
        return artistaBd.findAll();
    }

    //Encontra um único elemento por id
    @RequestMapping(value = "buscar/id/{idartista}", method = RequestMethod.GET)
    public Optional<Artista> buscarPorid(@PathVariable int idartista){

        return artistaBd.findArtistaByIdartista(idartista);
    }

    //Criar um novo registro
    @PostMapping("/criar")
    public String criar(@RequestBody Artista fazer){
        artistaBd.save(fazer);
        return "Registro concluido com sucesso: " + fazer.getNome_artistico();
    }


    //Atualizar
    @PutMapping("atualizar/id/{idartista}")
    public Artista atualizarPorId(@PathVariable int idartista, @RequestBody Artista art){
        Artista artista = artistaBd.findArtistaByIdartista(idartista).get();

        artista.setNome_artistico(art.getNome_artistico());
        artista.setNome_completo(art.getNome_completo());
        artista.setDescricao(art.getDescricao());
        artista.setTelefone(art.getTelefone());
        artista.setSenha(art.getSenha());

        artistaBd.save(artista);
        return artista;
    }

    //Deletar
    @DeleteMapping("/apagar/id/{idartista}")
    public String deletarPorId(@PathVariable int idartista){
        Artista artista = artistaBd.findArtistaByIdartista(idartista).get();
        artistaBd.delete(artista);
        return "Registro apagado com sucesso";
    }
}
