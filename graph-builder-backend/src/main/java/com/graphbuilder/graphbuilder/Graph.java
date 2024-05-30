package com.graphbuilder.graphbuilder;

public record Graph(
                String xAxisLabel,
                String yAxisLabel,
                String[] categories,
                String title,
                String[] xAxisValues) {
}
