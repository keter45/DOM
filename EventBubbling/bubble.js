const divs = document.querySelectorAll("div");
function logClass() {
	// e.stopPropagation();
	console.log(this.id);
}

// divs.forEach((div) => div.addEventListener("click", logClass));
// divs.forEach((div) => div.addEventListener("click", logClass, { capture: true }));
