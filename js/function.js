
//4.a.La fonction Each de Jquery :

function iterate(variable){
	var variable;
		if(Array.isArray(variable)&& (variable !== null)){
			alert("ok tab");
			var lenght=variable.lenght;
			  alert("la");
				for(i=0;i<lenght;i++){
					//tester la fonction dans la console ou dans une div avec innerHTML
					console.log(variable[i]);
			}
		}
		else if(typeof variable === "object"&& (variable !== null)){
		alert("ok obj");
		var i=variable[0];
			for(i in variable){
				////tester la fonction dans la console ou dans une div avec innerHTML
				console.log(i+":"+variable[i]);
			}	
		}
		else{
		alert("le type de variable doit être un objet ou un tableau non nul");
		}	
	return variable[i];
	}
//4.b.La fonction implémentée sur le navigateur

function iterateOnWebsite(variable){
	
	//var variable=prompt("Entrez un tableau ou un objet :","");
	var variable = document.getElementById("entry").value;
	console.log(variable);
		if(Array.isArray(variable)&& (variable !== null)){
			alert("ok tab");
			var lenght=variable.lenght;
				for(i=0;i<lenght;i++){
					console.log(variable[i]);
			}
		}
		else if(typeof variable =="object"&& (variable !== null)){
		alert("ok obj");
		var i=variable[0];
			for(i in variable){
				console.log(i+":"+variable[i]);
				alert(i+":"+variable[i]);
			}	
		}
		else{
		alert("le type de variable doit être un objet ou un tableau non nul");
		}	
	return variable[i];
	alert(variable[i]);
	}