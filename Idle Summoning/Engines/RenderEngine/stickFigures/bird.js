class Bird extends StickFigure{
     constructor(moveX, moveY, increment, speedIncrement) {

          let body;
               body = {
                    dots: { 
                         
<<<<<<< HEAD
                         "1"  : { x: 0, y: 25 },  
                         "2"  : { x: 15, y: 40 },
                         "3"  : { x: 45, y: 35 },
                         "4": { x: 50, y: 0 },  
                         "5": { x: 30, y: 20, locked: "true" },  

                         "beakTip": { x: 85, y: 10, color: "RGB(255,165,0)" },  // Orange
                         "beakBase": { x: 60, y: 20 },
       
                         "tail"  : { x: -20, y: 40, type: "B" }
=======
                         "1"  : { x: 0, y: 25, radius: 8 },  
                         "2"  : { x: 15, y: 40, radius: 8 },
                         "3"  : { x: 45, y: 35, radius: 8 },
                         "4": { x: 50, y: 0 , radius: 8},  
                         "5": { x: 30, y: 20, locked: "true", radius: 8 },  

                         "beakTip": { x: 85, y: 10, color: "RGB(255,165,0)", radius: 8 },  // Orange
                         "beakBase": { x: 60, y: 20, radius: 8 },
       
                         "tail"  : { x: -20, y: 40, type: "B", radius: 8 }
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
                         


                    },
                    sticks: [["1", "2"], ["2", "3"], ["5", "1"], ["4", "5"],
                         ["3", "5"],   ["2", "5"], 
                         ["4", "beakBase"], ["beakBase", "beakTip"], ["4", "beakTip"],
                         ["1", "tail"],
                                                  ["3", "beakBase"],


                    ],
                    movement: { x: moveX, y: moveY }
               }

               
     
          super(body, "RGB(240,240,240)")
          this.addDot("wing1", 0 + moveX, 5 + moveY, "A", dotSize)
          this.addDot("wing2", -30 + moveX, 25 + moveY, "A", dotSize)
          this.addStick("5", "wing1")
          this.addStick("wing1", "wing2")


          this.increment = increment//Math.random() * 100;
          this.posIncrement = speedIncrement/3
          this.speedIncrement = speedIncrement//(Math.random() + 0.5) * 2

          customForEach(this.dots, (dot) => {
<<<<<<< HEAD
               //dot.startPos.x -= 600
               //dot.pos.x -= 600

=======
               //console.log(dot.pos.x, dot.startPos.x)
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
          })
          customForEach(this.dots, (dot) => {
               //dot.startPos.x = dot.startPos.x + 1000 * Math.sin(this.increment);
               //dot.startPos.y = dot.pos.y;

               dot.resetPos.x = dot.startPos.x + 1200 * Math.sin(this.posIncrement);
<<<<<<< HEAD
               dot.resetPos.y = dot.startPos.y + 25 * Math.sin(this.increment * 5)
          })
=======

               dot.resetPos.y = dot.startPos.y + 25 * Math.sin(this.increment * 5)
          })
          customForEach(this.dots, (dot) => {
              // console.log(dot.pos.x)
          })
          
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
     }
     update(ctx, isGameRunning) {
          //update dots
          this.isGameRunning = isGameRunning
          this.updateFigure(isGameRunning)
          this.render(ctx)
     }

     trigger(type) {
          if (type === "step") {
               if (this.isGameRunning) {
                    this.increment    += 0.0045 * this.speed  
                    this.posIncrement += 0.0045 * this.speed  

                    customForEach(this.dots, (dot) => {
<<<<<<< HEAD
                         console.log("wolf ", dot.pos.x, dot.startPos.x, this.increment, this.increment * 500)
=======
                        // console.log("wolf ", dot.pos.x, dot.startPos.x, this.increment, this.increment * 500)
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
                    })
                    //let diff = Math.max(Math.random(),0.9)//Math.abs(Math.random() + 0.2)
                    customForEach(this.dots, (dot) => {
                         dot.pos.x = dot.startPos.x + this.posIncrement * 500 * this.speedIncrement
                         if (dot.pos.x > 1200) {
                              dot.startPos.x -= 1500
                              dot.resetPos.x = - 1500
                         }
<<<<<<< HEAD
                         console.log(dot.pos.x)
=======
                         //console.log(dot.pos.x)
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e

                         let baseY = dot.startPos.y + 25 * Math.sin(this.increment * 5)
                         if (dot.type === "A") {
                              baseY += 25 * Math.sin(this.increment * 20)
                         } else if (dot.type === "B") {
                              baseY += 3 * Math.sin(this.increment * 50) * -1
                         }
                         dot.pos.y = baseY;
                    })
               }

               ee.addEvent(20, { actor: this, type: "step" })
          }  else if (type === "startDot") {
               this.activateDots()
          }else if (type === "updateDots") {
               this.updateDots()
          }
     }    
}