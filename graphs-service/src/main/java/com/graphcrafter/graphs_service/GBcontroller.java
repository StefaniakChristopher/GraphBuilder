package com.graphcrafter.graphs_service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GBcontroller {

    AtomicLong id_counter = new AtomicLong(0);
    HashMap<Integer, builtBarGraph> graphs = new HashMap<>();

    @GetMapping(value = "/allgraphs")
    public ResponseEntity<HashMap<Integer, builtBarGraph>> getAllGraphs() {
        if (graphs.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(graphs);
        }
    }

    @GetMapping(value = "/graphs/{graphID}")
    public ResponseEntity<builtBarGraph> getGraph(@PathVariable int graphID) {
        builtBarGraph returnableGraph = graphs.get(graphID);
        if (returnableGraph != null) {
            return ResponseEntity.ok(returnableGraph);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/graphs/{graphID}")
    public ResponseEntity<String> deleteGraph(@PathVariable int graphID) {
        builtBarGraph graphToDelete = graphs.get(graphID);
        if (graphToDelete != null) {
            graphs.remove(graphID);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/graphs")
    public ResponseEntity<builtBarGraph> recieveGraph(@RequestBody Graph graph) {
        long newID = id_counter.incrementAndGet();

        if (graph == null) {
            return ResponseEntity.badRequest().build();
        }

        System.out.println("Recieved graph with ID ");

        ArrayList<Long> xAxisValuesRounded = BuildGraph.roundXAxisValues(graph); // round off decimal values

        long ceilingValue = BuildGraph.calcCeilingValue(xAxisValuesRounded); // to find the highest number in the data

        ArrayList<Long> yAxisValues = BuildGraph.divideGraph(ceilingValue); // divide the graph into 10 parts

        builtBarGraph builtGraph = new builtBarGraph((int) newID, graph.xAxisLabel(),
                graph.yAxisLabel(),
                graph.categories(), ceilingValue, graph.title(),
                yAxisValues, xAxisValuesRounded);
        System.out.println("Graph created with ID " + builtGraph.id());
        graphs.put(builtGraph.id(), builtGraph);

        return ResponseEntity.ok(builtGraph);
    }
}
