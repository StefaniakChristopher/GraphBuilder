package com.graphcrafter.contactus_service;

import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(RESTController.class)
public class RESTControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GMailer gMailer;

    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testSendMessage() throws Exception {
        ConsolidatedMessage message = new ConsolidatedMessage(1, "Test User", "test@example.com", "This is a test message.");

        doNothing().when(gMailer).sendMail("Sender Email: test@example.com\n\nDear GraphCrafter,\n\nThis is a test message.\n\nSincerely, Test User");

        mockMvc.perform(post("/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(message)))
                .andExpect(status().isOk());
    }
}