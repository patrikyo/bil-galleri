document.addEventListener("DOMContentLoaded", function(event){ 
	var kolumnerkontainer = document.getElementsByClassName("kolumner-kontainer")[0];
	var allaKollumner = document.querySelectorAll(".kolumner-kontainer > div");

	kolumnerkontainer.addEventListener("click" , function(e){
		if(e.target.nodeName === "DIV"){
			allaKollumner.forEach(function(ele){
				if(e.target.className !== ele.className){
					ele.classList.add("minimera");	
					ele.children[0].style.display = "none";
				}
			goemGradient(e.target.classList);
			setTimeout(visaDoldaElement, 2000, e.target.children);	
			});
		}
		else if(e.target.nodeName === "IMG"){
			allaKollumner.forEach(function(ele){
			if(e.target.parentElement.className !== ele.className){
				ele.classList.add("minimera");	
				ele.children[0].style.display = "none";
			}
			goemGradient(e.target.parentElement.classList);
			setTimeout(visaDoldaElement, 2000, e.target.parentElement.children);
			});
		}
		if(e.target.nodeName === "DIV"){
			document.querySelector("."+e.target.className).children[3].addEventListener("click" , aktivVy);
		}
		else{
			document.querySelector("."+e.target.parentElement.className).children[3].addEventListener("click" , aktivVy);
		}	
	});
	function visaDoldaElement(target){
		target[1].style.display = "block";
		target[2].classList.add("visa-bild");
		target[3].classList.add("tillbaka-knapp");		
	}
	function aktivVy(e){
		var nuvarande = e.target.parentElement;
		allaKollumner.forEach(function(ele){
			ele.classList.remove("minimera");	
			ele.children[0].style.display = "initial";
			if(ele === nuvarande){
				nuvarande.children[1].style.display = "none";
				nuvarande.children[2].classList.remove("visa-bild");
				nuvarande.children[3].classList.remove("tillbaka-knapp");
			}
		});
		switch(nuvarande.className){
		case "porsche": nuvarande.classList.add("porscheHover");
			break;
		case "ferrari": nuvarande.classList.add("ferrariHover");
			break;
		case "lamborghini": nuvarande.classList.add("lamborghiniHover");
			break;
		case "mercedes": nuvarande.classList.add("mercedesHover");
			break;
		case "audi": nuvarande.classList.add("audiHover");
			break;	
		}
	}
});