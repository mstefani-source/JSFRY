package com.mycompany.app;

public class Circle {
    
    public double x;
    public double y;
    public double radius;

    //write your code here
    public Circle() {

        this.x = 0;
        this.y = 0;
        this.radius = 0;

    }

    public Circle(double centerX, double centerY, double radius) {

        this.x = centerX;
        this.y = centerY;
        this.radius = radius;

    }

    public Circle(double centerX, double centerY, double radius, double width, double color) {

        this.x = centerX;
        this.y = centerY;
        this.radius = radius;

    }

}
