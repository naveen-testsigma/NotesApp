package com.example.notes.criteria;

import com.example.notes.constants.Operators;
import com.example.notes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class BaseSpecificationBuilder {
    public List<Criteria> criteriaList = new ArrayList<>();
    @Autowired
    UserService userService;
    public List<Criteria> builder(String data)
    {
        criteriaList.clear();
        String userName=((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        String userId= new String(String.valueOf((userService.getUserIdFromEmailID(userName))));
        criteriaList.add(new Criteria("id",Operators.COLON,userId));
        String regex = "(.*?):(.*?),";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(data);

        while (matcher.find()) {
            System.out.println(matcher);
            String name = matcher.group(1);
            String value = matcher.group(2);
            criteriaList.add(new Criteria(name, Operators.COLON, value));
        }
        return criteriaList;
    }
}
