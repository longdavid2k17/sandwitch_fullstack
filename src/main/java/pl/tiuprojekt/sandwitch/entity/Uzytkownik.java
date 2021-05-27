package pl.tiuprojekt.sandwitch.entity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="uzytkownicy")
@Getter
@Setter
public class Uzytkownik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_uzytkownik")
    private Long id ;
    @Column(name = "imie")
    private String imie;
    @Column(name = "nazwisko")
    private String nazwisko;
    @Column(name = "adres_linia1")
    private String adres_linia1;
    @Column(name = "adres_linia2")
    private String adres2_linia2;
    @Column(name = "kod_pocztowy")
    private String kod_pocztowy;
    @Column(name = "miasto")
    private String miasto;
    @Column(name = "numer_telefonu")
    private int numer_telefonu;
    @Column(name = "adres_email")
    private String adres_email;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "uzytkownik")
    private Set<Zamowienie> zamowienia;
}
