package com.example.demo.repository;

import com.example.demo.model.Banda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface BandaRepository extends JpaRepository<Banda, UUID> {

    Optional<Banda> findBandaByIdbanda(int idbanda);
}
