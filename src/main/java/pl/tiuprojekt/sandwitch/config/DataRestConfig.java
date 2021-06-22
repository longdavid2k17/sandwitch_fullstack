package pl.tiuprojekt.sandwitch.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import pl.tiuprojekt.sandwitch.entity.*;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
       // HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};
        /*HttpMethod[] theUnsupportedActions = {HttpMethod.PATCH};

        disableHttpMethods(Product.class,config,theUnsupportedActions);
        disableHttpMethods(Address.class,config,theUnsupportedActions);
        disableHttpMethods(Category.class,config,theUnsupportedActions);
        disableHttpMethods(Order.class,config,theUnsupportedActions);
        disableHttpMethods(OrderItem.class,config,theUnsupportedActions);
        disableHttpMethods(State.class,config,theUnsupportedActions);
        disableHttpMethods(User.class,config,theUnsupportedActions);*/
        exposeIds(config);
    }

    private void disableHttpMethods(Class theClass,RepositoryRestConfiguration config, HttpMethod[] unsuportedActions)
    {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)));

    }

    private void exposeIds(RepositoryRestConfiguration configuration)
    {
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        List<Class> entityClasses = new ArrayList<>();

        for(EntityType entityType : entities)
        {
            entityClasses.add(entityType.getJavaType());
        }

        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        configuration.exposeIdsFor(domainTypes);
    }

}
