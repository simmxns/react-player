const icon: Element = document.querySelector(".icon"),
	play: HTMLElement = document.querySelector(".fa-play"),
	audio: HTMLAudioElement = document.querySelector("#audio"),
	progressBar: Element = document.querySelector(".progress__bar"),
	infoWrapper: Element = document.querySelector(".info__wrapper")

audio.addEventListener("timeupdate", (e: any): void => {
	var currentTime: number = e.target.currentTime,
		totalTime: number = e.target.duration

	var progressWidth: number = (currentTime / totalTime) * 100;
	progressBar.setAttribute("style", `width: ${progressWidth}%`)

	var musicElapsed: HTMLElement = infoWrapper.querySelector(".progress__time")
	var currentMin: string | number = Math.floor(currentTime / 60),
		currentSec: string | number = Math.floor(currentTime % 60)

	if (currentSec < 10) currentSec = `0${currentSec}`

	var currentTimer: string = `${currentMin}:${currentSec}`
	musicElapsed.innerText = currentTimer
})
audio.addEventListener("loadeddata", (): void => {
	var musicDuration: HTMLElement = infoWrapper.querySelector(".progress__duration")

		var totalMin: string | number = Math.floor(audio.duration / 60),
			totalSec: string | number = Math.floor(audio.duration % 60)

		if (totalSec < 10) totalSec = `0${totalSec}`

		var totalTime: string = `${totalMin}:${totalSec}`
		musicDuration.innerText =	totalTime		
})


icon.addEventListener("click", (): void => {
	if (play.classList[1] == "fa-play") {
		play.classList.remove("fa-play")
		play.classList.add("fa-pause")

		audio.play()
	} else {
		play.classList.remove("fa-pause")
		play.classList.add("fa-play")

		audio.pause()
	}
})
