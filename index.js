let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let s1 = 10, m1 = 1
let s2 = 100, m2 = 1010
let b1 = new block(canvas, 300, (canvas.height / 2) - s1 / 2, s1, m1)
let b2 = new block(canvas, 600, (canvas.height / 2) - s2 / 2, s2, m2)

function draw(){
  //cleaning canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  b1.show(ctx)
  b2.show(ctx)
  b1.update()
  b2.update()
  b1.reverse()
  b2.reverse()
  b1.collide(b2)
}

setInterval(()=>draw(), 16)