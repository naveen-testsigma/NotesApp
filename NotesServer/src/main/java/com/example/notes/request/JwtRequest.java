package com.example.notes.request;

import lombok.Data;

import java.io.Serializable;
@Data
public class JwtRequest implements Serializable {
	private String username;
	private String password;
}
