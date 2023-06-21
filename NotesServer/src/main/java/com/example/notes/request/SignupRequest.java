package com.example.notes.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class SignupRequest {
    String name;
    String password;
    String emailId;
}
