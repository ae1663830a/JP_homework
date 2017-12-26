package it.akademija.services;

import it.akademija.models.User;
import it.akademija.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        userRepository.save(user);
        return user;
    }

    public User getUser(@PathVariable final long id) {
        return userRepository.findOne(id);
    }

    public User updateUser(@PathVariable long id, @RequestBody User user) {
        User oldUser = userRepository.findOne(id);
        if (oldUser == null) {
            throw new NullPointerException();
        }
        BeanUtils.copyProperties(user, oldUser);
        return userRepository.save(oldUser);
    }

    public void deleteUser(@PathVariable long id) {
        userRepository.delete(userRepository.findOne(id));
    }
}
