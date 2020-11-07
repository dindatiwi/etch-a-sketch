//select the canvas & shake button
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d')
const shakeBut = document.querySelector('.shake')
const MOVE_AMOUNT = 10
//setup canvas for drawming

//deconstructing syntax for the canvas properties
const {width , height} = canvas

//create random x and y for the canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT
let hue = 0

ctx.strokeStyle = `hsl(${hue},100%,50%)`
ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x,y)
ctx.stroke()

//draw function
function draw({key}){
    //incerement hue
    hue += 5
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    console.log(key)
    ctx.beginPath()
    ctx.moveTo(x,y)
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT
            break;
            case 'ArrowRight':
                x += MOVE_AMOUNT
                break
                case 'ArrowDown':
                    y += MOVE_AMOUNT
                    break
                    case 'ArrowLeft':
                        x -= MOVE_AMOUNT
                        break
                        default:
                            break
    }
    ctx.lineTo(x,y)
    ctx.stroke()

}

//handler for keys
function handler(e){
    e.preventDefault
    draw({
        key: e.key
    })
    console.log(e.key)
}

//shake func
function clearCanvas(){
    canvas.classList.add('shake')
    ctx.clearRect(0,0,width,height)
    canvas.addEventListener('animationend',function(){
        console.log('clear')
        canvas.classList.remove('shake')
    },{once:true}
    )
}
//listen for arrow keys
window.addEventListener('keydown',handler)
shakeBut.addEventListener('click',clearCanvas)