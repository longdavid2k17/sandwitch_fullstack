package pl.tiuprojekt.sandwitch.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import pl.tiuprojekt.sandwitch.entity.*;

import javax.persistence.EntityManager;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer
{
    private EntityManager entityManager;

    public DataRestConfig(EntityManager entityManager)
    {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors)
    {
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};

        disableHttpMethods(Product.class,config,theUnsupportedActions);
        disableHttpMethods(Address.class,config,theUnsupportedActions);
        disableHttpMethods(Category.class,config,theUnsupportedActions);
        disableHttpMethods(Order.class,config,theUnsupportedActions);
        disableHttpMethods(OrderItem.class,config,theUnsupportedActions);
        disableHttpMethods(State.class,config,theUnsupportedActions);
        disableHttpMethods(User.class,config,theUnsupportedActions);
    }

    private void disableHttpMethods(Class theClass,RepositoryRestConfiguration config, HttpMethod[] unsuportedActions)
    {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)));

    }
}
