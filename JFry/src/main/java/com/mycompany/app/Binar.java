package com.mycompany.app;

import java.io.BufferedReader;
import java.io.InputStreamReader;


public class Binar {
	private long decimal;

	Binar(long decimal){
		this.decimal = decimal;
	}

	public long getDecimal() {
		return decimal;
	}
	public void setDecimal(long decimal) {
		this.decimal = decimal;
	}

	public String getBinarString(){
		long decimal = getDecimal();
		String binar = "";
		int outputBin;
		if(decimal == 0){
			return "0";
		}
	
		while(decimal !=0){
			binar = decimal%2 + "" + binar;
			decimal = decimal / 2 ;
		}
		outputBin = Integer.parseInt(binar);
		return String.format("%08d", outputBin);
	}
	public double devide(int a, int b){
		double res = (a * 1.0) / b;
		return res;
	}

    public static boolean readBoolean() throws Exception {
        //write your code here
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean out = Boolean.parseBoolean(br.readLine());
        return out;
    }
}
