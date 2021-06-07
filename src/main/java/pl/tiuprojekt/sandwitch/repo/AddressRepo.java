package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.Address;

@RepositoryRestResource(collectionResourceRel = "addresses",path = "addresses")
public interface AddressRepo extends CrudRepository<Address, Long>
{

}
