package com.graphcrafter.contactus_service;

import java.io.IOException;
import io.github.cdimascio.dotenv.Dotenv;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

public abstract class SendGridEmailer {
    private static final String ENV = System.getenv("ENV");
    private static final String supportEmail = "graphcraftertest@gmail.com";

    private static String getSendGridApiKey() {
        if ("prod".equalsIgnoreCase(ENV)) {
            return System.getenv("SENDGRID_API_KEY");
        } else {
            Dotenv dotenv = Dotenv.load();
            return dotenv.get("SENDGRID_API_KEY");
        }
    }

    public static void sendEmail(String message) throws IOException {
        String sendGridApiKey = getSendGridApiKey();
        if (sendGridApiKey == null || sendGridApiKey.isEmpty()) {
            throw new IllegalStateException("SendGrid API key is not set in environment variables.");
        }

        Email from = new Email(supportEmail);
        String subject = "Contact Us Form Submission";
        Email to = new Email(supportEmail);
        Content content = new Content("text/plain", message);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();

        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());
        sg.api(request);
    }
}