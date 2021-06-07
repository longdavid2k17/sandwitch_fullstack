package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.Product;

@RepositoryRestResource(collectionResourceRel = "products",path = "products")
public interface ProductRepo extends CrudRepository<Product,Long>
{

}
