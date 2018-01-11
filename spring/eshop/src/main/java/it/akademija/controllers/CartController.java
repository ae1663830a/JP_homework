package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.models.Cart;
import it.akademija.models.Product;
import it.akademija.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;


@RestController
@Api(value = "cart")
@RequestMapping(value = "/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping(value = "/")
    @ApiOperation(value = "Get carts", notes = "Returns all carts")
    public List<Cart> getAll() {
        return cartService.getAll();
    }

    @GetMapping(value = "/{cart_id}/products")
    @ApiOperation(value = "Get products in cart", notes = "Returns products in cart")
    public Collection<Product> getProductsInCart(@PathVariable final Long cart_id) {
        return cartService.getProducts(cart_id);
    }

    @PostMapping(value = "/")
    @ApiOperation(value = "Add cart", notes = "Returns added cart")
    public Cart addCart(@RequestBody final Cart cart) {
        return cartService.addCart(cart);
    }

    @GetMapping(value = "/{id}")
    public Cart getCart(@PathVariable final Long id) {
        return cartService.findOne(id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable final Long id) {
        Cart cart = cartService.findOne(id);
        cartService.delete(cart);
    }

    @PostMapping(value = "/add/{product_id}/to/{cart_id}")
    public void addProduct(@PathVariable final Long product_id, @PathVariable final Long cart_id) {
        cartService.addProduct(cart_id, product_id);
    }
}