package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.OrderItem;

@RepositoryRestResource(collectionResourceRel = "order_items",path = "order_items")
public interface OrderItemRepo extends CrudRepository<OrderItem,Long>
{

}
