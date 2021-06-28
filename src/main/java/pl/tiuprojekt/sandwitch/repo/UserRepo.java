package pl.tiuprojekt.sandwitch.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.tiuprojekt.sandwitch.entity.User;

@RepositoryRestResource(collectionResourceRel = "users",path = "users")
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepo extends JpaRepository<User,Long>
{
    User findByEmail(String theEmail);
}
