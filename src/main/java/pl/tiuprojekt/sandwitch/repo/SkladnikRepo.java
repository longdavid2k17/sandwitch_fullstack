package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.tiuprojekt.sandwitch.entity.Skladnik;


@Repository
public interface SkladnikRepo extends JpaRepository<Skladnik,Long> {
}
