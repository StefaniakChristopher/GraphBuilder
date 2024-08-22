package com.graphcrafter.contactus_service;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class RESTControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SendGridEmailer sendGridEmailer;

    @Test
    public void testSendMessage() throws Exception {

        String messageJson = "{ \"email\": \"test@example.com\", \"name\": \"Test User\", \"message\": \"This is a test message.\" }";

        mockMvc.perform(post("/contactus")
                .contentType("application/json")
                .content(messageJson))
                .andExpect(status().isOk());
    }
}