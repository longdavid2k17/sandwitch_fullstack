package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.tiuprojekt.sandwitch.entity.Address;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "addresses",path = "addresses")
@CrossOrigin(origins = "http://localhost:4200")
public interface AddressRepo extends CrudRepository<Address, Long>
{
    Iterable<Address> findAll();
    Optional<Address> findById(Long id);
}
