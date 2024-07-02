package com.graphcrafter.graphs_service;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = NumericArrayValidator.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR,
        ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidNumericArray {
    String message() default "Each element must be a numeric value";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}