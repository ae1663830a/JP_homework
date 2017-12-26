//package it.akademija.controllers;
//
//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
//import it.akademija.models.Cart;
//import it.akademija.models.Product;
//import it.akademija.repositories.CartRepository;
//import it.akademija.repositories.ProductRepository;
//import it.akademija.services.CartService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//
//@RestController
//@Api(value = "cart")
//@RequestMapping(value = "/api/cart")
//public class CartController {
//
//    @Autowired
//    private CartService cartService;
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    @Autowired
//    private CartRepository cartRepository;
//
//
//
//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    @ApiOperation(value = "Get carts", notes = "Returns all carts")
//    public List<Cart> getAll() {
//        return cartService.getAll();
//    }
//
//    @RequestMapping(value = "/{cart_id}/products", method = RequestMethod.GET)
//    @ApiOperation(value = "Get products in cart", notes = "Returns products in cart")
//    public List<Product> getProductsInCart(@PathVariable long cart_id) {
//        return cartService.getProducts(cart_id);
//    }
//
//
//    @RequestMapping(value = "/", method = RequestMethod.POST)
//    @ApiOperation(value = "Add cart", notes = "Returns added cart")
//    public Cart addCart(@RequestBody final Cart cart) {
//        return cartService.addCart(cart);
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public Cart getCart(@PathVariable final long id) {
//        return cartService.findOne(id);
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//    @ResponseStatus(HttpStatus.OK)
//    public void delete(@PathVariable final long id) {
//        Cart cart = cartService.findOne(id);
//        cartService.delete(cart);
//    }
//
//    @RequestMapping(value = "/add/{product_id}/to/{cart_id}", method = RequestMethod.POST)
//    public void addProduct(@PathVariable long product_id, @PathVariable long cart_id) {
//        cartService.addToCart(cart_id, product_id);
//    }
//
//
//}