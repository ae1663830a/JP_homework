package springboot2.repository;

import org.springframework.data.repository.CrudRepository;
import springboot2.model.Shipwreck;

public interface ShipwreckRepository extends CrudRepository<Shipwreck, Long> {
}
