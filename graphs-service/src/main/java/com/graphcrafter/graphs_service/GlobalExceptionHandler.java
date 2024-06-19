package com.graphcrafter.graphs_service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
        String firstErrorMessage = ex.getBindingResult().getFieldErrors().stream()
                .map(err -> err.getDefaultMessage())
                .findFirst()
                .orElse("Unknown validation error");

        var error = new ErrorDetails(firstErrorMessage);

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Object> handleMessageNotReadable(HttpMessageNotReadableException ex) {
        String exMessage = ex.getMessage();

        if (exMessage.contains("Cannot deserialize value of type `long`")) {
            String message = "Numbers cannot be more than 19 digits long";
            var errorDetails = new ErrorDetails(message);
            return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
        }

        // Fallback for other JSON parse errors
        var errorDetails = new ErrorDetails("JSON Parse error: " + ex.getMessage());
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

}