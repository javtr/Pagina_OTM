
// var item = document.getElementById('price');
var fecha = document.getElementById('date');


// function pulsar1() {
// 	item.innerHTML = '0.5 $';
//     item2.innerHTML = '0.5 $';
// }



let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// alert("algo");


if (month < 10) {
	fecha.innerHTML = `${day}/0${month}/${year}`;
} else {
	fecha.innerHTML = `${day}/${month}/${year}`;
}