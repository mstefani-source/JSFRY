package com.mycompany.app;

import static org.junit.jupiter.api.Assertions.assertTrue;
import java.nio.file.Paths;
import java.nio.file.Path;
import java.nio.file.Files;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class MyFileTest {

    @Test
    void chekIfFileCreated() {
        try{

            MyFile file = new MyFile();
            System.out.println("createFile result " + file.createFile());
            
            System.out.println("result of deleting " + file.deleteFile());
            
        }catch(Exception e){
            e.printStackTrace();
        } finally {
            System.out.println("final");
        }
    }
}
