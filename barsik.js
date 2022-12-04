
var num1 = 0;
var num2 = 1;
var num3 = -1;
var speed1 = 10;
var speed2 = 200;
var play = 1;
var play1;
var num = 0;
var auto = 1;
var prog = document.getElementById("a");
var prog1 = document.getElementById("a1");
var prog2 = document.getElementById("a2");
var n = n1 = n2 = 0;
var sea = document.getElementById("sea");
var au = document.createElement("audio");
		au.src = "foto/Natural_-_Meditate_(musmore.com).mp3"
		au.loop = true;
		au.volume = 0.00;
var au1 = document.createElement("audio");
		au1.src = "foto/sound.mp3";
		au1.loop = true;
		au1.volume = 0.00;

var t = setTimeout(f, 0);
function f () {
		if (play == -1) {
				num = 1;
				return;
		};
		n++;
		prog.value = n;
		if (n == prog.max) {  /*
				prog.style.webkitprogressbar = arr[num1];
				prog.style.webkitprogressvalue = arr[num2]; 
				n = 0;
				num1++;
				num2++;
				if (num1 == arr.length){
						num1 = 0;
				};
				if (num2 == arr.length){
						num2 = 0;
				}; */
				setTimeout(f1, speed2);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(f, speed1);
};
function f1 () {
		if (play == -1) {
				num = 2;
				return;
		};
		n1++;
		prog1.value = n1;
		if (n1 == prog1.max) {
				setTimeout(f2, speed2);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(f1, speed1);
};
function f2 () {
		if (play == -1) {
				num = 3;
				return;
		};
		n2++;
		prog2.value = n2;
		if (n2 == prog2.max) { /*
				n = n1 = n2 = 0;
				prog1.value = n1;
				prog2.value = n2; */
				setTimeout(function () {fsea(1); }, 500);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(f2, speed1);
};
function fsea (_a) {
		if (_a == 1) {
				if (play == 1) {
						setTimeout(g2, 0);
						return;
				}
				else {
						if(num3 == 1 && au1.volume != 0){
								if(au1.volume != 1) {
										au1.pause();
								}
								au1.volume = 1;
								fsound(2);
						}
						sea.className = "sea2 progress";
						au.play();
						aup1(au, 0);
						num = 4;
						return;
				}
		}
		if (_a == 0) {
				sea.className = "sea1 progress";
				aup2(au, 0);
				if (play1 == 1){
						fsound(0);
				}
				setTimeout(g2, 500);
				return;
		}
}
function aup1 (_a, _b) {
		console.log(_a.volume);
		_a.volume += 0.01;
		_a.volume + _b;
		if ((_a.volume > 0.99)) {
				_a.volume = 1;
				_a.volume + _b;
				return;
		}
		setTimeout(function() { aup1(_a, _b); }, 10);  
}
function aup2 (_a, _b) {
		console.log(_a.volume);
		_a.volume -= 0.01;
		_a.volume + _b;
		if (_a.volume < 0.01) {
				_a.volume = 0;
				_a.volume + _b;
				_a.pause();
				play1--;
				return;
		};
		setTimeout(function() { aup2(_a, _b); }, 10);
}
function g2 () {
		if (play == -1) {
				num = 5;
				return;
		};
		n2--;
		prog2.value = n2;
		if (n2 == 0) {
				setTimeout(g1, speed2);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(g2, speed1);
};
function g1 () {
		if (play == -1) {
				num = 6;
				return;
		};
		n1--;
		prog1.value = n1;
		if (n1 == 0) {
				setTimeout(g, speed2);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(g1, speed1);
};
function g () {
		if (play == -1) {
				num = 7;
				return;
		};
		n--;
		prog.value = n;
		if (n == 0) {
				setTimeout(f, 500);
				if (auto == -1) {
						play = -1;
						bt6.style.backgroundColor = "rgb(63, 172, 245)";
				}
				return;
		};
		setTimeout(g, speed1);
};
var bt1 = document.getElementById("bt1");
bt1.addEventListener("click", fspeed1);
function fspeed1 () {
		speed1 = 30;
		speed2 = 600;
		bt2.style.backgroundColor = "initial";
		bt3.style.backgroundColor = "initial";
		bt4.style.backgroundColor = "initial";
		bt5.style.backgroundColor = "initial";
		bt1.style.backgroundColor = "rgb(63, 172, 245)";
};
var bt2 = document.getElementById("bt2");
bt2.addEventListener("click", fspeed2);
function fspeed2 () {
		speed1 = 20;
		speed2 = 400;
		bt1.style.backgroundColor = "initial";
		bt3.style.backgroundColor = "initial";
		bt4.style.backgroundColor = "initial";
		bt5.style.backgroundColor = "initial";
		bt2.style.backgroundColor = "rgb(63, 172, 245)";
};
var bt3 = document.getElementById("bt3");
bt3.addEventListener("click", fspeed3);
function fspeed3 () {
		speed1 = 10;
		speed2 = 200;
		bt1.style.backgroundColor = "initial";
		bt2.style.backgroundColor = "initial";
		bt4.style.backgroundColor = "initial";
		bt5.style.backgroundColor = "initial";
		bt3.style.backgroundColor = "rgb(63, 172, 245)";
};
var bt4 = document.getElementById("bt4");
bt4.addEventListener("click", fspeed4);
function fspeed4 () {
		speed1 = 5;
		speed2 = 100;
		bt1.style.backgroundColor = "initial";
		bt2.style.backgroundColor = "initial";
		bt3.style.backgroundColor = "initial";
		bt5.style.backgroundColor = "initial";
		bt4.style.backgroundColor = "rgb(63, 172, 245)";
};
var bt5 = document.getElementById("bt5");
bt5.addEventListener("click", fspeed5);
function fspeed5 () {
		speed1 = 1;
		speed2 = 20;
		bt1.style.backgroundColor = "initial";
		bt2.style.backgroundColor = "initial";
		bt3.style.backgroundColor = "initial";
		bt4.style.backgroundColor = "initial";
		bt5.style.backgroundColor = "rgb(63, 172, 245)";
};
var bt6 = document.getElementById("bt6");
bt6.addEventListener("click", ifplay);
function ifplay () {
		if (au.volume < 1 && au.volume != 0) {
				return;
		}
		play = -play;
		if (play == 1) {
				bt6.style.backgroundColor = "initial";
				if (num == 1){
						setTimeout(f, 0);
				}
				else if (num == 2) {
						setTimeout(f1, 0);
				}
				else if (num == 3) {
						setTimeout(f2, 0);
				}
				else if (num == 4) {
						setTimeout(function () {fsea(0); }, 0);
				}
				else if (num == 5) {
						setTimeout(g2, 0);
				}
				else if (num == 6) {
						setTimeout(g1, 0);
				}
				else if (num == 7) {
						setTimeout(g, 0);
				}
				num = 0;
		}
		else {
				bt6.style.backgroundColor = "rgb(63, 172, 245)";
		};
};
var bt7 = document.getElementById("bt7");
bt7.addEventListener("click", fauto);
function fauto () {
		auto = -auto;
		if (auto == -1){
				bt7.style.backgroundColor = "initial";
		}
		else {
				bt7.style.backgroundColor = "rgb(63, 172, 245)";
		}
};
var sound = document.getElementById("sound");
sound.addEventListener("click", fsound);
function fsound (_a) {
		if (_a == 0){
				num3 = -num3;
				au1.play();
				aup1(au1, 1);
				sound.style.backgroundImage = 'url("foto/pngegg\(2\).png")';
				return;
}
		if (au1.volume > 0 && au1.volume != 1) {
				return;
		}
		if(au.volume != 0){
				alert("Other musik is playing");
				return;
		}
		num3 = -num3;
		if (num3 == 1) {
				au1.play();
				aup1(au1, 1);
				sound.style.backgroundImage = 'url("foto/pngegg\(2\).png")';
		}
		else {
				play1 = _a;
				aup2(au1, 1);
				sound.style.backgroundImage = 'url("foto/pngegg\(4\).png")';
		}
} /*
var { circle, ncircle, circle1, ncircle1, circle2, ncircle2, circle3, ncircle3, circle4, ncircle4 } = newFunction();
circle.addEventListener("click", fcircle(circle, ncircle));
circle1.addEventListener("click", fcircle(circle1, ncircle1));
circle2.addEventListener("click", fcircle(circle2, ncircle2));
circle3.addEventListener("click", fcircle(circle3, ncircle3));
circle4.addEventListener("click", fcircle(circle4, ncircle4));
function newFunction() {
		var ncircle, ncircle1, ncircle2, ncircle3, ncircle4 = 0;
		var circle = document.getElementById("circle");
		var circle1 = document.getElementById("circle1");
		var circle2 = document.getElementById("circle2");
		var circle3 = document.getElementById("circle3");
		var circle4 = document.getElementById("circle4");
		return { circle, ncircle, circle1, ncircle1, circle2, ncircle2, circle3, ncircle3, circle4, ncircle4 };
}

function fcircle (id, number) {
		console.log(1);
		id.style.backgroundColor = arr[number];

}
*/
var arr = ["circle num1", "circle num2", "circle num3", "circle num4"];
var ccount = [[0,1],[0,1],[0,1],[0,1],[0,1]];
var circle = document.getElementById("circle");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");
circle.addEventListener("click", function () {fcircle(circle, 0)});
circle1.addEventListener("click", function () {fcircle(circle1, 1)});
circle2.addEventListener("click", function () {fcircle(circle2, 2)});
circle3.addEventListener("click", function () {fcircle(circle3, 3)});
circle4.addEventListener("click", function () {fcircle(circle4, 4)});
function fcircle (id, count) {
		if (ccount[count][1] == 0) return;
		if (ccount[count][0] == 4) {
				return;
		};
		id.className = arr[ccount[count][0]];
		ccount[count][0]++;
		console.log(ccount);
		if (ccount[0][0] == 4 & ccount[1][0] == 4 & ccount[2][0] == 4 & ccount[3][0] == 4 & ccount[4][0] == 4) {
				setTimeout(function() {circle.className = circle1.className = circle2.className = circle3.className = circle4.className = "circle num0";}, 3500);
				ccount[0][1] = ccount[1][1] = ccount[2][1] = ccount[3][1] = ccount[4][1] = 0;
				ccount[0][0] = ccount[1][0] = ccount[2][0] = ccount[3][0] = ccount[4][0] = 0;
				setTimeout(function () {ccount[0][1] = ccount[1][1] = ccount[2][1] = ccount[3][1] = ccount[4][1] = 1;}, 7500);
				return;
		};
}