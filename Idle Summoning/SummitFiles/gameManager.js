let ee = new EventEngine()
let g_sunPos = new Vector(0, 0)
let g_playerProgressFaction = 0;
let g_maxAltitude = 0;
<<<<<<< HEAD
let g_posX = 0;
let g_posY = 0;
=======
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e

class summitManager{
     constructor() {

          this.bgColor = new colorRGB(125, 188, 255)
          this.sunset =
          [
                 [135, 206, 235],  // Light Blue Sky
    [135, 206, 250],  // Slightly Lighter Blue Sky
    [130, 197, 255],  // Transition Blue
    [125, 188, 255],  // Transition Blue-Grey
               [115, 170, 255],  // Soft Blue with a hint of purple
               [252, 176, 69],   // Warm Sunset Yellow
               [252, 166, 77],   // Warm Sunset Orange
               [229, 96, 118],   // Soft Sunset Purple
               [75, 61, 96],     // Deep Sunset Purple
               [50, 50, 90],     // Darker Twilight Blue
               [25, 40, 85],     // Dark Blue Twilight
               [10, 30, 80],     // Deeper Twilight Blue
               [8, 24, 58]       // Deepest Twilight Blue
          ]
          
          //[[135, 206, 235], [0, 191, 255], [0, 191, 255], [0, 191, 255], [252, 156, 84], [253, 94, 83], [75, 61, 96], [21, 40, 82], [8, 24, 58], [8, 24, 58]]
          this.sunrise = [...this.sunset].reverse()
          
          const states = {
               SETTINGUP: "settingUp", GAMERUNNING: "gameRunning",
               BOULDEROLLING: "boulderRolling", BEFORETHEFALL: "beforeTheFall",
               FALLING: "falling", RESETTING: "resetting"
          };

          this.states = {
               "settingUp": new gameLogicSettingUp(this),
               "gameRunning": new gameLogicGameRunning(this),
               "boulderRolling": new gameLogicBoulderRolling(this),
               "beforeTheFall": new gameLogicBeforeTheFall(this),
               "falling": new gameLogicFalling(this),
               "resetting": new gameLogicResetting(this)
          }

          this.state = ""


          this.init();
          

          this.clickMade = false
<<<<<<< HEAD

          document.addEventListener("mousemove", e => {
               const rect = canvas.getBoundingClientRect(); // Gets the bounds of the canvas element
               const mousePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };

               const squareSize = 20;  // Size of the square
               const squareX = mousePos.x - squareSize / 2;
               const squareY = mousePos.y - squareSize / 2;

               g_posX = squareX
               g_posY = squareY
          });

          document.addEventListener("mousedown", e => {
               /*
=======
          document.addEventListener("mousedown", e => {
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
               let meter = this.figures.meter.entity;
               if (this.clickMade === false) {
                    this.clickMade = true;
                    if (meter.counter === 5 || meter.counter === 6 || meter.counter === 7) {
                         this.beatHit(1, "green")

                         //this.trigger("transition", "boulderRolling")
                    } else if (meter.counter === 4 || meter.counter === 8) {
                         this.beatHit(0, "#FBE106")
                    } else {
                         this.beatHit(-1, "red")
                    }
               }
<<<<<<< HEAD
               */
=======
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
          })

                    
          this.resetScore = 1;
     }

     init() {
          ee = new EventEngine()
          g_sunPos = new Vector(0, 0)
          g_playerProgressFaction = 0;

          this.progressCounter = 1;//ranges from 1 to 5 to change text
          this.speed = initialSpeed;
          this.altitude = 0;
          
          this.figures = null; 
          this.figures = {
<<<<<<< HEAD
               sun: { entity: new SummoningCircle(1), z: 1, background: false }
          }
          this.figures.sun.entity.hasGameStarted = false;

=======
               sun: { entity: new Sun(this.progressCounter), z: 0, background: false },

               
               cloud1: { entity: new Bird(-400,  25, 5, 3), z: 1, background: false },
               cloud2: { entity: new Bird(-900, 40, 1, 2), z: 1, background: false },
               cloud3: { entity: new Bird(-1400, 0, 10, 1), z: 1, background: false },
    
               mountainBack: { entity: {}, z: 5, background: true, alpha: 0 },
               mountains: { entity: new Mountain(), z: 6, background: false },
               
               humanBack: {
                    entity: new Sissy(new Vector(100, 565), "red", this.progressCounter, false), z: 3, background: false
               },
               groundBack: { entity: {}, z: 6, background: true, alpha: 0 },
               ground: { entity: new Ground(), z: 5, background: false },
               
               boulder: {
                    entity: new Boulder(new Vector(225, 315), "pink", this.progressCounter), z: 2, background: false
               },
               humanFront: {
                    entity: new Sissy(new Vector(100, 565), "red", this.progressCounter, true), z: 1, background: false
               },

               meterBack: { entity: {}, z: 9, background: true, alpha: 0 },
               meter: { entity: new Meter(), z: 10, background: false }
          }

          this.figures.humanFront.entity.humanBack = this.figures.humanBack.entity
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e

          customObjectForEach(this.states,
               (key, state) => state.figures = this.figures)

          this.state = "settingUp"
          this.states[this.state].start();
                    
