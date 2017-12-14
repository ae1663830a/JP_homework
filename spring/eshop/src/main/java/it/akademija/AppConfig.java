package it.akademija;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({"classpath*:application-context.xml"})
public class AppConfig {

    @Bean
    public Product product1() {
        return new Product("First", 12.22);
    }

    @Bean
    public Product product2() {
        return new Product("Second", 2.34);
    }

}