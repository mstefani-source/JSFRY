package com.mycompany.app;

public class Complitable {
    public int longNetworkProcess(int value){
        try {
            System.out.println("longNetworkProcess start");
            Thread.sleep(2000);
            System.out.println("longNetworkProcess done");
        } catch(InterruptedException e) {
            e.printStackTrace();
        }
        return value * 10;
    }    
}
