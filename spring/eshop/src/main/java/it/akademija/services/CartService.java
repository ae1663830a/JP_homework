package it.akademija.services;

import it.akademija.models.Cart;
import it.akademija.models.Product;
import it.akademija.repositories.CartRepository;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Cart findOne(long id) {
        if (id < 0) {
            throw new RuntimeException();
        }
        return cartRepository.findOne(id);
    }

    public List<Cart> getAll() {
        return cartRepository.findAll();
    }


    public List<Product> getProducts(long cart_id) {
        Cart cart = cartRepository.findOne(cart_id);
        return cart.getProductList();
    }

    public void delete(Cart cart) {
        cartRepository.delete(cart);
    }


    public void addProduct(long product_id, long cart_id) {

        Cart cart = cartRepository.findOne(cart_id);

        if (cart == null) {
            throw new NullPointerException();
        }
        cart.getProductList().add(productRepository.findOne(product_id));

    }

    public void addToCart(long cart_id, long product_id) {
        Cart cart = cartRepository.findOne(cart_id);
        Product product = productRepository.findOne(product_id);
        if (cart == null || product == null) {
            throw new NullPointerException();
        }
        cart.getProductList().add(product);

    }
}