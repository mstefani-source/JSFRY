import java.util.HashMap;
import java.util.LinkedList;

public class Nums {
    public static LinkedList<Integer> findDouble(int[] arr){
        LinkedList<Integer> res = new LinkedList<Integer>();
        HashMap<Integer, Integer> map = new HashMap<Integer,Integer>();
        for (int j : arr) {
            map.merge(j, 1, Integer::sum);
        }
        for (Integer i: map.keySet()){
            if ( map.get(i) > 1 ){
                res.add(i);
            }
        }
        return res;
    }
}
