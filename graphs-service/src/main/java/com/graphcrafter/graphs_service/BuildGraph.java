package com.graphcrafter.graphs_service;

import java.util.ArrayList;
import java.util.Collections;

public abstract class BuildGraph {
    public static ArrayList<Long> divideGraph(long ceilingValue) {
        long multiple_increment = (ceilingValue / 10);
        ArrayList<Long> yAxisValues = new ArrayList<>();
        long current_multiple = 0;
        while (current_multiple < ceilingValue) {
            current_multiple += multiple_increment;
            yAxisValues.add(current_multiple);
        }

        return yAxisValues;
    }

    public static ArrayList<Long> roundXAxisValues(Graph graph) {

        ArrayList<Long> xAxisValuesRounded = new ArrayList<>();
        for (String amount : graph.xAxisValues()) {
            xAxisValuesRounded.add(Math.round(Double.parseDouble(amount)));
        }
        return xAxisValuesRounded;
    }

    public static long calcCeilingValue(ArrayList<Long> xAxisValues) {
        long ceilingValue = Math.round(Collections.max(xAxisValues) * 1.1);
        while (ceilingValue % 10 != 0) {
            ceilingValue += 1;
        }
        return ceilingValue;
    }

}

record builtBarGraph(int id, String xAxisLabel, String yAxisLabel, String[] categories, long ceilingValue, String title,
        ArrayList<Long> yAxisValues, ArrayList<Long> xAxisValues) {
}
