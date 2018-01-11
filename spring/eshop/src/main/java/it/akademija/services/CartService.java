package it.akademija.services;

import it.akademija.models.Cart;
import it.akademija.models.Product;
import it.akademija.repositories.CartRepository;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;

    public Cart addCart(Cart cart) {
        if (cart == null) {
            throw new NullPointerException();
        }
        return cartRepository.save(cart);
    }

    public Cart findOne(Long id) {
        if (id < 0) {
            throw new RuntimeException();
        }
        return cartRepository.findOne(id);
    }

    public List<Cart> getAll() {
        return cartRepository.findAll();
    }


    public Collection<Product> getProducts(Long cart_id) {
        Cart cart = cartRepository.findOne(cart_id);
        return cart.getProductList();
    }

    public void delete(Cart cart) {
        cartRepository.delete(cart);
    }


    public void addProduct(Long product_id, Long cart_id) {

        Cart cart = cartRepository.findOne(cart_id);
        Product product = productRepository.findOne(product_id);
        if (cart == null || product == null) {
            throw new NullPointerException();
        }
        cart.addProduct(product);
    }

}