package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.State;

import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class StateRepoTests
{
    private final Logger log = LoggerFactory.getLogger(StateRepoTests.class);

    @Autowired
    private StateRepo stateRepo;

    @Test
    @Transactional
    public void insertAndCheckState()
    {
        State state = new State();
        state.setName("tarnogórski");
        State savedState = stateRepo.save(state);

        log.info(savedState.getId()+" "+savedState.getName()+" "+savedState.getAddressList());
        assertThat(savedState.getId()).isNotEqualTo(null);
        assertThat(savedState.getName()).isEqualTo("tarnogórski");
        stateRepo.delete(savedState);
        log.info("Object deleted from repository");

        Optional<State> searchByName = stateRepo.findByName("tarnogórski");
        assertThat(searchByName.isPresent()).isFalse();
        log.info("Object not found. End of test!");
    }

    @Test
    @Transactional
    public void insertUpdateAndCheckState()
    {
        State state = new State();
        state.setName("częstochowski");
        State savedState = stateRepo.save(state);

        log.info(savedState.getId()+" "+savedState.getName()+" "+savedState.getAddressList());
        assertThat(savedState.getId()).isNotEqualTo(null);
        assertThat(savedState.getName()).isEqualTo("częstochowski");
        savedState.setName("ChangedCzęstochowski");
        State changedState = stateRepo.save(savedState);

        log.info(changedState.getId()+" "+changedState.getName()+" "+changedState.getAddressList());
        assertThat(changedState.getId()).isEqualTo(savedState.getId());
        assertThat(changedState.getName()).isEqualTo("ChangedCzęstochowski");
        stateRepo.delete(changedState);
        log.info("Object deleted from repository");

        Optional<State> searchByName = stateRepo.findByName("ChangedCzęstochowski");
        assertThat(searchByName.isPresent()).isFalse();
        log.info("Object not found. End of test!");
    }
}
