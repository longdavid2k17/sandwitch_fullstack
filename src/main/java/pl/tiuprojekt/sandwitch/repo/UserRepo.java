package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.tiuprojekt.sandwitch.entity.User;

@RepositoryRestResource(collectionResourceRel = "users",path = "users")
public interface UserRepo extends CrudRepository<User,Long>
{

}
