package pl.tiuprojekt.sandwitch.entity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="produkty")
@Getter
@Setter
public class Produkt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_produkty")
    private Long id;
    @Column(name="nazwa")
    private String nazwa;
    @Column(name="opis")
    private String opis;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "produkt")
    private Set<Skladnik> skladniki;

    @ManyToMany(mappedBy = "produkty")
    Set<Zamowienie> zamownienie;


}
