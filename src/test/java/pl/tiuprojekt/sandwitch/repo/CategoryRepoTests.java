package pl.tiuprojekt.sandwitch.repo;


import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Category;
import pl.tiuprojekt.sandwitch.entity.Product;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@SpringBootTest
public class CategoryRepoTests {

    private final Logger log = LoggerFactory.getLogger(CategoryRepoTests.class);

    @Autowired
    private CategoryRepo categoryRepo;
    @Autowired
    private ProductRepo productRepo;

    @Test
    @Transactional
    public void insertAndCheckCategory() {
        Category category = new Category();
        Set<Product> products = new HashSet<>();
        Optional<Product> product1 = productRepo.findById(1L);

        if (!product1.isPresent()) {
            Product productN1 = new Product();
            productN1.setName("Hamburger");
            productN1.setAvailable(true);
            productN1.setUnit_price(10);
            productN1.setDescription("Opis produktu");
            products.add(productN1);
        } else products.add(product1.get());
        Optional<Product> product2 = productRepo.findById(2L);
        if (!product1.isPresent()) {
            Product productN2 = new Product();
            productN2.setName("Chessburger");
            productN2.setAvailable(true);
            productN2.setUnit_price(10);
            productN2.setDescription("Opis produktu");
            products.add(productN2);
        } else products.add(product2.get());

        category.setName("fast-food");
        category.setProduct(products);
        Category categorySaved = categoryRepo.save(category);
        log.info(categorySaved.getId()+" | "+ categorySaved.getName()+" | "+categorySaved.getProduct() );

        assertThat(categorySaved.getId()).isNotEqualTo(null);
        assertThat(categorySaved.getName()).isEqualTo("fast-food");
        assertThat(categorySaved.getProduct()).isEqualTo(products);
        log.info("Change category name");
        categorySaved.setName("Burgers");
        log.info(categorySaved.getId()+" | "+ categorySaved.getName()+" | "+categorySaved.getProduct() );
        assertThat(categorySaved.getName()).isEqualTo("Burgers");

        categoryRepo.delete(categorySaved);
        log.info("Object deleted from repository");

        Optional<Category> serchByName = categoryRepo.findByName("fast-food");
        log.info("Object not found. End of test!");
    }

}
