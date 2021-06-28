package pl.tiuprojekt.sandwitch.service;

import pl.tiuprojekt.sandwitch.dto.Purchase;
import pl.tiuprojekt.sandwitch.dto.PurchaseResponse;

public interface OrderService {
    PurchaseResponse placeOrder(Purchase purchase);
}
