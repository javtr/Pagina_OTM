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
var a6 = document.getElementById('a6');



a1.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';


btn1.addEventListener('click', () => {


	title.innerHTML = 'OTM Delta Swing';

	title_1.innerHTML = 'Volume information by waves';
	text_1.innerHTML = 'Identify the strength of an impulse or pullback.';

	title_2.innerHTML = 'Exhaustion signals';
	text_2.innerHTML = 'Display buy or sell signals. ';

	title_3.innerHTML = 'Non-resulting effort signals';
	text_3.innerHTML = 'Detect high volume moves with no price result. ';

	imagen.style.backgroundImage = "url('./img/ind_01.gif')";

	a1.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a6.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	
	btnlink.href = './common/features.html#swing';


});

btn2.addEventListener('click', () => {
	title.innerHTML = 'OTM Delta Micro';

	title_1.innerHTML = 'Institutional volumes';
	text_1.innerHTML = 'Efortlessly identify large purchase or sale volumes.';

	title_2.innerHTML = 'Consecutive Bar System';
	text_2.innerHTML = 'Get the buying or selling strength of consecutive bars toward the same direction.';

	title_3.innerHTML = 'Reference thresholds';
	text_3.innerHTML = 'Only focus on the most relevant volumes.';


	imagen.style.backgroundImage = "url('./img/ind_02.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a6.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';


	btnlink.href = './common/features.html#micro';

});

btn3.addEventListener('click', () => {
	title.innerHTML = 'OTM Delta Cumulative';

	title_1.innerHTML = 'Buyer or seller histogram';
	text_1.innerHTML = 'Confirm buying or selling pressure.';

	title_2.innerHTML = 'Buyer or seller climax';
	text_2.innerHTML = 'Identify buying or selling excesses (climax).';

	title_3.innerHTML = '';
	text_3.innerHTML = '';


	imagen.style.backgroundImage = "url('./img/ind_03.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a6.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';

	btnlink.href = './common/features.html#cumulative';

});

btn4.addEventListener('click', () => {

	title.innerHTML = 'OTM Delta Bar';

	title_1.innerHTML = 'Detailed information';
	text_1.innerHTML = 'Get the Delta volume information for each bar.';

	title_2.innerHTML = 'Different ways of analyzing the delta in a single indicator:';
	text_2.innerHTML = '•Accumulated delta •Bar delta •Bidirectional bar delta •Buy and Sell •Footer •Volume delta';

	title_3.innerHTML = '';
	text_3.innerHTML = '';

	imagen.style.backgroundImage = "url('./img/ind_04.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a6.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	
	btnlink.href = './common/features.html#bar';

});

btn5.addEventListener('click', () => {
	title.innerHTML = 'OTM Volume Profile';

	title_1.innerHTML = 'Most traded levels';
	text_1.innerHTML = 'Detect price levels where the market will consolidate.';

	title_2.innerHTML = 'Less traded levels';
	text_2.innerHTML = 'Anticipate low volume levels that trigger large movements.';

	title_3.innerHTML = 'Dynamic Volume Profile';
	text_3.innerHTML = 'Rebuild market movements as if you were in real time.';

	imagen.style.backgroundImage = "url('./img/ind_05.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	a6.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	
	btnlink.href = './common/features.html#profile';

});


btn6.addEventListener('click', () => {
	title.innerHTML = 'OTM VWAP';

	title_1.innerHTML = 'Most traded levels';
	text_1.innerHTML = 'Detect price levels where the market will consolidate.';

	title_2.innerHTML = 'Less traded levels';
	text_2.innerHTML = 'Anticipate low volume levels that trigger large movements.';

	title_3.innerHTML = 'Dynamic Volume Profile';
	text_3.innerHTML = 'Rebuild market movements as if you were in real time.';

	imagen.style.backgroundImage = "url('./img/ind_06.gif')";

	a1.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a2.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a3.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a4.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a5.style.cssText = 'background: #ffffff; color:#0082e6; box-shadow:none';
	a6.style.cssText = 'background: #0082e6; color:#ffffff; box-shadow:0px 0px 15px rgb(0, 0, 0, .25)';
	
	btnlink.href = './common/features.html#vwap';

});

