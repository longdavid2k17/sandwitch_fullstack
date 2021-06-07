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

    @ManyToOne
    @JoinColumn(name="order_id",nullable = false)
    private Order order;

/*    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "order_items")
    private Set<Product> products;*/

}