import javax.swing.plaf.ColorUIResource;

public class Fruits {
    private String name;
    private String colour;
    private int weight;
    private boolean isTasty;
    private int price;
    private int quantity;

    // public Fruits(String name, String colour,int weight, boolean isTasty,int price,int quantity) { 
    //     this.name = name;
    //     this.colour = colour;
    //     this.weight = weight;
    //     this.isTasty = isTasty;
    //     this.price = price;
    //     this.quantity = quantity;
 
    }
    public void addQuantity(int weight,int quantity,int price) {

     int newQuantity = 1+ quantity;

        System.out.println( "new quantity is " + newQuantity);
        System.out.println( "weight added one is " + newQuantity * weight);
        System.out.println("price added one is " +newQuantity * price);
        
    }

    public void removeQuantity(int weight,int quantity,int price) {

        int quantitySubOne = quantity - 1;
        System.out.println( quantitySubOne);
        System.out.println("weight subed one is " + quantitySubOne * weight);
        System.out.println("price subbed one is " + quantitySubOne * price);
    }
}