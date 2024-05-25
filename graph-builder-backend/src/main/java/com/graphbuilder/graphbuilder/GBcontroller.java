package com.graphbuilder.graphbuilder;

import java.util.ArrayList;

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
    ArrayList<builtBarGraph> graphs = new ArrayList<>();

    @GetMapping(value = "/graphs/{graphID}")
    public builtBarGraph getGraph(@PathVariable String graphID) {
        int intGraphID = Integer.parseInt(graphID);

        for (builtBarGraph graph : graphs) {
            System.out.println(graph.id());
            System.out.println("Amount of graphs: " + graphs.size());
            if (intGraphID == graph.id()) {
                return graph;
            }
        }

        System.out.println("Could not find graph");
        return null;
    }

    @DeleteMapping(value = "/graphs/{graphID}")
    public ResponseEntity<Object> deleteGraph(@PathVariable String graphID) {

        int intGraphID = Integer.parseInt(graphID);
        builtBarGraph graphToDelete = null;
        for (builtBarGraph graph : graphs) {
            System.out.println(graph.id());
            System.out.println("Amount of graphs: " + graphs.size());
            if (intGraphID == graph.id()) {
                graphToDelete = graph;
                break;
            }
        }
        if (graphToDelete != null) {
            graphs.remove(graphToDelete);
            return ResponseEntity.ok().body("Graph deleted");
        } else {
            return ResponseEntity.ok().body("Graph not found");
        }

    }

    @PostMapping("/graphs")
    public ResponseEntity<Object> recieveGraph(@RequestBody Graph graph) {
        id_counter += 1;

        ArrayList<Long> xAxisMagnitude = BuildGraph.parseXAxisMagnitude(graph);

        long magnitude = BuildGraph.calcMagnitude(xAxisMagnitude);

        builtBarGraph builtGraph = new builtBarGraph(id_counter, graph.xAxisLabel(), graph.yAxisLabel(),
                BuildGraph.parseCategories(graph), magnitude, graph.title(), BuildGraph.divideGraph(magnitude),
                xAxisMagnitude);
        System.out.println(builtGraph.id());
        graphs.add(builtGraph);

        return ResponseEntity.ok().body("Graph created with ID of " + id_counter);
    }
}
