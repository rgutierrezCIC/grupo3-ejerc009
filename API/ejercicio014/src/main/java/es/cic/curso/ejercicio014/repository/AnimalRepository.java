package es.cic.curso.ejercicio014.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import es.cic.curso.ejercicio014.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
}