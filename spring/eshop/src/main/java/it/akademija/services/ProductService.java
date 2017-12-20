package it.akademija.services;

import it.akademija.models.Product;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Transactional
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Transactional
    public Product createProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    @Transactional
    public Product getProduct(@PathVariable final int id) {
        return productRepository.findOne(id);
    }

    @Transactional
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product oldProduct = productRepository.findOne(id);
        if (oldProduct == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(product, oldProduct);
        return productRepository.save(oldProduct);
    }

    @Transactional
    public void deleteProduct(@PathVariable int id) {
        productRepository.delete(productRepository.findOne(id));
    }
}
