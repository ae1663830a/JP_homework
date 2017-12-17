package it.akademija.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "product")
public class Product implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "PRODUCT_ID")
    private int id;
    @Column(name = "TITLE")
    private String title;
    @Column(name = "PRICE", precision = 5, scale = 2)
    private double price;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "IMAGE")
    private String image;
    @Column(name = "QUANTITY")
    private int quantity;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
