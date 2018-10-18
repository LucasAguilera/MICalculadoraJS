var num1;
var num2;
var operador;
var res = 0;
var bandera=false;
var aux;


calculadora = function(){
	var display = document.getElementById("display");
	var on_c = document.getElementById("on");
	var signos = document.getElementById("sign");
	var raiz = document.getElementById("raiz");
	var division = document.getElementById("dividido");
	var siete = document.getElementById("7");
	var ocho = document.getElementById("8");
	var nueve = document.getElementById("9");
	var multi = document.getElementById("por");
	var cuatro = document.getElementById("4");
	var cinco = document.getElementById("5");
	var seis = document.getElementById("6");
	var resta = document.getElementById("menos") 
	var uno = document.getElementById("1");
	var dos = document.getElementById("2");
	var tres = document.getElementById("3");
	var cero = document.getElementById("0");
	var punt = document.getElementById("punto");
	var igu = document.getElementById("igual");
	var suma = document.getElementById("mas");
	
	/*----------------------------------------*/
	
	
		//-------------------------------------------------------------------------
		document.getElementById("1").addEventListener("mouseup", mouseDown1);
		document.getElementById("1").addEventListener("mousedown", mouseUp1);
		document.getElementById("2").addEventListener("mouseup", mouseDown2);
		document.getElementById("2").addEventListener("mousedown", mouseUp2);
		document.getElementById("3").addEventListener("mouseup", mouseDown3);
		document.getElementById("3").addEventListener("mousedown", mouseUp3);
		document.getElementById("4").addEventListener("mouseup", mouseDown4);
		document.getElementById("4").addEventListener("mousedown", mouseUp4);
		document.getElementById("5").addEventListener("mouseup", mouseDown5);
		document.getElementById("5").addEventListener("mousedown", mouseUp5);
		document.getElementById("6").addEventListener("mouseup", mouseDown6);
		document.getElementById("6").addEventListener("mousedown", mouseUp6);
		document.getElementById("7").addEventListener("mouseup", mouseDown7);
		document.getElementById("7").addEventListener("mousedown", mouseUp7);
		document.getElementById("8").addEventListener("mouseup", mouseDown8);
		document.getElementById("8").addEventListener("mousedown", mouseUp8);
		document.getElementById("9").addEventListener("mouseup", mouseDown9);
		document.getElementById("9").addEventListener("mousedown", mouseUp9);
		document.getElementById("0").addEventListener("mouseup", mouseDown0);
		document.getElementById("0").addEventListener("mousedown", mouseUp0);
		document.getElementById("on").addEventListener("mousedown", mouseUpOn_c);
		document.getElementById("on").addEventListener("mouseup", mouseDownOn_c);
		document.getElementById("raiz").addEventListener("mousedown", mouseDownRaiz);
		document.getElementById("raiz").addEventListener("mouseup", mouseUpRaiz);
		document.getElementById("dividido").addEventListener("mousedown", mouseDownDividido);
		document.getElementById("dividido").addEventListener("mouseup", mouseUpDividido);
		document.getElementById("mas").addEventListener("mousedown", mouseDownSuma);
		document.getElementById("mas").addEventListener("mouseup", mouseUpSuma);
		document.getElementById("menos").addEventListener("mousedown", mouseDownResta);
		document.getElementById("menos").addEventListener("mouseup", mouseUpResta);
		document.getElementById("por").addEventListener("mousedown", mouseDownPor);
		document.getElementById("por").addEventListener("mouseup", mouseUpPor);
		document.getElementById("punto").addEventListener("mousedown", mouseDownPunto);
		document.getElementById("punto").addEventListener("mouseup", mouseUpPunto);
		document.getElementById("sign").addEventListener("mousedown", mouseDownSigno);
		document.getElementById("sign").addEventListener("mouseup", mouseUpSigno);
		
		
		
		
	

	uno.onclick = function(e){

		display.innerHTML = display.innerHTML.substring(0,8);
		
		if(display.textContent == 0){
		display.textContent = "1";
		}else{
			display.textContent = display.textContent + "1" ;
		}
	}
	dos.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "2";
		}else{
			display.textContent = display.textContent + "2" ;
		}
	}
	tres.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "3";
		}else{
			display.textContent = display.textContent + "3" ;
		}
	}
	cuatro.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "4";
		}else{
			display.textContent = display.textContent + "4" ;
		}
	}
	cinco.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "5";
		}else{
			display.textContent = display.textContent + "5" ;
		}
	}
	seis.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "6";
		}else{
			display.textContent = display.textContent + "6" ;
		} 
	}
	siete.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "7";
		}else{
			display.textContent = display.textContent + "7" ;
		} 
	}
	ocho.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "8";
		}else{
			display.textContent = display.textContent + "8" ;
		}
	}
	nueve.onclick = function(e){
		display.innerHTML = display.innerHTML.substring(0,8);
		if(display.textContent == 0){
		display.textContent = "9";
		}else{
			display.textContent = display.textContent + "9" ;
		} 
	}
	cero.onclick = function(e){
		if(display.textContent =="0"){
			display.textContent = "0";
		}else {
			display.textContent = display.textContent + "0";
		}
		 
	}
	punt.onclick = function(e){
				
		if(display.textContent != "0" && display.textContent.indexOf(".") < 0 && display.textContent != "")
		{
			display.textContent = display.textContent + "." ;
		}
				
	}

	function mouseDown1() {document.getElementById("1").style.transform = "scaleX(1)";}
	function mouseUp1() {document.getElementById("1").style.transform = "scaleX(0.9)";}

	function mouseDown2() {document.getElementById("2").style.transform = "scaleX(1)";}
	function mouseUp2() {document.getElementById("2").style.transform = "scaleX(0.9)";}

	function mouseDown3() {document.getElementById("3").style.transform = "scaleX(1)";}
	function mouseUp3() {document.getElementById("3").style.transform = "scaleX(0.9)";}

	function mouseDown4() {document.getElementById("4").style.transform = "scaleX(1)";}
	function mouseUp4() {document.getElementById("4").style.transform = "scaleX(0.9)";}

	function mouseDown5() {document.getElementById("5").style.transform = "scaleX(1)";}
	function mouseUp5() {document.getElementById("5").style.transform = "scaleX(0.9)";}

	function mouseDown6() {document.getElementById("6").style.transform = "scaleX(1)";}
	function mouseUp6() {document.getElementById("6").style.transform = "scaleX(0.9)";}

	function mouseDown7() {document.getElementById("7").style.transform = "scaleX(1)";}
	function mouseUp7() {document.getElementById("7").style.transform = "scaleX(0.9)";}

	function mouseDown8() {document.getElementById("8").style.transform = "scaleX(1)";}
	function mouseUp8() {document.getElementById("8").style.transform = "scaleX(0.9)";}

	function mouseDown9() {document.getElementById("9").style.transform = "scaleX(1)";}
	function mouseUp9() {document.getElementById("9").style.transform = "scaleX(0.9)";}

	function mouseDown0() {document.getElementById("0").style.transform = "scaleX(1)";}
	function mouseUp0() {document.getElementById("0").style.transform = "scaleX(0.9)";}

	function mouseDownOn_c() {document.getElementById("on").style.transform = "scaleX(1)";}
	function mouseUpOn_c() {document.getElementById("on").style.transform = "scaleX(0.9)";}

	function mouseDownRaiz() {document.getElementById("raiz").style.transform = "scaleX(1)";}
	function mouseUpRaiz() {document.getElementById("raiz").style.transform = "scaleX(0.9)";}
	
	function mouseDownDividido() {document.getElementById("dividido").style.transform = "scaleX(1)";}
	function mouseUpDividido() {document.getElementById("dividido").style.transform = "scaleX(0.9)";}

	function mouseDownSuma() {document.getElementById("mas").style.transform = "scaleX(0.9)";}
	function mouseUpSuma() {document.getElementById("mas").style.transform = "scaleX(1)";}

	function mouseDownResta() {document.getElementById("menos").style.transform = "scaleX(0.9)";}
	function mouseUpResta() {document.getElementById("menos").style.transform = "scaleX(1)";}

	function mouseDownPor() {document.getElementById("por").style.transform =  "scaleX(0.9)";}
	function mouseUpPor() {document.getElementById("por").style.transform = "scaleX(1)";}

	function mouseDownPunto() {document.getElementById("punto").style.transform =  "scaleX(0.9)";}
	function mouseUpPunto() {document.getElementById("punto").style.transform = "scaleX(1)";}

	function mouseDownSigno() {document.getElementById("sign").style.transform =  "scaleX(0.9)";}
	function mouseUpSigno() {document.getElementById("sign").style.transform = "scaleX(1)";}
	
	
	


	signos.onclick = function(e){
		if(display.textContent != "0" && display.textContent.indexOf("-") < 0 && display.textContent != "")
		{
			display.textContent = "-"+display.textContent;
		}
	}
	on_c.onclick = function(e){
			resetear();
			
	} 
	suma.onclick = function(e){
		num1 = display.textContent;
		operador= "+";
		limpiar();		
	}
	resta.onclick = function(e){
		num1 = display.textContent;
		operador= "-";
		limpiar();		
	}
	
	igu.onclick = function(e){
		num2 =  display.textContent;
		//limpiar();
		calcular();
		
	}
	multi.onclick = function(e){
		num1 = parseFloat(display.textContent);
		operador= "*";
		limpiar();		
	}
	division.onclick = function(e){
		num1 = display.textContent;
		operador= "/";
		limpiar();		
	}


		

	}
	

 
 function limpiar(){
 	display.textContent = "0";
 }
 function resetear(){
 	display.textContent = "0";
 	num1 = 0;
	num2 = 0;
 	operador = "";
 	bandera=false;
 	aux=0;
 	res=0;
 	

 }
 
function calcular(){
	
	switch (operador) {
		case "+":
								
			if(bandera == false)
				{
				 res= parseFloat(num1) + parseFloat(num2);
				 aux=parseFloat(num2);
				 bandera = true;
				}
				else{
					res+= aux;
					console.log(res,num1," Suma");
				}
			break;
		case "-":
			if(bandera == false)
				{
				 res= parseFloat(num1) -  parseFloat(num2);
				 aux=parseFloat(num2);
				 bandera = true;
				}
				else{
					res-= aux;
					console.log(res,num1,"Resta");
				} 
			break;
		case "*":
			if(bandera == false)
				{
				 res= parseFloat(num1) *  parseFloat(num2);
				 aux=parseFloat(num2);
				 bandera = true;
				}
				else{
					res*= aux;
					console.log(res,num1,"Multi");
				} 
			break;
			
		case "/":
			if(bandera == false)
				{
				 res= parseFloat(num1) /  parseFloat(num2);
				 aux=parseFloat(num2);
				 bandera = true;
				}
				else{
					res/= aux;
					console.log(res,num1,'Division');
				} 
			break; 
			
	}
	limpiar();
	console.log(res);
	display.textContent = res;
}
 
 