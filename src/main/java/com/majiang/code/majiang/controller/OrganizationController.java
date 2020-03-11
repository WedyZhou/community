package com.majiang.code.majiang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OrganizationController {
    @GetMapping("/Organization")
    public String getOrganizationHtml(){
        return "Organization";
    }

}
