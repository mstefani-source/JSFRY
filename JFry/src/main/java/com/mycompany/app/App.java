package com.mycompany.app;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class App {

    public static void main(String[] args) throws IOException {
        try {

            BigDecimal bd = new BigDecimal(13);
            BigDecimal two = new BigDecimal(2);

            BigDecimal div = bd.divide(two, BigDecimal.ROUND_DOWN);

            System.out.println(div);

            // Canfly cat = new Cat();
            // cat.fly();
            // ArrayList<Integer> arr = new ArrayList<Integer>();
            // arr.addAll(Arrays.asList(1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6));
            // int start = arr.get(0);
            // int iterator1 = 0;
            // int iterator2 = 1;
            // for (int i = 0; i < arr.size(); i++) {
            // try {
            // if (arr.get(iterator1) >= 0 && arr.get(iterator2) > 0) {
            // arr.add(arr.get(iterator2));
            // arr.remove(iterator2);
            // } else {
            // iterator1++;
            // iterator2++;
            // System.out.println("reach negative" + arr.get(iterator1) + " " +
            // arr.get(iterator2));
            // }
            // } catch (Exception e) {
            // System.out.println("here: " + e.getLocalizedMessage());
            // }
            // }
            // System.out.println("finally: " + arr);

        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
