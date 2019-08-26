function run() {
	let elems = document.querySelectorAll("*");
	let scrollElems = filterElems(elems, "data-scroll", "true");

	addEventListenerToList(scrollElems, "click", smoothScroll);
}

function filterElems(elems, attribute, data) {
	let arr = [];
	for (let i = 0; i < elems.length; i++) {
		if (elems[i].getAttribute(attribute) == data) {
			arr.push(elems[i]);
		}
	}
	return arr;
}

function addEventListenerToList(datalist, evt, func) {
	let arr = datalist;
	for (let i = 0; i < datalist.length; i++) {
		arr[i].addEventListener(evt, func, false);
	}
}

function smoothScroll(evt) {
	evt.preventDefault();

	let startId = evt.currentTarget;
	let id = evt.currentTarget.getAttribute("href").replace("#", "");
	let targetId = document.getElementById(id);
	let startPos = startId.offsetTop;
	let targetPos = targetId.offsetTop;
	let len = Math.abs(startPos - targetPos);

	//Can play with timeinterval and parts for a better smooth effect
	let timeinterval = 10;
	let parts = 50;

	let inc = Math.abs(len / parts);
	let sum = 0;
	let i = 0;

	let scrollFunc = setInterval(
		function () {
			if (i == parts) {
				clearInterval(scrollFunc);
			}

			document.documentElement.scrollTop = startPos + sum;

			if (startPos > targetPos) {
				sum -= inc;
			} else {
				sum += inc;
			}

			i++;

		}, timeinterval);

}

window.onload = run;
