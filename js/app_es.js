var imagen = document.getElementById('image-card');

var title = document.querySelector('#title-card');

var title_1 = document.getElementById('title-card-1');
var title_2 = document.getElementById('title-card-2');
var title_3 = document.getElementById('title-card-3');

var text_1 = document.getElementById('p-card-1');
var text_2 = document.getElementById('p-card-2');
var text_3 = document.getElementById('p-card-3');

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');

var btnlink = document.getElementById('indi-btn');

var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var a5 = document.getElementById('a5');


a1.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';


btn1.addEventListener('click', () => {

















	
	title.innerHTML = 'OTM Delta Swing';

	title_1.innerHTML = 'Información de volumen por ondas';
	text_1.innerHTML ='Identifique la fuerza que tiene un impulso o un retroceso.';

	title_2.innerHTML = 'Señales de agotamiento ';
	text_2.innerHTML ='Visualice señales de compra o venta.';

	title_3.innerHTML = 'Señales de esfuerzo no resultado';
	text_3.innerHTML ='Detecte movimientos con alto volumen sin resultado en el precio.';

	imagen.style.backgroundImage = "url('../img/ind_01.gif')";

	a1.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';

	btnlink.href= 'features.html#swing';


});

btn2.addEventListener('click', () => {
	title.innerHTML = 'OTM Delta Micro';

	title_1.innerHTML = 'Volúmenes institucionales';
	text_1.innerHTML ='Visualice fácilmente grandes volúmenes de compra o venta.';

	title_2.innerHTML = 'Sistema de barras consecutivas';
	text_2.innerHTML ='Obtenga la fuerza de compra o venta de barras consecutivas del mismo sentido.';

	title_3.innerHTML = 'Umbrales de referencia';
	text_3.innerHTML ='Fíjese únicamente en los volúmenes más relevantes.';


	imagen.style.backgroundImage = "url('../img/ind_02.gif')";

	a1.style.cssText =  'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';

	btnlink.href= 'features.html#micro';
	
});

btn3.addEventListener('click', () => {
	title.innerHTML = 'OTM Delta Cumulative';

	title_1.innerHTML = 'Histograma comprador o vendedor';
	text_1.innerHTML ='Confirme la presión compradora o vendedora.';

	title_2.innerHTML = 'Clímax comprador o vendedor';
	text_2.innerHTML ='Identifique los excesos de compra o venta (clímax).';

	title_3.innerHTML = '';
	text_3.innerHTML ='';


	imagen.style.backgroundImage = "url('../img/ind_03.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';


	btnlink.href= 'features.html#cumulative';
	
});

btn4.addEventListener('click', () => {
	title.innerHTML = 'OTM Delta Bar';

	title_1.innerHTML = 'Información detallada';
	text_1.innerHTML ='Obtenga la información del volumen Delta de cada barra.';

	title_2.innerHTML = 'Divergencias';
	text_2.innerHTML ='Mediante una señal podrá saber cuando una barra no es coherente con el delta.';

	title_3.innerHTML = 'Umbrales de referencia';
	text_3.innerHTML ='Identifique grandes volúmenes de compra o venta por cada vela.	';

	imagen.style.backgroundImage = "url('../img/ind_04.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';

	btnlink.href= 'features.html#bar';
	
});

btn5.addEventListener('click', () => {
	title.innerHTML = 'OTM Volume Profile';

	title_1.innerHTML = 'Niveles más negociados';
	text_1.innerHTML ='Detecte niveles de precio donde el mercado tendrá consolidaciones.';

	title_2.innerHTML = 'Niveles menos negociados';
	text_2.innerHTML ='Anticipe niveles de bajo volumen que desencadenan grandes movimientos.';

	title_3.innerHTML = 'Perfil de volumen dinámico';
	text_3.innerHTML ='Recree los movimientos del mercado como si estuviera en tiempo real.';

	imagen.style.backgroundImage = "url('../img/ind_05.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';

	btnlink.href= 'features.html#profile';
	
});


