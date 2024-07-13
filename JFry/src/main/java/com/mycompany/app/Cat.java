package com.mycompany.app;

class Cat implements Canfly
{
    
 public int a = getSum();
 public int b = getSum() - a;
 public int c = getSum() - a - b;

 public int getSum(){
  return a + b + c;
 }

@Override
public void fly() {
    // TODO Auto-generated method stub
    System.out.println("i am a Cat and i am flying");
    // throw new UnsupportedOperationException("Unimplemented method 'fly'");
}
}