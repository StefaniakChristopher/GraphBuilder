package com.graphcrafter.graphs_service;

public class ValidateBalance {
    public static boolean validateCategories(String[] categories, long[] categoryValues) {
        if (categories.length != categoryValues.length) {
            return false;
        }

        return true;
    }
}
