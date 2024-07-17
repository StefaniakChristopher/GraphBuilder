package com.graphcrafter.contactus_service;

import java.util.HashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
public class RESTController {

    @Autowired
    private HandleMail sendMail;

    AtomicLong id_counter = new AtomicLong(0);
    HashMap<Integer, Message> messageHashMap = new HashMap<>();

    @PostMapping("/contact")
    public ResponseEntity<Object> receiveMessage(@Valid @RequestBody Message message) {

        long newID = id_counter.incrementAndGet();

        message.setId((int) newID);

        messageHashMap.put((int) newID, message);

        sendMail.sendEmail(message);

        return ResponseEntity.ok(null);
    }
}
