
var video = document.getElementById("video");
//1. Déclencher la lecture automatique de la vidéo une fois entièrement visible sur la page

// Mise en place d'un écouteur qui détecte le niveau de scroll atteint et déclenche l'instruction pause ou lecture
	
window.addEventListener("scroll",function(){
	var video= document.getElementById("video");
		
		if (window.pageYOffset > 627) {
			video.play();
			console.log("lecture");
		}
		else{
			video.pause();
			console.log("pause");
		}
},false);


//2.Une fois la vidéo terminée, faire apparaître un bouton permettant de relancer la lecture : évènement "onended" et onemptied

	function displayPlayButton(){
			var lecture= document.getElementById("lecture");
			lecture.setAttribute("style","");
	}

// Faute de temps j'ai mis un window.location.reload() dans le bouton play

/* 	function playVideo(){
		//lancer la video 
	var video= document.getElementById("video");
		video.addEventListener('click',function(){
		video().play();
	},false);
	lecture.setAttribute("style","visibility:hidden;");

	} */




