let circle = document.getElementById("circle")
let triangle = document.getElementById("triangle")
let rect = document.getElementById("rect")

let ctxcir = circle.getContext('2d')
ctxcir.beginPath()
ctxcir.arc(150, 150, 140, 0, 2 * Math.PI, true)
ctxcir.stroke()
ctxcir.beginPath()
ctxcir.arc(150, 150, 70, 0, 2 * Math.PI, true)
ctxcir.stroke()

let ctxtriangle = triangle.getContext('2d')
ctxtriangle.beginPath()
ctxtriangle.moveTo(150,0)
ctxtriangle.lineTo(300, 300)
ctxtriangle.lineTo(0, 300)
ctxtriangle.lineTo(150, 0)
ctxtriangle.moveTo(150, 100)
ctxtriangle.lineTo(225, 250)
ctxtriangle.lineTo(75, 250)
ctxtriangle.lineTo(150,100)
ctxtriangle.stroke()

let ctxrec = rect.getContext('2d')
ctxrec.beginPath()
ctxrec.moveTo(0,0)
ctxrec.lineTo(300, 0)
ctxrec.lineTo(300, 300)
ctxrec.lineTo(0, 300)
ctxrec.lineTo(0, 0)
ctxrec.moveTo(50, 50)
ctxrec.lineTo(250, 50)
ctxrec.lineTo(250, 250)
ctxrec.lineTo(50, 250)
ctxrec.lineTo(50,50)
ctxrec.stroke()
