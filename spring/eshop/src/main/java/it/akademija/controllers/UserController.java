package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.models.User;
import it.akademija.repositories.UserRepository;
import it.akademija.services.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "user")
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.GET, value = "/api/users")
    @ApiOperation(value = "Get users", notes = "Returns users")
    public List<User> userList() {
        return userService.getUsers();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/users")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create user", notes = "Creates a new user")
    public void create(@RequestBody final User user) {
        userService.createUser(user);
    }

//    @ApiOperation(value = "Find user", notes = "Finds user by id")
//    @RequestMapping(method = RequestMethod.GET, value = "/api/users/{id}")
//    public User getUser(@PathVariable final int id) {
//        return userRepository.findOne(id);
//    }
//
//    @ApiOperation(value = "Update user", notes = "Updates users details")
//    @RequestMapping(method = RequestMethod.PUT, value = "/api/users/{id}")
//    public User updateUser(@PathVariable int id, @RequestBody User user) {
//        User oldUser = userRepository.findOne(id);
//        if (oldUser == null) {
//            throw new NullPointerException();
//        }
//        BeanUtils.copyProperties(user, oldUser);
//        return userRepository.save(oldUser);
//    }
//
//    @ApiOperation(value = "Delete user", notes = "Deletes user")
//    @RequestMapping(method = RequestMethod.DELETE, value = "/api/users/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void deleteUser(@PathVariable int id) {
//        userRepository.delete(userRepository.findOne(id));
//    }
}