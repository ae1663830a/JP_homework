//package it.akademija.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "Cart")
//public class Cart {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//
//    @OneToOne(mappedBy = "cart", cascade = CascadeType.ALL)
//    @JsonIgnore
//    private User user;
//
//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "products_cart",
//    joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
//    inverseJoinColumns = @JoinColumn(name = "cart_id", referencedColumnName = "id"))
//    private List<Product> productList;
//
//    public Cart() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public List<Product> getProductList() {
//        return productList;
//    }
//
//    public void setProductList(List<Product> productList) {
//        this.productList = productList;
//    }
//}
