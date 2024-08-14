package com.graphcrafter.contactus_service;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.ResponseEntity;

import jakarta.validation.Valid;

@RestController
public class RESTController {

    @PostMapping("/contact")
    public ResponseEntity<Object> sendMessage(@Valid @RequestBody ConsolidatedMessage message)
            throws Exception {
        
        new GMailer().sendMail(message.getEmail(), message.getMessage());

        return ResponseEntity.ok(null);
    }

    @PostMapping("/test")
    public ResponseEntity<Object> test() {
        return ResponseEntity.ok(null);
    }
}