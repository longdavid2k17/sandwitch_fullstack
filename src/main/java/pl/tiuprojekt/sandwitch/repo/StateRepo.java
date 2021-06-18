package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.tiuprojekt.sandwitch.entity.State;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "states",path = "states")
@CrossOrigin(origins = "http://localhost:4200")
public interface StateRepo extends CrudRepository<State,Long>
{
    Optional<State> findByName(String name);
    boolean existsByName(String name);
}
