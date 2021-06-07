package pl.tiuprojekt.sandwitch.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.tiuprojekt.sandwitch.entity.Uzytkownik;

@Repository
public interface UzytkownikRepo extends JpaRepository<Uzytkownik,Long> {
}
