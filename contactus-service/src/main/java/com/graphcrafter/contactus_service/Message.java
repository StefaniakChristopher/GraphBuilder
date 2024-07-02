package com.graphcrafter.contactus_service;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class Message {

    private int id;

    @Size(min = 2, max = 40, message = "Name should be between 2 and 40 characters")
    private String name;

    @Size(min = 5, max = 40, message = "Email should be between 5 and 40 characters")
    @Email(message = "Email should be a valid email")
    private String email;

    @Size(min = 10, max = 1000, message = "Message should be between 10 and 1000 characters")
    private String message;

    public Message(int id, String name, String email, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }

}
