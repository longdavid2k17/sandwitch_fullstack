package pl.tiuprojekt.sandwitch.service;

import org.springframework.stereotype.Service;
import pl.tiuprojekt.sandwitch.dto.Purchase;
import pl.tiuprojekt.sandwitch.dto.PurchaseResponse;
import pl.tiuprojekt.sandwitch.entity.Order;
import pl.tiuprojekt.sandwitch.entity.OrderItem;
import pl.tiuprojekt.sandwitch.entity.User;
import pl.tiuprojekt.sandwitch.repo.UserRepo;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;
@Service
public class OrderServiceImpl implements OrderService{
    private UserRepo userRepo;

    public OrderServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        Order order = purchase.getOrder();
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrder_tracking_number(orderTrackingNumber);
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));
        order.setAddress(purchase.getOrderAddress());
        User user = purchase.getCustomer();
        String theEmail = user.getEmail();
        User userDB = userRepo.findByEmail(theEmail);
        if(userDB!=null)
        {
            user=userDB;
        }
        user.add(order);
        userRepo.save(user);
        return new PurchaseResponse(orderTrackingNumber);
    }
}
