var num, arreglo, impar=0, pares=0, sumaimpar=0, sumapar=0, sumatodo=0, mayor=0, menor=0;
num = parseInt(prompt("Ingrese un numero de varias cifras",""));

arreglo=num.toString().split("");
//recorrer una matriz
menor=parseInt(arreglo[0]);
mayor=parseInt(arreglo[0]);
for(var i=0; i<arreglo.length; i++)
{
	if(arreglo[i]%2!=0){
		impar=impar+1;
		sumaimpar=sumaimpar+parseInt(arreglo[i]);
	}else{
		pares=pares+1;
		sumapar=sumapar+parseInt(arreglo[i]);
	}

	sumatodo=sumatodo+parseInt(arreglo[i]);
	if(i+1!=arreglo.length){

	if(menor<arreglo[i+1]){
		menor=menor;
	}else{
		menor=arreglo[i+1];
	}

	if(mayor>arreglo[i+1]){
		mayor=mayor;
	}else{
		mayor=arreglo[i+1];
	}
}
}


document.write("<h1>Discusión de Resultados"+"</h1>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>El numero registrado es"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + num +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>Cifra de numeros impares"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + impar +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>Cifra de numeros pares"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + pares +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>La suma de numeros impares"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + sumaimpar +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>La suma de numeros pares"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + sumapar +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>Suma de todas las cifras"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + sumatodo +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>Cifra mayor"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + mayor +"</h3>"+"</div>"+
"</div>"+"<div class=\"row\">"+
	"<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"+"<h3>Cifra menor"+"</h3>"+"</div>"+
	"<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">"+"<h3>" + menor +"</h3>"+"</div>"+
"</div>"
	)