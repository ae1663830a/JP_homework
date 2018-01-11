package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.models.Cart;
import it.akademija.models.User;
import it.akademija.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "user")
@RequestMapping(value = "/api/")
public class UserController {

    @Autowired
    UserService userService;

    @ApiOperation(value = "Get users", notes = "Returns users")
    @GetMapping(value = "users")
    @ResponseStatus(HttpStatus.FOUND)
    public List<User> userList() {
        return userService.getUsers();
    }

    @ApiOperation(value = "Create user", notes = "Creates a new user")
    @PostMapping(value = "users")
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@RequestBody final User user) {
        return userService.createUser(user);
    }

    @ApiOperation(value = "Find user", notes = "Finds user by id")
    @GetMapping(value = "users/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public User getUserById(@PathVariable final Long id) {
        return userService.getUser(id);
    }

    @ApiOperation(value = "Update user", notes = "Updates users details")
    @PutMapping(value = "users/{id}")
    public User updateUser(@PathVariable final Long id, @RequestBody final User user) {
        return userService.updateUser(id, user);
    }

    @ApiOperation(value = "Delete user", notes = "Deletes user")
    @DeleteMapping(value = "users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable final Long id) {
        userService.deleteUser(id);
    }

//    @ApiOperation(value = "Get user by email", notes = "Returns user")
//    @GetMapping(value = "users/{email}")
//    public User getUserByEmail(@PathVariable final String email) {
//        return userService.findUserByEmail(email);
//    }
}