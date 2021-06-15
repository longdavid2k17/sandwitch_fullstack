package pl.tiuprojekt.sandwitch.repo;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.tiuprojekt.sandwitch.entity.Address;
import pl.tiuprojekt.sandwitch.entity.Order;
import pl.tiuprojekt.sandwitch.entity.OrderItem;
import pl.tiuprojekt.sandwitch.entity.User;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@SpringBootTest
public class OrderRepoTests {

    private final Logger log = LoggerFactory.getLogger(OrderRepoTests.class);
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private OrderItemRepo orderItemRepo;
    @Autowired
    private AddressRepo addressRepo;
    @Autowired
    private StateRepo stateRepo;
    @Autowired
    private UserRepo userRepo;

    @Test
    @Transactional
    public void insertAndCheckOrder()
    {

        Order order = new Order();
        Set<OrderItem> orderItems = new HashSet<>();
        Date date = new Date();

        if( !(Optional.of(orderItemRepo.findById(1L).get()).isPresent()))
        {
            OrderItem orderItem1 =new OrderItem();
            orderItem1.setQuantity(100);
            orderItem1.setUnit_price(1000);

        }else  orderItems.add(orderItemRepo.findById(1L).get());
        Address address = new Address();
        Optional<Address> addressOptional = addressRepo.findById(1L);
        if(!addressOptional.isPresent())
        {
            address.setState(stateRepo.findByName("Śląskie").get());
            address.setCity("Tarnowskie Góry");
            address.setStreet("Kwiatowa 5/2");
            address.setZip_code("42-606");
        }else address=addressOptional.get();


        order.setTotal_quantity(100);
        order.setStatus(true);
        order.setTotal_price(1000);
        order.setAddress(address);
        order.setOrderItems(orderItems);
        order.setUser(userRepo.findById(1L).get());
        order.setDate(date);
        order.setOrder_tracking_number("ewrwerwer234234erwer");
        order.setAddress_id(address.getId());


        Order orderSaved =orderRepo.save(order);

        log.info(orderSaved.getId()+" | "+orderSaved.getTotal_price()+" | "+orderSaved.getTotal_quantity()+
                " | "+orderSaved.getOrderItems()+" | "+orderSaved.getAddress()+" | "+orderSaved.getDate()+" | "+
                orderSaved.getOrder_tracking_number()+" | "+orderSaved.getUser()+" | ");

        log.info("Change Order");

        orderSaved.setStatus(false);
        orderSaved.setOrder_tracking_number("sdg43g34g34g43g43");
        orderSaved.setTotal_quantity(40);
        orderSaved.setTotal_price(400);

        log.info(orderSaved.getId()+" | "+orderSaved.getTotal_price()+" | "+orderSaved.getTotal_quantity()+
                " | "+orderSaved.getOrderItems()+" | "+orderSaved.getAddress()+" | "+orderSaved.getDate()+" | "+
                orderSaved.getOrder_tracking_number()+" | "+orderSaved.getUser()+" | ");
        Long orderId=orderSaved.getId();
        orderRepo.delete(orderSaved);
        log.info("Object deleted from repository");
        Optional<Order> serchByID = orderRepo.findById(orderId);
        log.info("Object not found. End of test!");

    }
}
