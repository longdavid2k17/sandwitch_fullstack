package pl.tiuprojekt.sandwitch.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.tiuprojekt.sandwitch.entity.Zamowienie;

@Repository
public interface ZamowienieRepo extends JpaRepository<Zamowienie,Long> {
}
