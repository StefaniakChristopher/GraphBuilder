package com.graphcrafter.graphs_service;

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
    HashMap<Integer, Graph> graphs = new HashMap<>();

    @GetMapping(value = "/allgraphs")
    public ResponseEntity<HashMap<Integer, Graph>> getAllGraphs() {
        if (graphs.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(graphs);
        }
    }

    @GetMapping(value = "/graphs/{graphID}")
    public ResponseEntity<Graph> getGraph(@PathVariable int graphID) {
        Graph returnableGraph = graphs.get(graphID);
        if (returnableGraph != null) {
            return ResponseEntity.ok(returnableGraph);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/graphs/{graphID}")
    public ResponseEntity<String> deleteGraph(@PathVariable int graphID) {
        Graph graphToDelete = graphs.get(graphID);
        if (graphToDelete != null) {
            graphs.remove(graphID);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/graphs")
    public ResponseEntity<Graph> recieveGraph(@RequestBody Graph graph) {
        long newID = id_counter.incrementAndGet();

        if (graph == null) {
            return ResponseEntity.badRequest().build();
        }

        graph.setId((int) newID);

        graphs.put((int) newID, graph);

        return ResponseEntity.ok(graph);
    }
}
