package com.graphcrafter.graphs_service;

public record Graph(
        String xAxisLabel,
        String yAxisLabel,
        String[] categories,
        String title,
        String[] xAxisValues) {
}
