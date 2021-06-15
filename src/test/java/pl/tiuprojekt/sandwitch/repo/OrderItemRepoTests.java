package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Category;
import pl.tiuprojekt.sandwitch.entity.Order;
import pl.tiuprojekt.sandwitch.entity.OrderItem;

import javax.transaction.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class OrderItemRepoTests {

    private final Logger log = LoggerFactory.getLogger(OrderItemRepoTests.class);

    @Autowired
    private OrderItemRepo orderItemRepo;
    @Autowired
    private  OrderRepo orderRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private AddressRepo addressRepo;

    @Test
    @Transactional
    public void insertAndCheckOrderItem()
    {
        OrderItem orderItem = new OrderItem();
        Set<OrderItem> orderItems = new HashSet<>();

       if( !(Optional.of(orderItemRepo.findById(1L).get()).isPresent()))
        {
            OrderItem orderItem1 =new OrderItem();
            orderItem1.setQuantity(100);
            orderItem1.setUnit_price(1000);


        }else  orderItems.add(orderItemRepo.findById(1L).get());

        Date date = new Date();
        Order orderN1 = new Order();
        Optional<Order> orderOptional = orderRepo.findById(1L);
        if(!orderOptional.isPresent()) {

            orderN1.setUser(userRepo.findById(1L).get());
            orderN1.setOrderItems(orderItems);
            orderN1.setAddress(addressRepo.findById(1L).get());
            orderN1.setDate(date);
            orderN1.setOrder_tracking_number("1345-14010fj13ifj1ifi12f1");
            orderN1.setStatus(true);
            orderN1.setTotal_price(500);
            orderN1.setTotal_quantity(50);
        }else  orderN1=orderOptional.get();
        Order orderN2=new Order();
        Optional<Order> orderOptional2 = orderRepo.findById(2L);
        if(!orderOptional2.isPresent()) {

            orderN2.setUser(userRepo.findById(1L).get());
            orderN2.setOrderItems(orderItems);
            orderN2.setAddress(addressRepo.findById(1L).get());
            orderN2.setDate(date);
            orderN2.setOrder_tracking_number("erper-23r23rp23[r23");
            orderN2.setStatus(true);
            orderN2.setTotal_price(1000);
            orderN2.setTotal_quantity(100);
        }else  orderN2=orderOptional2.get();


        orderItem.setUnit_price(100);
        orderItem.setQuantity(10);
        orderItem.setOrder(orderN1);
        orderItem.setProduct_id(1);


        OrderItem orderItemSaved = orderItemRepo.save(orderItem);
        log.info(orderItemSaved.getId()+" | "+orderItemSaved.getUnit_price()+" | "+orderItemSaved.getQuantity()+ " | " +orderItemSaved.getOrder());

        assertThat(orderItemSaved.getId()).isNotEqualTo(null);
        assertThat(orderItemSaved.getUnit_price()).isEqualTo(100);
        assertThat(orderItemSaved.getQuantity()).isEqualTo(10);

        log.info("Change order_item ");
        orderItemSaved.setQuantity(9);
        orderItemSaved.setUnit_price(90);
        orderItemSaved.setOrder(orderN2);
        orderItemSaved.setProduct_id(2);
        assertThat(orderItemSaved.getId()).isNotEqualTo(null);
        assertThat(orderItemSaved.getUnit_price()).isEqualTo(90);
        assertThat(orderItemSaved.getQuantity()).isEqualTo(9);
        log.info(orderItemSaved.getId()+" | "+orderItemSaved.getUnit_price()+" | "+orderItemSaved.getQuantity()+ " | " +orderItemSaved.getOrder());
        Long orderId=orderItemSaved.getId();
        orderItemRepo.delete(orderItemSaved);
        log.info("Object deleted from repository");
        Optional<OrderItem> serchByID = orderItemRepo.findById(orderId);
        log.info("Object not found. End of test!");

    }

}
