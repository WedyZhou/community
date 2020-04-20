package com.majiang.code.majiang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping("/Index")
    public  String GetIndexHtml( Model model){
        return "index";
    }
    @GetMapping("/Contact")
    public  String GetContactHtml( Model model){
        return "Contact";
    }
    @GetMapping("/Guest")
    public  String GetGuestHtml( Model model){
        return "Guest";
    }
    @GetMapping("/HotelAndTraffic")
    public  String GetHotelAndTrafficHtml( Model model){
        return "HotelAndTraffic";
    }
    @GetMapping("/Organization")
    public  String GetOrganizationHtml( Model model){
        return "Organization";
    }
    @GetMapping("/Paper")
    public  String GetPaperHtml( Model model){
        return "Paper";
    }
    @GetMapping("/Plan")
    public  String GetPlanHtml( Model model){
        return "Plan";
    }
    @GetMapping("/Register")
    public  String GetRegisterHtml( Model model){
        return "Register";
    }
    @GetMapping("/Support")
    public  String GetSupportHtml( Model model){
        return "Support";
    }
    @GetMapping("/Wall_show")
    public  String GetWall_showHtml( Model model){
        return "Wall_show";
    }
    @GetMapping("/ESTC2020")
    public  String getESTC_2020(){
        return "ESTC2020";

    }
}
