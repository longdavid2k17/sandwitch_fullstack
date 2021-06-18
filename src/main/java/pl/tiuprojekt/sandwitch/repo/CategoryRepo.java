package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.tiuprojekt.sandwitch.entity.Category;
import pl.tiuprojekt.sandwitch.entity.State;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "categories",path = "categories")
@CrossOrigin(origins = "http://localhost:4200")
public interface CategoryRepo extends CrudRepository<Category, Long>
{
    Optional<Category> findByName(String name);
}
