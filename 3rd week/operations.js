function arithmetic(){
	let x = 5, y = 10;
	let z = x + y
	document.getElementById("p1").innerHTML += z; //returns 15

	z = y - x;
	document.getElementById("p2").innerHTML += z; //returns 5

	z = x * y;
	document.getElementById("p3").innerHTML += z; //returns 50

	z = y / x;
	document.getElementById("p4").innerHTML += z; //returns 2

	z = x % 2;
	document.getElementById("p5").innerHTML += z; //returns 1
};

function indecrement(){
	let x = 5;

	document.getElementById("p12").innerHTML += x++; //post-increment, x will be 5 here and 6 in the next line
	document.getElementById("p22").innerHTML += x;
	document.getElementById("p32").innerHTML += ++x; //pre-increment, x will be 7 here

	document.getElementById("p42").innerHTML += x--; //post-increment, x will be 7 here and 6 in the next line
	document.getElementById("p52").innerHTML += x;
	document.getElementById("p62").innerHTML += --x; //pre-increment, x will be 5 here
};

function withstring(){
	let a = 5, b = "Hello ", c = "World!", d = 10;

	document.getElementById("p13").innerHTML = a + b; //returns "5Hello "

	document.getElementById("p23").innerHTML = b + c; //returns "Hello World!"

	document.getElementById("p33").innerHTML = a + d; //returns 15

	document.getElementById("p43").innerHTML = b + true; //returns "Hello true"

	document.getElementById("p53").innerHTML = c - b; //returns NaN; - operator can only be used with numbers/int
};

function ternary(){
	let a = 10, b = 5;
	let c = a > b? a : b; //value of c would be 10
	let d = a > b? b : a; //value of d would be 5

	document.getElementById("p14").innerHTML = c;

	document.getElementById("p24").innerHTML = d;
};