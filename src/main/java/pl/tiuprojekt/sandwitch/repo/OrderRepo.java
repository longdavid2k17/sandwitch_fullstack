package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.Order;

@RepositoryRestResource(collectionResourceRel = "orders",path = "orders")
public interface OrderRepo extends CrudRepository<Order,Long>
{

}
