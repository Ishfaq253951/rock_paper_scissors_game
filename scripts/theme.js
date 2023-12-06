const iconBtn = document.getElementById("theme-icon");
const body = document.querySelector("body");

iconBtn.addEventListener("click", () => {
	if (iconBtn.classList.contains("dark")) {
		iconBtn.classList.remove("dark");
		body.classList.remove("dark");
	} else {
		iconBtn.classList.add("dark");
		body.classList.add("dark");
	}
});
