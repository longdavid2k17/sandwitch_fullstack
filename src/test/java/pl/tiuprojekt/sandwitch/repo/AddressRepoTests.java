package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Address;
import pl.tiuprojekt.sandwitch.entity.State;

import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class AddressRepoTests
{
    private final Logger log = LoggerFactory.getLogger(AddressRepoTests.class);

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private StateRepo stateRepo;

    @Test
    @Transactional
    public void insertAndCheckForAddresses()
    {
        Address address = new Address();
        address.setCity("Warszawa");
        address.setStreet("Bytomska 122/2/6");
        address.setZip_code("41-940");
        Optional<State> stateOptional = stateRepo.findByName("Mazowieckie");
        stateOptional.ifPresent(address::setState);
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

    @Test
    @Transactional
    public void insertCheckAndChangeCheckAddress()
    {
        Address address = new Address();
        address.setCity("Katowice");
        address.setStreet("Krasińskiego 55");
        address.setZip_code("40-100");

        Optional<State> stateOptional = stateRepo.findByName("Śląskie");
        if(stateOptional.isPresent())
        {
            address.setState(stateOptional.get());
        }
        Address savedAddress = addressRepo.save(address);
        log.info("SavedAddress: "+savedAddress.getId()+" "+savedAddress.getCity()+" "+savedAddress.getZip_code()+" "+savedAddress.getStreet()+" "+savedAddress.getState().getName());

        assertThat(savedAddress.getCity().equals("Katowice"));
        assertThat(savedAddress.getStreet().equals("Krasińskiego 55"));
        assertThat(savedAddress.getZip_code().equals("40-100"));
        stateOptional.ifPresent(state -> assertThat(savedAddress.getState()).isEqualTo(state));

        savedAddress.setStreet("Warszawska 69");
        Address changedAddress = addressRepo.save(savedAddress);

        assertThat(changedAddress.getId().equals(savedAddress.getId()));
        assertThat(changedAddress.getCity().equals(savedAddress.getCity()));
        assertThat(changedAddress.getStreet().equals(savedAddress.getStreet()));
        assertThat(changedAddress.getZip_code().equals(savedAddress.getZip_code()));
        log.info("SavedAddress: "+changedAddress.getId()+" "+changedAddress.getCity()+" "+changedAddress.getZip_code()+" "+changedAddress.getStreet()+" "+changedAddress.getState().getName());
        stateOptional.ifPresent(state -> assertThat(changedAddress.getState()).isEqualTo(savedAddress.getState()));
        addressRepo.delete(changedAddress);
    }
}
