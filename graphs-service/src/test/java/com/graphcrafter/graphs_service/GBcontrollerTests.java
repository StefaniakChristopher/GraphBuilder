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
import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
public class GBcontrollerTests {

        String graphID = "1";
        String falseFalseGraphID = "-2";

        String builtGraphsJSON = "{\"1\":{\"id\":1,\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"],\"categoryValues\":[\"10\",\"8\",\"3\"],\"title\":\"Test Graph\",\"yaxisLabel\":\"Y Label\",\"xaxisLabel\":\"X Label\"},\"2\":{\"id\":2,\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"],\"categoryValues\":[\"10\",\"8.9\",\"3\"],\"title\":\"Test Graph\",\"yaxisLabel\":\"Y Label\",\"xaxisLabel\":\"X Label\"}}";

        String builtGraphJSON = "{\"id\":1,\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"],\"categoryValues\":[\"10\",\"8\",\"3\"],\"title\":\"Test Graph\",\"yaxisLabel\":\"Y Label\",\"xaxisLabel\":\"X Label\"}";

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
        public void testReceiveDecimal() throws Exception {

                mockMvc.perform(post("/graphs")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"id\":\"0\",\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"], \"categoryValues\": [\"10\", \"8.9\", \"3\"],\"title\":\"Test Graph\",\"yAxisLabel\":\"Y Label\", \"xAxisLabel\":\"X Label\"}"))
                                .andExpect(status().isBadRequest())
                                .andExpect(content().string(
                                                containsString("Each category value must be a whole numeric value")));
        }

        @Test
        @DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
        public void testNotEqualCategories() throws Exception {

                mockMvc.perform(post("/graphs")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{\"id\":\"0\",\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"], \"categoryValues\": [\"10\", \"8\"],\"title\":\"Test Graph\",\"yAxisLabel\":\"Y Label\", \"xAxisLabel\":\"X Label\"}"))
                                .andExpect(status().isBadRequest())
                                .andExpect(content().string(containsString(
                                                "Amount of categories and category values do not match")));
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
                                .content("{\"id\":\"0\",\"categories\":[\"fdsfds\",\"fdsf\",\"fdsfdsf\"], \"categoryValues\": [\"10\", \"8\", \"3\"],\"title\":\"Test Graph\",\"yAxisLabel\":\"Y Label\", \"xAxisLabel\":\"X Label\"}"))
                                .andExpect(status().isOk());
        }

}