package com.graphcrafter.contactus_service;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;

import jakarta.validation.Valid;

@RestController
public class RESTController {

    private static final Logger logger = LoggerFactory.getLogger(RESTController.class);

    @PostMapping("/contactus")
    public ResponseEntity<Object> sendMessage(@Valid @RequestBody ConsolidatedMessage message)
            throws Exception {

        logger.info("Received message request from email: {}", message.getEmail());

        try {
            SendGridEmailer.sendEmail("Sender Email: " + message.getEmail() + "\n\nDear GraphCrafter,\n\n" + message.getMessage() + "\n\nSincerely, " + message.getName());
            logger.info("Email sent successfully from: {}", message.getEmail());
        } catch (Exception e) {
            logger.error("Failed to send email from: {}", message.getEmail(), e);
            throw e;
        }

        return ResponseEntity.ok(null);
    }
}