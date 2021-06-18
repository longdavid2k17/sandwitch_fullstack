package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.tiuprojekt.sandwitch.entity.Order;

@RepositoryRestResource(collectionResourceRel = "orders",path = "orders")
@CrossOrigin(origins = "http://localhost:4200")
public interface OrderRepo extends CrudRepository<Order,Long>
{

}
