package pl.tiuprojekt.sandwitch.entity;


import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="zamowienia")
@Getter
@Setter
public class Zamowienie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_zamowienia")
    private Long id;
    @ManyToOne
    @JoinColumn(name="id_uzytkownika",nullable = false)
    private Uzytkownik uzytkownik;

    @Column(name ="data_przyjecia")
    @CreationTimestamp
    private Date data_przyjecia;


    @ManyToMany
    @JoinTable(
            name = "zamowienie_produkty",
            joinColumns = @JoinColumn(name = "id_zamowienia"),
            inverseJoinColumns = @JoinColumn(name = "id_produktu"))
    Set<Produkt> produkty;

}
