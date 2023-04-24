package com.example.notes.criteria;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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
            String[] splittedCriteria=s.split(":") ;
//            for(String x: splittedCriteria)
//            {
//                System.out.println(x);
//            }
//            System.out.println("-----------------");
            criteriaList.add(new Criteria(splittedCriteria[0],splittedCriteria[1]));
        }
        return criteriaList;
//        return null;
    }
}
