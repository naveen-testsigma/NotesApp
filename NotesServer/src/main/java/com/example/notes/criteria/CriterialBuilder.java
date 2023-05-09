package com.example.notes.criteria;

import com.example.notes.constants.Operators;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class CriterialBuilder {
    public List<Criteria> builder(String data)
    {
        String[] splittedData=data.split(",") ;
        List<Criteria> criteriaList = new ArrayList<>();
        for(String s: splittedData)
        {
            if(s.contains(Operators.COLON))
            {
                String[] splittedCriteria=s.split(Operators.COLON) ;
                criteriaList.add(new Criteria(splittedCriteria[0],Operators.COLON,splittedCriteria[1]));
            }

        }
        return criteriaList;
    }
}
