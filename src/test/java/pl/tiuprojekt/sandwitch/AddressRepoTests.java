package pl.tiuprojekt.sandwitch;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Address;
import pl.tiuprojekt.sandwitch.entity.State;
import pl.tiuprojekt.sandwitch.repo.AddressRepo;
import pl.tiuprojekt.sandwitch.repo.StateRepo;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class AddressRepoTests
{
    private Logger log = LoggerFactory.getLogger(AddressRepoTests.class);

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private StateRepo stateRepo;

    @Autowired
    private DataSource dataSource;

    @Test
    public void testConnectionDb() throws SQLException
    {
        try (Connection connection = dataSource.getConnection())
        {
            assertThat(connection.getCatalog()).isEqualTo("sandwitchdatabase");
            log.info("catalog:" + connection.getCatalog());
            assertThat(connection.getTransactionIsolation()).isEqualTo(4);
            log.info("isolation_level:" + connection.getTransactionIsolation());
        }
    }

    @Test
    public void insertAndCheckForAddresses()
    {
        Address address = new Address();
        address.setCity("Warszawa");
        address.setStreet("Bytomska 122/2/6");
        address.setZip_code("41-940");
        Optional<State> stateOptional = stateRepo.findByName("Mazowieckie");
        if(stateOptional.isPresent())
        {
            address.setState(stateOptional.get());
        }
        Address savedAddress = addressRepo.save(address);

        assertThat(savedAddress.getCity().equals("Warszawa"));
        assertThat(savedAddress.getStreet().equals("Bytomska 122/2/6"));
        assertThat(savedAddress.getZip_code().equals("41-940"));
        assertThat(savedAddress.getState().getId().equals(stateOptional.get().getId()));

        Optional<State> stateOptionalSilesian = stateRepo.findByName("Śląskie");
        if(stateOptionalSilesian.isPresent())
        {
            String stateName = stateOptionalSilesian.get().getName();
            assertThat(stateName).isEqualTo("Śląskie");
        }
    }
}
