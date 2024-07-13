package com.mycompany.app;

public class Parent {
    
    private String name;

    public Parent(String name){
        this.name = name;
    }
    
    void display(){
        System.out.println("I am Parent");
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
