import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.LinkedList;


public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int firstNumber = Integer.parseInt(br.readLine());
        int secondNumber = Integer.parseInt(br.readLine());
        int thirdNumber = Integer.parseInt(br.readLine());
        int bufNum;

        if(firstNumber > secondNumber){
            bufNum = firstNumber;
            firstNumber = secondNumber;
            secondNumber = bufNum;
        }
        if(firstNumber > thirdNumber){
            bufNum = firstNumber;
            firstNumber = thirdNumber;
            thirdNumber = bufNum;
        }
        if(secondNumber > thirdNumber){
            bufNum = secondNumber;
            secondNumber = thirdNumber;
            thirdNumber = bufNum;
        }


        System.out.println(secondNumber);
        }
}