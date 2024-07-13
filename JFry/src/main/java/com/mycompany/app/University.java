package com.mycompany.app;

import java.util.ArrayList;

class University {
    private String name;
    private ArrayList<Student> students;

    public University(String name){
        this.name = name;
        students = new ArrayList<>();
    }

    public void addStudent(Student student){
        students.add(student);
    }
    @Override
    public String toString(){
        return this.name + ":" + this.students;
    }
}