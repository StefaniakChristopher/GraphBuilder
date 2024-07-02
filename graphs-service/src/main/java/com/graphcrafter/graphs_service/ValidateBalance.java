package com.graphcrafter.graphs_service;

public class ValidateBalance {
    public static boolean validateCategories(String[] categories, String[] categoryValues) {
        if (categories.length != categoryValues.length) {
            return false;
        }

        return true;
    }
}
