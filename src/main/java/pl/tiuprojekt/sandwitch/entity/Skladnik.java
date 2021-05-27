package pl.tiuprojekt.sandwitch.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="skladniki")
@Getter
@Setter
public class Skladnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_skladniki")
    private Long id;
    @Column(name = "nazwa")
    private String nazwa;
    @ManyToOne
    @JoinColumn(name="id_produktu",nullable = false)
    private Produkt produkt;

}
