package it.akademija.services;

import it.akademija.models.Product;
import it.akademija.repositories.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public Product getById(Long id) {
        return productRepository.findOne(id);
    }

    public Product update(Long id, Product product) {
        Product oldProduct = productRepository.findOne(id);
        if (oldProduct == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(product, oldProduct);
        return productRepository.save(oldProduct);
    }

    public void delete(Long id) {
        productRepository.delete(productRepository.findOne(id));
    }
}
