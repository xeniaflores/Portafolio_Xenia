import java.util.Scanner;

class Analisis1Ejercicio4 {  
  public static void main(String args[]) { 
    Scanner teclado = new Scanner(System.in);

    System.out.println("¿Cuantos puntos desea cargar?: ");
    int cant = teclado.nextInt();
    
    int[][] puntos = new int[cant][2];

    for(int i=0;i<cant;i++){
      System.out.print("Punto numero"+(i+1)+": ");
      System.out.print("Ingrese la coordenada X: ");
      puntos[i][0] = teclado.nextInt();
      System.out.print("Ingrese la coordenada Y: ");
      puntos[i][1] = teclado.nextInt();

      System.out.println("Punto: ("+puntos[i][0]+","+puntos[i][1]+")");
    }

    int c1=0;//cuadrante 1
    int c2=0;//cuadrante 2
    int c3=0;//cuadrante 3
    int c4=0;//cuadrante 4
    
    for(int i=0;i<cant;i++){
      if(puntos[i][0]>0 && puntos[i][1]>0){
        c1++;
      }else if(puntos[i][0]<0 && puntos[i][1]>0){
        c2++;
      }else if(puntos[i][0]<0 && puntos[i][1]<0){
        c3++;
      }else if(puntos[i][0]>0 && puntos[i][1]<0){
        c4++;
      }
    }

    System.out.println("Puntos en el cuadrante I: "+c1);
    System.out.println("Puntos en el cuadrante II: "+c2);
    System.out.println("Puntos en el cuadrante III: "+c3);
    System.out.println("Puntos en el cuadrante IV: "+c4);
  } 
}