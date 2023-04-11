package com.graphbuilder.graphbuilder;

import java.util.ArrayList;
import java.util.Collections;

public abstract class BuildGraph {
    public static ArrayList<Long> divideGraph(long magnitude){
        long multiple_increment = (magnitude/10);
        ArrayList<Long> yAxisIncrements = new ArrayList<>();
        long current_multiple = 0;
        while (current_multiple < magnitude) {
            current_multiple += multiple_increment;
            yAxisIncrements.add(current_multiple);
        }

        return yAxisIncrements;
    }

    public static String [] parseCategories(Graph graph) {
        String[] categories = graph.categories().split(",");
        return categories;
    }

    public static ArrayList<Long> parseXAxisMagnitude(Graph graph) {
        String[] xAxisMagnitudeStringForm = graph.xAxisMagnitude().split(",");
        ArrayList<Long> xAxisMagnitude = new ArrayList<>();
        for (String amount: xAxisMagnitudeStringForm) {
            xAxisMagnitude.add(Math.round(Double.parseDouble(amount)));
        }
        return xAxisMagnitude;
    }

    public static long calcMagnitude(ArrayList<Long> xAxisMagnitude) {
        long magnitude = Math.round(Collections.max(xAxisMagnitude) * 1.1);
        while (magnitude % 10 != 0) {
            magnitude += 1;
        }
        return magnitude;
    }

}

record builtBarGraph(int id, String xAxisLabel, String yAxisLabel, String[] categories, long magnitude, String title, ArrayList<Long> yAxisIncrements, ArrayList<Long> xAxisMagnitude) {}

