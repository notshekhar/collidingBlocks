let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let h = canvas.height
let w = canvas.width
let x1 = w/2-50 , x2 = w-200
let u1 = 1, u2 = -1
let v1,v2
let m1 = 1, m2 = 2
function draw(){
  x1+=u1
  x2+=u2
  if(x1 < 0){
    u1 = (u1 < -5) ? u1 / u1 : u1
    u1 = -u1
    x1 = 0
  }
  if(x2 > w - 200){
    u2 = (u2 > 5) ? -u2 / u2 : u2
    u2 = -u2
    x2 = w-200
  }
  if(x1+97 < x2 & x1+103 > x2){
    v1 = ((m1*u1)+(m2*u2)-(m2*u1)+(m2*u2))/(m1+m2)
    u1 = v1
    v2 = ((m1*u1)+(m2*u2)-(m1*u2)+(m1*u1))/(m1+m2)
    u2 = -v2
  }
  ctx.clearRect(0,0,w,h)
  ctx.beginPath()
  ctx.rect(x1 ,(h/2)-50,100,100)
  ctx.stroke()
  ctx.beginPath()
  ctx.rect(x2, (h / 2) - 100, 200, 200)
  ctx.stroke()
  ctx.font = '30px Arial'
  ctx.fillText(u1, x1+25, h/2)
  ctx.fillText(u2, x2+50, h/2)
}

setInterval(()=>draw(), 16)