import java.util.Scanner;

class Analisis1Ejercicio2 {  
  public static void main(String args[]) { 
    Scanner teclado = new Scanner(System.in);

    int[] notas = new int[10];

    for(int i=0;i<10;i++){
      System.out.print("Ingrese la nota "+(i+1)+": ");
      notas[i] = teclado.nextInt();
    }

    int mayores=0;
    int menores=0;
    
    for(int i=0;i<10;i++){
      if(notas[i]>=7 && notas[i]<=10){
        mayores++;
      }else if(notas[i]<7 && notas[i]>=0){
        menores++;
      }      
    }

    System.out.println("Cantidad de notas mayores o iguales a 7: "+mayores);
    System.out.println("Cantidad de notas menores a 7: "+menores);
  } 
}