package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class DatabaseTest
{
    private Logger log = LoggerFactory.getLogger(DatabaseTest.class);

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
}
