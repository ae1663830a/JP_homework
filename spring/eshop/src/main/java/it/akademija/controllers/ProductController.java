package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.models.Product;
import it.akademija.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "product")
@RequestMapping
public class ProductController {

    @Autowired
    ProductService productService;


    @RequestMapping(method = RequestMethod.GET, value = "/api/products")
    @ApiOperation(value = "Get products", notes = "Returns products")
    public List<Product> productList() {
        return productService.getProducts();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/products")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create product", notes = "Creates a new product")
    public Product createProduct(@RequestBody final Product product) {
        return productService.createProduct(product);
    }

    @ApiOperation(value = "Find product", notes = "Finds product by id")
    @RequestMapping(method = RequestMethod.GET, value = "/api/products/{id}")
    public Product getProductById(@PathVariable final int id) {
        return productService.getProduct(id);
    }

    @ApiOperation(value = "Update product", notes = "Updates product details")
    @RequestMapping(method = RequestMethod.PUT, value = "/api/products/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @ApiOperation(value = "Delete product", notes = "Deletes product")
    @RequestMapping(method = RequestMethod.DELETE, value = "/api/products/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}