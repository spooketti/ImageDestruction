window.setInterval(pushTime,50)
let x = 0
let y = 0
document.addEventListener("mousemove",function(e)
{
    x = e.clientX - (window.innerWidth/2)
    y = (window.innerHeight/2)-e.clientY
})

let lastInterval = -0.05
function pushTime()
{
    lastInterval+= 0.05
    timeData.push(lastInterval)
    positionXData.push(x)
    positionYData.push(y)
    myLineChart.update();

}