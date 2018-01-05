package it.akademija.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "product")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "PRODUCT_ID")
    private long id;
    //    @NaturalId
    @Column(name = "TITLE")
    private String title;
    @Column(name = "PRICE")
    private double price;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "IMAGE")
    private String image;
    @Column(name = "QUANTITY")
    private int quantity;

//    @ManyToMany(mappedBy = "products")
//    @JsonIgnore
//    private List<Cart> carts;


    @ManyToMany
    @JoinTable(
            name = "cart",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnore
    private List<User> userList;

    public Product() {
    }

    public Product(String title, double price) {
        this.title = title;
        this.price = price;
    }

    public Product(String title, double price, String description, String image, int quantity) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
    }
//
//    public List<Cart> getCarts() {
//        return carts;
//    }
//
//    public void setCarts(List<Cart> carts) {
//        this.carts = carts;
//    }


    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

