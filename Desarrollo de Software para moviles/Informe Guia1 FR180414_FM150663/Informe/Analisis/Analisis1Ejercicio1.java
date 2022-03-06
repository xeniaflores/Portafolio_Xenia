import java.util.Scanner;

class Analisis1Ejercicio1 {  
  public static void main(String args[]) { 
    Scanner teclado = new Scanner(System.in);

    System.out.print("Ingrese el primer numero: ");
    int n1 = teclado.nextInt();
    System.out.print("Ingrese el segundo numero: ");
    int n2 = teclado.nextInt();

    if(n1%n2==0 || n2%n1==0){
      System.out.println("Los numeros son divisibles entre si.");
    }else{
      System.out.println("Los numeros NO son divisibles entre si.");
    }
  } 
}