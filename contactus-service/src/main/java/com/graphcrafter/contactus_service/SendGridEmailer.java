package com.graphcrafter.contactus_service;

import java.io.IOException;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import io.github.cdimascio.dotenv.Dotenv;

public abstract class SendGridEmailer {
    private static final Dotenv dotenv = Dotenv.load();
    private static final String SENDGRID_API_KEY = dotenv.get("SENDGRID_API_KEY");
    private static final String supportEmail = "graphcraftertest@gmail.com";

    public static void sendEmail(String message) throws IOException {
        Email from = new Email(supportEmail);
        String subject = "Contact Us Form Submission";
        Email to = new Email(supportEmail);
        Content content = new Content("text/plain", message);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(SENDGRID_API_KEY);
        Request request = new Request();


        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());
        sg.api(request);
       
    }
}