package com.graphcrafter.graphs_service;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Graph {
        private int id;

        @NotNull(message = "xAxisLabel cannot be null")
        @Size(min = 1, max = 30, message = "xAxisLabel must be between 1 and 30 characters")
        private String xAxisLabel;

        @NotNull(message = "yAxisLabel cannot be null")
        @Size(min = 1, max = 30, message = "yAxisLabel must be between 1 and 30 characters")
        private String yAxisLabel;

        @NotNull(message = "Categories cannot be null")
        @Size(min = 1, max = 30, message = "There must be between 1 and 30 categories")
        @ValidCategory(message = "Each category must be between 1 and 30 characters")
        private String[] categories;

        @NotNull(message = "Category values cannot be null")
        @Size(min = 1, max = 30, message = "There must be between 1 and 30 category values")
        private long[] categoryValues;

        @NotNull(message = "Title cannot be null")
        @Size(min = 1, max = 100, message = "Title length must be between 1 and 100 characters")
        private String title;

        public Graph(int id, String xAxisLabel, String yAxisLabel, String[] categories, String title,
                        long[] categoryValues) {
                this.id = id;
                this.xAxisLabel = xAxisLabel;
                this.yAxisLabel = yAxisLabel;
                this.categories = categories;
                this.title = title;
                this.categoryValues = categoryValues;
        }

        public int getId() {
                return id;
        }

        public String getXAxisLabel() {
                return xAxisLabel;
        }

        public String getYAxisLabel() {
                return yAxisLabel;
        }

        public String[] getCategories() {
                return categories;
        }

        public String getTitle() {
                return title;
        }

        public long[] getCategoryValues() {
                return categoryValues;
        }

        public void setId(int id) {
                this.id = id;
        }
}
