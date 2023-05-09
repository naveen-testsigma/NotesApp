package com.example.notes.criteria;

import lombok.Data;

@Data
public class Criteria {
    String key;
    String operation;
    String value;
    Criteria(String a,String b,String c)
    {
        this.key=a;
        this.operation=b;
        this.value=c;
    }
}
