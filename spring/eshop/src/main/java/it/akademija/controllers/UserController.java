package it.akademija.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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

    @RequestMapping(method = RequestMethod.GET, value = "users")
    @ApiOperation(value = "Get users", notes = "Returns users")
    public List<User> userList() {
        return userService.getUsers();
    }

    @RequestMapping(method = RequestMethod.POST, value = "users")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create user", notes = "Creates a new user")
    public User create(@RequestBody final User user) {
        return userService.createUser(user);
    }

    @ApiOperation(value = "Find user", notes = "Finds user by id")
    @RequestMapping(method = RequestMethod.GET, value = "users/{id}")
    public User getUserById(@PathVariable final long id) {
        return userService.getUser(id);
    }

    @ApiOperation(value = "Update user", notes = "Updates users details")
    @RequestMapping(method = RequestMethod.PUT, value = "users/{id}")
    public User updateUser(@PathVariable long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @ApiOperation(value = "Delete user", notes = "Deletes user")
    @RequestMapping(method = RequestMethod.DELETE, value = "users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
    }
}