import java.util.Scanner;

class Analisis1Ejercicio3 {  
  public static void main(String args[]) { 
    Scanner teclado = new Scanner(System.in);

    System.out.println("¿Cuantos numeros desea cargar?: ");
    int cant = teclado.nextInt();
    
    int[] numeros = new int[cant];

    for(int i=0;i<cant;i++){
      System.out.print("Ingrese el numero "+(i+1)+": ");
      numeros[i] = teclado.nextInt();
    }

    int pares=0;
    int impares=0;
    
    for(int i=0;i<cant;i++){
      if(numeros[i]%2==0){
        pares++;
      }else{
        impares++;
      }      
    }

    System.out.println("Cantidad de numeros pares: "+pares);
    System.out.println("Cantidad de numeros impares: "+impares);
  } 
}