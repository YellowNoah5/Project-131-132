img = ""

function preload()
{
    img = loadImage("table.jpg")
}

function setup()
{
    canvas = createCanvas(800, 600)
    canvas.position(620, 220)

    objm = ml5.objectDetector('object', modeLoaded)
    document.getElementById("statuss").innerHTML = "Detecting Objects"
}

function modeLoaded()
{
    console.log("Model Loaded!")

    status = true

    objm.detect(img, gotResults)

}

function gotResults(error, results)
{
    if(error) 
    {
        console.log(error)
    }
    else
    {
        console.log(results)
    }
}

function draw()
{
    image(img, 0, 0, 800, 600)

}