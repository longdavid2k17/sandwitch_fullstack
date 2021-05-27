package pl.tiuprojekt.sandwitch.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.tiuprojekt.sandwitch.entity.Produkt;

@Repository
public interface ProduktRepo extends JpaRepository<Produkt,Long> {
}
