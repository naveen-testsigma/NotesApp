package com.example.notes.criteria;

import lombok.Data;

@Data
public class Criteria {
    String key;
    String value;
    Criteria(String a,String b)
    {
        this.key=a;
        this.value=b;
    }
}
