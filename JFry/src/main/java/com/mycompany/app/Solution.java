package com.mycompany.app;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

/* 
Обращенные слова
*/

public class Solution {
    public static List<Pair> result = new LinkedList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        List<String> list = new ArrayList<>();

        BufferedReader bufferedReader = new BufferedReader(new FileReader(reader.readLine()));

        while (bufferedReader.ready()){
            String[] strings = bufferedReader.readLine().split(" ");

            for (int i = 0; i < strings.length; i++) {
                list.add(strings[i]);
            }
        }
        StringBuilder stringBuilder = new StringBuilder();
        int k = 0;
        int h = 1;
        for (; k < list.size(); k++) {
            if (k >= list.size() || h >= list.size()){
                h = k + 1;
            }
            for (; h < list.size(); h++) {

                String s = stringBuilder.append(list.get(h)).reverse().toString();
                if (list.get(k).equals(list.get(h)) || s.equals(list.get(k))){
                    Pair pair = new Pair();
                    pair.first = list.get(k);
                    pair.second = list.get(h);
                    result.add(pair);

                    k = h;
                    k++;
                    h = k;
                }
                stringBuilder.delete(0, s.length());
            }
        }
        System.out.println(result);
    }

    public static class Pair {
        String first;
        String second;

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Pair pair = (Pair) o;

            if (first != null ? !first.equals(pair.first) : pair.first != null) return false;
            return second != null ? second.equals(pair.second) : pair.second == null;

        }

        @Override
        public int hashCode() {
            int result = first != null ? first.hashCode() : 0;
            result = 31 * result + (second != null ? second.hashCode() : 0);
            return result;
        }

        @Override
        public String toString() {
            return first == null && second == null ? "" :
                    first == null ? second :
                            second == null ? first :
                                    first.compareTo(second) < 0 ? first + " " + second : second + " " + first;

        }
    }

}