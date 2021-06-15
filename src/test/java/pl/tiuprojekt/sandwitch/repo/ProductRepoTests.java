package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Category;
import pl.tiuprojekt.sandwitch.entity.Product;

import javax.transaction.Transactional;

import java.util.Random;
import java.util.stream.StreamSupport;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ProductRepoTests
{
    private final Logger log = LoggerFactory.getLogger(ProductRepoTests.class);

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Test
    @Transactional
    public void insertAndCheckProduct()
    {
        Iterable<Category> categoryList = categoryRepo.findAll();

        Product product = new Product();
        product.setName("TestowyProdukt");
        product.setDescription("TestowyOpis");
        product.setUnit_price(22.22);
        product.setImgUrl("blank");
        product.setAvailable(true);
        if(StreamSupport.stream(categoryList.spliterator(), false).count()>0)
        product.setCategory(categoryList.iterator().next());
        log.info("product: "+product.getId()+" "+product.getName()+" "+product.getDescription()+" "+product.getUnit_price()+" "+product.getImgUrl()+" "+product.isAvailable());
        Product savedProduct = productRepo.save(product);

        assertThat(savedProduct.getId()).isNotEqualTo(null);
        assertThat(savedProduct.getName()).isEqualTo("TestowyProdukt");
        assertThat(savedProduct.getDescription()).isEqualTo("TestowyOpis");
        assertThat(savedProduct.getUnit_price()).isEqualTo(22.22);
        assertThat(savedProduct.isAvailable()).isTrue();
        assertThat(savedProduct.getCategory()).isEqualTo(product.getCategory());
        log.info("savedProduct: "+savedProduct.getId()+" "+savedProduct.getName()+" "+savedProduct.getDescription()+" "+savedProduct.getUnit_price()+" "+savedProduct.getImgUrl()+" "+savedProduct.isAvailable());

        productRepo.delete(savedProduct);
    }

    @Test
    @Transactional
    public void insertCheckAndUpdateCheckProduct()
    {
        Iterable<Category> categoryList = categoryRepo.findAll();

        Product product = new Product();
        product.setName("TestowyProdukt");
        product.setDescription("TestowyOpis");
        product.setUnit_price(22.22);
        product.setImgUrl("blank");
        product.setAvailable(true);
        if(StreamSupport.stream(categoryList.spliterator(), false).count()>0)
            product.setCategory(categoryList.iterator().next());
        log.info("product: "+product.getId()+" "+product.getCategory().getName()+" "+product.getName()+" "+product.getDescription()+" "+product.getUnit_price()+" "+product.getImgUrl()+" "+product.isAvailable());
        Product savedProduct = productRepo.save(product);

        assertThat(savedProduct.getId()).isNotEqualTo(null);
        assertThat(savedProduct.getName()).isEqualTo("TestowyProdukt");
        assertThat(savedProduct.getDescription()).isEqualTo("TestowyOpis");
        assertThat(savedProduct.getUnit_price()).isEqualTo(22.22);
        assertThat(savedProduct.isAvailable()).isTrue();
        assertThat(savedProduct.getCategory()).isEqualTo(product.getCategory());
        log.info("savedProduct: "+savedProduct.getId()+" "+savedProduct.getCategory().getName()+" "+savedProduct.getName()+" "+savedProduct.getDescription()+" "+savedProduct.getUnit_price()+" "+savedProduct.getImgUrl()+" "+savedProduct.isAvailable());

        savedProduct.setName(savedProduct.getName()+" ZMIANA");
        savedProduct.setName(savedProduct.getDescription()+" ZMIANA");
        savedProduct.setUnit_price(savedProduct.getUnit_price()+2);
        savedProduct.setAvailable(false);
        Product updatedProduct = productRepo.save(savedProduct);

        assertThat(updatedProduct.getId()).isEqualTo(savedProduct.getId());
        assertThat(updatedProduct.getName()).isEqualTo(savedProduct.getName());
        assertThat(updatedProduct.getDescription()).isEqualTo(savedProduct.getDescription());
        assertThat(updatedProduct.getUnit_price()).isEqualTo(savedProduct.getUnit_price());
        assertThat(updatedProduct.isAvailable()).isFalse();
        assertThat(updatedProduct.getCategory()).isEqualTo(product.getCategory());
        log.info("updatedProduct: "+updatedProduct.getId()+" "+updatedProduct.getCategory().getName()+""+updatedProduct.getName()+" "+updatedProduct.getDescription()+" "+updatedProduct.getUnit_price()+" "+updatedProduct.getImgUrl()+" "+updatedProduct.isAvailable());

        productRepo.delete(updatedProduct);
    }
}
