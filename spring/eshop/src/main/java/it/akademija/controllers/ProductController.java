package it.akademija.controllers;

import it.akademija.models.Product;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController(value = "/api")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/products")
    public Product create(@RequestBody Product product){
        return productRepository.save(product);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/products/{id}")
    public Product getProduct(@PathVariable int id){
        return productRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/products/{id}")
        public Product updateProduct(@PathVariable int id, @RequestBody Product product){
        Product oldProduct = productRepository.findOne(id);
        if(oldProduct == null){
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(product, oldProduct);
        return productRepository.save(product);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/products/{id}")
    public Product deleteProduct(@PathVariable int id){
         productRepository.delete(productRepository.findOne(id));
        return productRepository.findOne(id);
    }

}