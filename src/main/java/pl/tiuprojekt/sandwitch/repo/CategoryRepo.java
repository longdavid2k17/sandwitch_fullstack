package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.Category;

@RepositoryRestResource(collectionResourceRel = "categories",path = "categories")
public interface CategoryRepo extends CrudRepository<Category, Long>
{

}
