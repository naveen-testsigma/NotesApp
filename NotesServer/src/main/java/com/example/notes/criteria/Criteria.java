package com.example.notes.criteria;

import com.example.notes.constants.Operators;
import lombok.Data;

@Data
public class Criteria {
    String key;
    Enum<Operators> operation;
    String value;
    Criteria(String a, Enum<Operators> b, String c)
    {
        this.key=a;
        this.operation=b;
        this.value=c;
    }
}
