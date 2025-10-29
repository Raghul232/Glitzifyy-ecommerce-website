import java.util.Scanner;

public class InvoiceGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter customer name: ");
        String name = scanner.nextLine();

        System.out.print("Enter product name: ");
        String product = scanner.nextLine();

        System.out.print("Enter quantity: ");
        int qty = scanner.nextInt();

        System.out.print("Enter price per unit: ₹");
        double price = scanner.nextDouble();

        double total = qty * price;

        System.out.println("\n🧾 Invoice");
        System.out.println("Customer: " + name);
        System.out.println("Product: " + product);
        System.out.println("Quantity: " + qty);
        System.out.println("Total: ₹" + total);
        System.out.println("✅ Order confirmed. Thank you!");
    }
}