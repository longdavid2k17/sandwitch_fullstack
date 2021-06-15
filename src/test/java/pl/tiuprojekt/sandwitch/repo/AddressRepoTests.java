package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Address;
import pl.tiuprojekt.sandwitch.entity.State;

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
