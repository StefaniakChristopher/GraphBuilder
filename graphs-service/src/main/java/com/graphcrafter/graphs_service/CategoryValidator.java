package com.graphcrafter.graphs_service;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CategoryValidator implements ConstraintValidator<ValidCategory, Object> {
    @Override
    public void initialize(ValidCategory constraintAnnotation) {
    }

    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        if (value == null) {
            return true; // @NotNull should handle null cases
        }

        if (value instanceof String[]) {
            String[] categories = (String[]) value;
            for (String category : categories) {
                if (category == null || category.length() < 1 || category.length() > 30) {
                    return false;
                }
            }
        } else {
            return false;
        }

        return true;
    }
}
