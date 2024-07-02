package com.graphcrafter.graphs_service;

import java.util.Arrays;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class NumericArrayValidator implements ConstraintValidator<ValidNumericArray, String[]> {
    @Override
    public boolean isValid(String[] values, ConstraintValidatorContext context) {
        if (values == null) {
            return true; // null is checked by @NotNull
        }
        return Arrays.stream(values).allMatch(val -> val.matches("-?\\d+"));
    }
}