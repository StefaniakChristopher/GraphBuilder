package com.graphcrafter.contactus_service;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.ResponseEntity;

import jakarta.validation.Valid;

@RestController
public class RESTController {

    @PostMapping("/contactus")
    public ResponseEntity<Object> sendMessage(@Valid @RequestBody ConsolidatedMessage message)
            throws Exception {
        
        new GMailer().sendMail("Sender Email: " + message.getEmail() + "\n\nDear GraphCrafter,\n\n" + message.getMessage() + "\n\nSincerely, " + message.getName());

        return ResponseEntity.ok(null);
    }
}