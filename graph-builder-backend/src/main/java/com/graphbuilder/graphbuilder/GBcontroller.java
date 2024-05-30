package com.graphbuilder.graphbuilder;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GBcontroller {

    int id_counter = 0;
    HashMap<Integer, builtBarGraph> graphs = new HashMap<>();

    @GetMapping(value = "/allgraphs")
    public HashMap<Integer, builtBarGraph> getAllGraphs() {
        return graphs;
    }

    @GetMapping(value = "/graphs/{graphID}")
    public builtBarGraph getGraph(@PathVariable String graphID) {
        int intGraphID = Integer.parseInt(graphID);

        builtBarGraph returnableGraph = graphs.get(intGraphID);
        if (returnableGraph != null) {
            return returnableGraph;
        } else {
            System.out.println("Could not find graph");
            return null;
        }

    }

    @DeleteMapping(value = "/graphs/{graphID}")
    public ResponseEntity<Object> deleteGraph(@PathVariable String graphID) {

        int intGraphID = Integer.parseInt(graphID);
        builtBarGraph graphToDelete = graphs.get(intGraphID);
        if (graphToDelete != null) {
            graphs.remove(intGraphID);
            return ResponseEntity.ok().body("Graph deleted");
        } else {
            System.out.println("Could not find graph");
            return ResponseEntity.ok().body("Graph not found");
        }
    }

    @PostMapping("/graphs")
    public ResponseEntity<Object> recieveGraph(@RequestBody Graph graph) {
        id_counter += 1;

        ArrayList<Long> xAxisValuesRounded = BuildGraph.roundXAxisValues(graph); // round off decimal values

        long ceilingValue = BuildGraph.calcCeilingValue(xAxisValuesRounded); // to find the highest number in the data

        ArrayList<Long> yAxisValues = BuildGraph.divideGraph(ceilingValue); // divide the graph into 10 parts

        builtBarGraph builtGraph = new builtBarGraph(id_counter, graph.xAxisLabel(),
                graph.yAxisLabel(),
                graph.categories(), ceilingValue, graph.title(),
                yAxisValues, xAxisValuesRounded);
        System.out.println("Graph created with ID " + builtGraph.id());
        graphs.put(builtGraph.id(), builtGraph);

        return ResponseEntity.ok().body("Graph created with ID of " + id_counter);
    }
}
