package it.akademija.services;

import it.akademija.models.User;
import it.akademija.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User getUser(Long id) {
        return userRepository.findOne(id);
    }

    public User updateUser(Long id, User user) {
        User oldUser = userRepository.findOne(id);
        if (oldUser == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(user, oldUser);
        return userRepository.save(oldUser);
    }

    public void deleteUser(Long id) {
        userRepository.delete(userRepository.findOne(id));
    }

//    public User findUserByEmail(String email) {
//        return userRepository.findUserByEmail(email);
//    }
//
//    public void deleteUserByEmail(String email) {
//        userRepository.deleteUserByEmail(email);
//    }
//
//    public List<User> findUserByEmailContaining(String partOfEmail) {
//        return userRepository.findUserByEmailContaining(partOfEmail);
//    }
}
