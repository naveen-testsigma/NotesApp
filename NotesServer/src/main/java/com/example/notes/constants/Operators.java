package com.example.notes.constants;

 public enum Operators {
    COLON (":");
     private String value;
     public String getValue()
     {
         return this.value;
     }

     private Operators(String value)
     {
         this.value = value;
     }
}
