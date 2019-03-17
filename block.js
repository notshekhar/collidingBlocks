class block{
  constructor(canvas, x, y, size, mass){
    this.x = x
    this.y = y
    this.v = -2
    this.mass = mass
    this.size = size
    this.canvas = canvas
  }
  show(ctx){
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.size, this.size)
    ctx.stroke()
  }
  update(){
    this.x += this.v
  }
  reverse(){
    if(this.x+this.size > this.canvas.width || this.x < 0){
      this.v *= -1
      document.querySelector('audio').play()
      
    }
  }
  collide(other){
    if(this.x+this.size > other.x){
      let v1 = this.bounce(other)
      let v2 = other.bounce(this)
      this.v = v1 
      other.v = v2
      document.querySelector('audio').play()
    }
  }
  bounce(other){
    let sumofmasses = this.mass + other.mass
    let v = (((this.mass - other.mass) / sumofmasses) * this.v) + (((2 * other.mass) / sumofmasses) * other.v)
    return v
  }
}