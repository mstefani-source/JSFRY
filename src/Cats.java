public class Cats {
    private static int catCount = 0;
    private String fullName;


    public static void addNewCat() {
        //write your code here
        ;
        Cats.catCount++;
        ;
    }

    public static int getCatsCount() {
        return Cats.catCount;
    }

    public void setName(String firstName, String lastName) {
        String fullName = firstName + " " + lastName;

        //write your code here
        this.fullName = fullName;
    }
}
