package com.example.demo.repository;

import com.example.demo.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ArtistaRepository extends JpaRepository<Artista, UUID>{
    Optional<Artista> findArtistaByIdartista(int idartista);
}
