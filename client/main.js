function log(...msg) {
	console.log(...msg)
}

function toArray(list) {
	return Array.prototype.slice.call(list)
}

const videoPlayerContainer = document.getElementById("video-player-container")
const videoPlayer = document.getElementById("video-player")
const videoPlayerCloseBtn = document.getElementById("video-player-close-button")
const projects = toArray(document.getElementsByClassName("project"))

videoPlayerContainer.addEventListener("click", () => {
	videoPlayerContainer.classList.add("hidden")
})

function handleEscKey(e = null) {
	if (e.key === "Escape") {
		if (!videoPlayerContainer.classList.contains("hidden")) {
			videoPlayerContainer.classList.add("hidden")
		}
	}
}
document.addEventListener("keydown", handleEscKey)
videoPlayer.addEventListener("keydown", () => {
	log("PAPITAS")
})

projects.forEach((project) => {
	const videoButton = project.querySelector(".video-button")
	if (!videoButton) return
	const url = videoButton.dataset.url
	if (!url) return
	videoButton.addEventListener("click", (e) => {
		e.preventDefault()
		videoPlayerContainer.classList.remove("hidden")
		videoPlayer.src = url
	})
})

videoPlayerCloseBtn.addEventListener("click", () => {
	videoPlayerContainer.classList.add("hidden")
})
