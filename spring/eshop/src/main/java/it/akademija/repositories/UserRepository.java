package it.akademija.repositories;

import it.akademija.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByEmail(String email);
    void deleteUserByEmail(String email);
    List<User> findUserByEmailContaining(String partOfEmail);

}
