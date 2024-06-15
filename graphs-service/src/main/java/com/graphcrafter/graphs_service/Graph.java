package com.graphcrafter.graphs_service;

public class Graph {
        private int id;
        private String xAxisLabel;
        private String yAxisLabel;
        private String[] categories;
        private String[] categoryValues;
        private String title;

        public Graph(int id, String xAxisLabel, String yAxisLabel, String[] categories, String title,
                        String[] categoryValues) {
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

        public String[] getCategoryValues() {
                return categoryValues;
        }

        public void setId(int id) {
                this.id = id;
        }
}