<<<<<<< HEAD
          this.speedText = new AlphanumericEntity(625, 20, "white", 7)
=======
          this.speedText = new AlphanumericEntity(630, 520, "white", 6, true)
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
          this.altitudeText = new AlphanumericEntity(20, 20, "white", 7)

          this.lectureTextTop = new AlphanumericEntity(11, 104, "white", 7, false)
          this.lectureTextBottom = new AlphanumericEntity(11, 204, "white", 7, false)
          this.lectureTextBottom2 = new AlphanumericEntity(11, 304, "white", 7, false)

          //this.beatHit(0, "red")
          ee.addEvent(20, { actor: this, type: "step" })
<<<<<<< HEAD
          //ee.addEvent(5800, { actor: this, type: "transition", classifier: "gameRunning"  })
=======
          ee.addEvent(5800, { actor: this, type: "transition", classifier: "gameRunning"  })
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
          ee.addEvent(1000, { actor: this, type: "updateAltitude" })

     }

     beatHit(speedIncrement, color) {
          if (this.figures.meter.entity.hasClicked === false) {
               if (speedIncrement === 1) {
                    playSound("sounds/coin.wav")
               } else if (speedIncrement === 0) {
                    playSound("sounds/lesserHit.wav")
               } else {
                    playSound("sounds/hit.wav")
               }

               this.figures.meter.entity.hasClicked = true;
               this.speed += speedIncrement// * this.progressCounter
               if (this.speed < c_MIN_SPEED) { this.speed = c_MIN_SPEED; }
               if (this.speed > c_MAX_SPEED) { this.speed = c_MAX_SPEED; }
          
               this.figures.meter.entity.setColor(color)
          }
     }

     update(engine) {
          if (engine) {
               if (engine.input.isDownClick("Space")) {
                    //this.endgame = true;
                    //ee.pause()
                    canvas.requestFullscreen().catch(err => {
                         console.error('Fullscreen request failed:', err);
                    });
               } else if (engine.input.isUpClick("Space")) {
                    //ee.unpause()
               }
          }

          //loop through triggered events
          customForEach(ee.update(),
               (eventItem) => {
                    let actor = eventItem["actor"];
<<<<<<< HEAD
                    //console.log(eventItem)
                    //if (actor === this.figures.meter.entity) { this.clickMade = false };
=======
                    if (actor === this.figures.meter.entity) { this.clickMade = false };
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
                    actor.trigger(eventItem["type"], eventItem["classifier"] )
               }
          )        

          this.states[this.state].update(ctx)


     }

     draw(ctx) {
          ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          ctx.fillStyle = this.bgColor.returnColor()
          ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

<<<<<<< HEAD

=======
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
          this.states[this.state].draw(ctx)
     }

     drawFigures(ctx, isGameRunning, isFalling) {
          for (let obj in this.figures) {
               let figure = this.figures[obj]

               if (figure.background === false) {
<<<<<<< HEAD

=======
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
                    figure.entity.update(ctx, this.state === "gameRunning" || this.state === "settingUp", this.bgColor.returnColor())
                    //figure.entity.update(ctx, this.state === "gameRunning" || this.state === "settingUp", this.bgColor.returnColor())
               } else{
                    //if not an entity, part of the bg
                    ctx.fillStyle = this.bgColor.returnColor()
                    ctx.globalAlpha = figure.alpha

                    switch (obj){
                         case "mountainBack":
                              ctx.beginPath();
                              ctx.moveTo(505, 165);
                              ctx.lineTo(605, 245);
                              ctx.lineTo(755, 135);
                              ctx.lineTo(1100, 315)
                              ctx.lineTo(505, 415)
                              ctx.lineTo(505, 165)
                              ctx.fill();
                              break;
                         
                         case "groundBack":
                              ctx.beginPath();
                              ctx.moveTo(5, CANVAS_HEIGHT);
                              ctx.lineTo(1105, CANVAS_HEIGHT);
                              ctx.lineTo(1105, 192);
                              ctx.fill();
                              break;
                         
                         case "meterBack":
                              ctx.fillRect(455, CANVAS_HEIGHT - 150, 400, 100)
                              break;
                    }    
                    
                    ctx.globalAlpha = 1.0
               } 
          }
          
          let textArray = ["","","GIVE UP", "IT IS POINTLESS", "YOU WILL NEVER ESCAPE", "TO TAKE BUT ONE STEP","TO TAKE BUT ONE STEP","TO TAKE BUT ONE STEP",]
          if (this.progressCounter < 5) {
               this.lectureTextTop.render(ctx, textArray[this.progressCounter], false)
          } else if(isFalling === true){
               this.lectureTextTop.size = 6; this.lectureTextBottom.size = 6;
               this.lectureTextTop.render(   ctx, textArray[5], false)
               this.lectureTextBottom.render(ctx, "FURTHER IS ALL I CAN ASK", false)
               this.lectureTextBottom2.render(ctx, "OF TODAY", false)
          }
     }

     trigger(type, classifier) {
          if (type === "transition") {
               console.log("The game has transitioned from state: " + this.state + " to state: " + classifier)
               this.state = classifier;
               this.states[this.state].start();

          } else {
               if (type === "step") {
<<<<<<< HEAD
=======
                    //console.log("Step ", this.figures.sun.entity.movementFraction)
                    let sun = this.figures.sun.entity
                    if (this.state !== "gameRunning") {
                         sun.movementFraction = Math.max(0.11, sun.movementFraction - 0.0075)
                    } 
                    this.bgColor.setColorFromArray(colorAdjusterSingleDigit(this.sunset, sun.movementFraction))  
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
                    this.states[this.state].trigger("step")
                    ee.addEvent(100, { actor: this, type: "step" })
               }else if(type === "bang"){
                    playSound("sounds/explosion.wav")
               } else if (type === "updateAltitude") {
<<<<<<< HEAD
=======
                    //console.log("triggggggggggg, ", ee.events)
                    //console.log(performance.now() - lastTime)
                    //lastTime = performance.now()
                    let currentY = (CANVAS_HEIGHT - this.figures.humanFront.entity.dots[0].pos.y) - 150
                    if (Math.abs(currentY - this.altitude) > 20) {
                         this.altitude = currentY
                         g_maxAltitude = Math.floor(Math.max(g_maxAltitude, currentY))
                    }
                    ee.addEvent(3000, { actor: this, type: "updateAltitude" })
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
               }
               this.states[this.state].trigger(type, classifier)
          }
     }
}

class gameLogic{
     constructor(parent) {
          this.parent = parent;
          this.figures = this.parent.figures
     }
     update(engine) {
          
     }
     draw(ctx) {
          
     }
     start() {
          
     }
     trigger(type) {
          
     }
     get state() {
          this.state = this.parent.state
     }
}