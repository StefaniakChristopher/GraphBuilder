package com.graphcrafter.contactus_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class HandleMail {

    private final JavaMailSender mailSender;

    @Autowired
    public HandleMail(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(Message message) {
        SimpleMailMessage sendableMessage = new SimpleMailMessage();
        sendableMessage.setFrom("graphcraftertest@gmail.com");
        sendableMessage.setTo("sinma0archeth@gmail.com");
        sendableMessage.setSubject("Test Mail");
        sendableMessage.setText("This is a test email sent from Spring Boot application.");
        mailSender.send(sendableMessage);
    }
}