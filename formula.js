// Simple Calculator
let display = document.getElementById("display");

let buttons = [...document.getElementsByClassName("button")];

buttons.map((button) => {
	button.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "C":
				display.innerText = "";
				break;
			case "←":
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
				}
				break;
			case "Calculate":
				try {
					display.innerText = calculate();
				} catch {
					display.innerText = "Error!";
				}
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});

// Other Calculators
var active = "SMC";
function activate(show) {
	for (let index = 0; index < areaCalcs.length; index++) {
		const element = areaCalcs[index];
		document.getElementById(element).classList.add("hidden");
	}
	active = show;
	document.getElementById(show).classList.remove("hidden");
}

const areaCalcs = ["SMC", "ACC", "ACR", "ACD", "AR"];

function calculate() {
	switch (active) {
		case "SMC":
			return smc(display);
			break;
		case "ACC":
			acc(document.getElementById("result2"));
			break;
		case "ACR":
			acr(document.getElementById("result3"));
			break;
		case "ACD":
			acd(document.getElementById("result4"));
			break;
		case "AR":
			ar(
				document.getElementById("lth"),
				document.getElementById("wth"),
				document.getElementById("result5")
			);

			break;
	}
}

// Area of a circle with circumference
function acc(view) {
	circumference = parseFloat(view.value);
	radius = circumference / 2 / Math.PI; //2πr = circumference
	area = Math.PI * Math.pow(radius, 2);
	view.value = area;
}

// Area of a circle with radius
function acr(view) {
	radius = parseFloat(view.value);
	area = Math.PI * Math.pow(radius, 2);
	view.value = area;
}

// Area of a circle with diameter
function acd(view) {
	diameter = parseFloat(view.value);
	radius = diameter / 2;
	area = Math.PI * Math.pow(radius, 2);
	view.value = area;
}

// Area of a rectangle
function ar(len, wid, res) {
	length = parseFloat(len.value);
	width = parseFloat(wid.value);
	area = length * width;
	res.value = area;
}

function smc(disp) {
	return eval(disp.innerText);
}
