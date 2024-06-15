package com.graphcrafter.graphs_service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
@AutoConfigureMockMvc
public class GBcontrollerTests {

        String graphID = "1";
        String falseFalseGraphID = "-2";

        String builtGraphsJSON = "{\n" +
                        "  \"1\": {\n" +
                        "    \"id\": 1,\n" +
                        "    \"xAxisLabel\": \"X Label\",\n" +
                        "    \"yAxisLabel\": \"Y Label\",\n" +
                        "    \"categories\": [\n" +
                        "      \"fdsfds\",\n" +
                        "      \"fdsf\",\n" +
                        "      \"fdsfdsf\"\n" +
                        "    ],\n" +
                        "    \"ceilingValue\": 20,\n" +
                        "    \"title\": \"Test Graph\",\n" +
                        "    \"yAxisValues\": [\n" +
                        "      2,\n" +
                        "      4,\n" +
                        "      6,\n" +
                        "      8,\n" +
                        "      10,\n" +
                        "      12,\n" +
                        "      14,\n" +
                        "      16,\n" +
                        "      18,\n" +
                        "      20\n" +
                        "    ],\n" +
                        "    \"xAxisValues\": [\n" +
                        "      10,\n" +
                        "      8,\n" +
                        "      3\n" +
                        "    ]\n" +
                        "  },\n" +
                        "  \"2\": {\n" +
                        "    \"id\": 2,\n" +
                        "    \"xAxisLabel\": \"X Label\",\n" +
                        "    \"yAxisLabel\": \"Y Label\",\n" +
                        "    \"categories\": [\n" +
                        "      \"fdsfds\",\n" +
                        "      \"fdsf\",\n" +
                        "      \"fdsfdsf\"\n" +
                        "    ],\n" +
                        "    \"ceilingValue\": 20,\n" +
                        "    \"title\": \"Test Graph\",\n" +
                        "    \"yAxisValues\": [\n" +
                        "      2,\n" +
                        "      4,\n" +
                        "      6,\n" +
                        "      8,\n" +
                        "      10,\n" +
                        "      12,\n" +
                        "      14,\n" +
                        "      16,\n" +
                        "      18,\n" +
                        "      20\n" +
                        "    ],\n" +
                        "    \"xAxisValues\": [\n" +
                        "      10,\n" +
                        "      8,\n" +
                        "      3\n" +
                        "    ]\n" +
                        "  }\n" +
                        "}";

        String builtGraphJSON = String.format("{"
                        + "\"id\": %s,"
                        + "\"xAxisLabel\": \"X Label\","
                        + "\"yAxisLabel\": \"Y Label\","
                        + "\"categories\": ["
                        + "    \"fdsfds\","
                        + "    \"fdsf\","
                        + "    \"fdsfdsf\""
                        + "],"
                        + "\"ceilingValue\": 20,"
                        + "\"title\": \"Test Graph\","
                        + "\"yAxisValues\": ["
                        + "    2,"
                        + "    4,"
                        + "    6,"
                        + "    8,"
                        + "    10,"
                        + "    12,"
                        + "    14,"
                        + "    16,"
                        + "    18,"
                        + "    20"
                        + "],"
                        + "\"xAxisValues\": ["
                        + "    10,"
                        + "    8,"
                        + "    3"
                        + "]"
                        + "}", graphID);

        @Autowired
        private MockMvc mockMvc;

        @Test
        @DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD) // to reset the state of the
                                                                                      // application before each test
        public void testReceiveGraph() throws Exception {
                postGenericGraph();
        }

        @Test
        @DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
        public void testGetGraph() throws Exception {

                postGenericGraph();

                mockMvc.perform(get("/graphs/" + graphID)
                                .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().isOk())
                                .andExpect(content().json(builtGraphJSON));

                mockMvc.perform(get("/graphs/" + falseFalseGraphID)
                                .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().isNotFound());

        }

        @Test
        @DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
        public void testDeleteGraph() throws Exception {

                postGenericGraph();

                mockMvc.perform(delete("/graphs/" + graphID)
                                .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().is(HttpStatus.OK.value()));

                mockMvc.perform(delete("/graphs/" + falseFalseGraphID)
                                .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().isNotFound());

        }

        @Test
        @DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
        public void testAllGraphs() throws Exception {

                mockMvc.perform(get("/allgraphs")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().isNoContent());

                postGenericGraph();
                postGenericGraph();

                mockMvc.perform(get("/allgraphs")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(builtGraphsJSON))
                                .andExpect(status().isOk());
        }

        private void postGenericGraph() throws Exception {
                mockMvc.perform(post("/graphs")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"id\":\"0\",\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"],\"magnitude\":\"30\", \"xAxisValues\": [\"10\", \"8\", \"3\"],\"title\":\"Test Graph\",\"yAxisLabel\":\"Y Label\", \"xAxisLabel\":\"X Label\"}"))
                                .andExpect(status().isOk());
        }

}