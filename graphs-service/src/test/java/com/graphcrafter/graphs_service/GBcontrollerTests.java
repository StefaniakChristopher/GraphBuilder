package com.graphcrafter.graphs_service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class GBcontrollerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testReceiveGraph() throws Exception {
        // Prepare a JSON string of Graph object
        String graphJson = "{\"id\":\"0\",\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"],\"magnitude\": \"30\", \"xAxisValues\": [\"10\", \"8\", \"3\"],\"title\":\"Test Graph\",\"yAxisLabel\":\"Y Label\", \"xAxisLabel\":\"X Label\"}";

        // Perform POST request and verify the response
        mockMvc.perform(post("/graphs")
                .contentType(MediaType.APPLICATION_JSON)
                .content(graphJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.xAxisLabel").value("X Label"))
                .andExpect(jsonPath("$.yAxisLabel").value("Y Label"))
                .andExpect(jsonPath("$.title").value("Test Graph"))
                .andExpect(jsonPath("$.ceilingValue").exists())
                .andExpect(jsonPath("$.yAxisValues").isArray())
                .andExpect(jsonPath("$.xAxisValues").isArray());
    }
}