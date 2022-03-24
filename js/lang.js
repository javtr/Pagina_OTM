
var botonIdioma = document.querySelector('#btn-lang');

botonIdioma.addEventListener('click', () => {

	let id = botonIdioma.checked;
	
    console.log(id);
    
    if(id==true){
		location.href= "es/index.html";

	}
	else{
		location.href= "../index.html";
	}




});
