let recordInterval = window.setInterval(pushTime, 50)
let x = 0
let y = 0
let isRecording = true
document.addEventListener("mousemove", function (e) {
    x = e.clientX - (window.innerWidth / 2)
    y = (window.innerHeight / 2) - e.clientY
})

let lastInterval = -0.05
function pushTime() {
    lastInterval += 0.05
    timeData.push(lastInterval)
    positionXData.push(x)
    positionYData.push(y)
    velocityXData.push(
        (positionXData[Math.floor(lastInterval * 20)] - positionXData[Math.floor((lastInterval - 0.05) * 20)]) / 0.05
    )
    velocityYData.push(
        (positionYData[Math.floor(lastInterval * 20)] - positionYData[Math.floor((lastInterval - 0.05) * 20)]) / 0.05
    )
    accelerationXData.push(
        (velocityXData[Math.floor(lastInterval * 20)] - velocityXData[Math.floor((lastInterval - 0.05) * 20)]) / 0.05
    )
    accelerationYData.push(
        (velocityYData[Math.floor(lastInterval * 20)] - velocityYData[Math.floor((lastInterval - 0.05) * 20)]) / 0.05
    )
    posChart.update();
    velChart.update()
    accChart.update()
}

document.addEventListener("keypress", function (e) {
    if (e.key == " ") {
        isRecording = !isRecording
        if (!isRecording) {
            window.clearInterval(recordInterval)
            return
        }
        recordInterval = window.setInterval(pushTime, 50)
    }

})
