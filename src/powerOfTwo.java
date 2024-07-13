public class powerOfTwo {
    public static boolean isPowerOfTwo(int n){
        return (n & (n - 1)) == 0;
    }
}
