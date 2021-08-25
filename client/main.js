const SERVER_URL = document.getElementById("server-url").href

function log(...msg) {
	console.log(...msg)
}

function toArray(list) {
	return Array.prototype.slice.call(list)
}

const body = document.querySelector("body")
const videoPlayerContainer = document.getElementById("video-player-container")
const videoPlayer = document.getElementById("video-player")
const videoPlayerCloseBtn = document.getElementById("video-player-close-button")

const readerContainer = document.getElementById("reader-container")
const reader = document.getElementById("reader")
const readerCloseBtn = document.getElementById("reader-close-button")

const projects = toArray(document.getElementsByClassName("project"))

function loadHtmlToReader(url) {
	fetch(url)
		.then(res => {
			return res.text()
		})
		.then(html => {
			reader.innerHTML = html
		})
		.catch(error => {
			console.log(error)
		})
}

function openPlayer(url) {
	body.classList.toggle('noscroll', true)
	videoPlayerContainer.classList.remove("hidden")
	videoPlayer.src = url
}
function closePlayer() {
	body.classList.toggle('noscroll', false)
	videoPlayerContainer.classList.add("hidden")
}

function openReader(url) {
	body.classList.toggle('noscroll', true)
	readerContainer.classList.remove("hidden")
	loadHtmlToReader(url)
}
function closeReader() {
	body.classList.toggle('noscroll', false)
	readerContainer.classList.add("hidden")
}

videoPlayerContainer.addEventListener("click", () => {
	closePlayer()
})
readerContainer.addEventListener("click", () => {
	closeReader()
})
reader.addEventListener("click", (e) => {
	e.stopPropagation()
})

function handleEscKey(e = null) {
	if (e.key === "Escape") {
		if (!videoPlayerContainer.classList.contains("hidden")) {
			closePlayer()
		}
		if (!readerContainer.classList.contains("hidden")) {
			closeReader()
		}
	}
}
document.addEventListener("keydown", handleEscKey)

projects.forEach((project) => {
	const videoButton = project.querySelector(".video-button")
	if (videoButton) {
		const url = videoButton.dataset.url
		if (url) {
			videoButton.addEventListener("click", (e) => {
				e.preventDefault()
				openPlayer(url)
			})
		}
	}

	const infoButton = project.querySelector(".info-button")
	if (infoButton) {
		const url = `${SERVER_URL}/${infoButton.dataset.url}`
		if (url) {
			infoButton.addEventListener("click", (e) => {
				e.preventDefault()
				openReader(url)
			})
		}
	}
})

videoPlayerCloseBtn.addEventListener("click", () => {
	closePlayer()
})

readerCloseBtn.addEventListener("click", () => {
	closeReader()
})

// Project info
