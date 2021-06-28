package pl.tiuprojekt.sandwitch.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.tiuprojekt.sandwitch.dto.Purchase;
import pl.tiuprojekt.sandwitch.dto.PurchaseResponse;
import pl.tiuprojekt.sandwitch.service.OrderService;

@RestController
@RequestMapping("/api/clientOrder")
public class OrderController {

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase)
    {
        PurchaseResponse purchaseResponse=orderService.placeOrder(purchase);
        return purchaseResponse;
    }
}
