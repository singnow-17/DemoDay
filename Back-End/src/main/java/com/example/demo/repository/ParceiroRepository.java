package com.example.demo.repository;
import com.example.demo.model.Artista;
import com.example.demo.model.Parceiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ParceiroRepository extends JpaRepository<Parceiro, UUID>{
    Optional<Parceiro> findParceiroByIdparceiro(int idparceiro);
}
