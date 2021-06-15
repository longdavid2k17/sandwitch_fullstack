package pl.tiuprojekt.sandwitch.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="order_item")
@Getter
@Setter
public class OrderItem
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_item")
    private Long id ;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "unit_price")
    private double unit_price;

    @Column(name = "product_id")
    private int product_id;

    @ManyToOne
    @JoinColumn(name="order_id",nullable = false)
    private Order order;
}
