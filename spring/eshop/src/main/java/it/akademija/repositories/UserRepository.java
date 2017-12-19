package it.akademija.repositories;

import it.akademija.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
//    User findByEmail(String email);
//    void deleteByUsername(String username);
}
