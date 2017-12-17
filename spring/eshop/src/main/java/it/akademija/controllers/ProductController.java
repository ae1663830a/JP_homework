package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.models.Product;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "product")
@RequestMapping
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/api/products")
    @ApiOperation(value = "Get products", notes="Returns products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/products")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create product", notes = "Creates a new product")
    public Product create(@RequestBody final Product product) {
        return productRepository.save(product);
    }

    @ApiOperation(value = "Find product", notes = "Finds product by id")
    @RequestMapping(method = RequestMethod.GET, value = "/api/products/{id}")
    public Product getProduct(@PathVariable final int id) {
        return productRepository.findOne(id);
    }

    @ApiOperation(value = "Update product", notes = "Updates product details")
    @RequestMapping(method = RequestMethod.PUT, value = "/api/products/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product oldProduct = productRepository.findOne(id);
        if (oldProduct == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(product, oldProduct);
        return productRepository.save(product);
    }

    @ApiOperation(value = "Delete product", notes = "Deletes product")
    @RequestMapping(method = RequestMethod.DELETE, value = "/api/products/{id}")
    public Product deleteProduct(@PathVariable int id) {
        productRepository.delete(productRepository.findOne(id));
        return productRepository.findOne(id);
    }

}