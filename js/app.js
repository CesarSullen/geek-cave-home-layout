// Nav Bar Toggle
const toggleBtn = document.getElementById("toggle-btn");
const bottomPanel = document.getElementById("bottom-panel");
const body = document.body;

toggleBtn.addEventListener("click", () => {
	toggleBtn.classList.toggle("toggled");

	if (
		bottomPanel.style.transform === "translateY(100%)" ||
		bottomPanel.style.transform === ""
	) {
		bottomPanel.style.transform = "translateY(0%)";
	} else {
		bottomPanel.style.transform = "translateY(100%)";
	}

	body.style.overflowY = toggleBtn.classList.contains("toggled")
		? "hidden"
		: "auto";
});

document.querySelectorAll(".panel-link").forEach((link) => {
	link.addEventListener("click", () => {
		toggleBtn.classList.remove("toggled");
		body.style.overflowY = "auto";
		bottomPanel.style.transform = "translateY(100%)";
	});
});

// Interception Observer
const animatedElements = document.querySelectorAll(
	".show-up, .show-down, .show-left, .show-right, .bounce-in, .rotate-left, .rotate-right"
);

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated");
				observer.unobserve(entry.target);
			}
		});
	},
	{ root: null, rootMargin: "0px", threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));
