<<<<<<< HEAD
=======

/*
class Dot {
     constructor(name, x, y, type, radius, locked, color) {
          this.go = new GameObjectBuilder().setName(name).setType(type).setPos(x,y).setRadius(radius).setColor(color).build()
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e


<<<<<<< HEAD
class dotManager{
     constructor(name, x, y, type, radius, locked, color, isShadow = false) {
                    
          const states = { IDLE: "idle", FALLING: "falling", MERGING: "merging", RESETTING: "resetting", BEFORETHEFALL: "beforeTheFall"};
          this.state = "idle"

          this.go = new GameObjectBuilder().setName(name).setType(type).setPos(x,y).setRadius(radius).setColor(color).build()
          this.pinned = locked || false;//locked in place

          this.isShadow = isShadow
          if (this.isShadow === false) {
               this.shadow = new dotManager(name, x, y, type, radius, locked, "Black", true)

          }

          this.dots = {
               "idle"     : new idleDot(this.go),
               "falling"  : new fallingDot(this.go),
               "merging"  : new mergingDot(this.go),
               "resetting": new resettingDot(this.go),
               "beforeTheFall":  new mergingDot(this.go),
          }
     }
     transition(newState) {
          this.state = newState;
          this.dots[this.state].start()
     }
     update() {
          //console.log(this.state)
          this.dots[this.state].update()
     }
     render(ctx, color) {
          this.dots[this.state].render(ctx, color)
=======
          this.pinned = locked || false;//locked in place
          this.center = new Vector(910 / 2, 660 / 2)

          this.shadow = undefined;
          
          this.activated = false;
          this.activatedFraction = 0;//increases over time
          this.activatedFractionAlpha = 0;//connected to link node's activated fraction

          //this.inPlace = new Audio("hit2.wav")
          this.hitGround = false;
          this.returnedToSpot = false;
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
     }

     destroy() {
          for (let i = 0; i < this.dots.length; i++){
               this.dots[i] = null;
          }
          //this = null;
     }

     //getters
     get pos() {
          if (isNaN(this.go.pos.x)) {
               //console.error("invalid position");
               this.go.pos = new Vector(this.go.startPos.x, this.go.startPos.y)
               //this.pos.copy(this.startPos)
          }
          return this.go.pos
     }
     get startPos() { return this.go.startPos }
     set startPos(vec) { this.go.startPos = vec; }
     get resetPos() { return this.go.resetPos }
     set resetPos(vec) { this.go.resetPos = vec; }
     get vel() { return this.go.vel; }
     
     set radius(radius) { this.go.radius = radius; }
     get radius(){ return this.go.radius }
     get name()  { return this.go.name }
     get mass()  { return this.go.mass }
     get type() { return this.go.type }
     get hidden() { return this.go.hidden; }
     set hidden(bool) { this.go.hidden = bool; }

     get color() { return this.go.color; }
     set color(color) { this.go.color = color; }

<<<<<<< HEAD
     get activated() { return this.go.activated; }
     get activatedFraction() { return this.go.activatedFraction; }
     set activated(b) { this.go.activated = b; }
     set activatedFraction(f) { this.go.activatedFraction = f; }
}
=======
     update() {
          if (this.state === "falling") {
               //go down
               this.returnedToSpot = false;
               this.vel.multiply(this.friction)
               this.vel.add(this.gravity)
               this.pos.add(this.vel);
          } else if (this.state === "merging") {
               //go to center of the screen
               let vel = Vector.sub(this.center, this.pos);
               vel.multiply(this.airFriction);
               this.pos.add(vel);
          } else if (this.state === "resetting") {
               //returning to starting position
               this.hitGround = false;
               let vel = new Vector(this.resetPos.x - this.pos.x, this.resetPos.y - this.pos.y);
               
               // Calculate the distance to the goal
               let distance = this.resetPos.distance(this.pos)

               // Calculate acceleration based on the remaining distance
               let acceleration = map(distance, 0, 200, 0.35, 1.0);

               // Add acceleration to the velocity
               this.vel.add(vel.multiply(acceleration));

               // Apply air friction
               this.vel.multiply(this.airFriction);

               // Update the position
               this.pos.add(this.vel);

               if (distance < 10 && this.returnedToSpot === false) {
                    this.returnedToSpot = true;
                    playSound("merged2.wav")

               }

               // Check if the object is close to the goal
               if (distance < 1) {
                    //this.returnedToSpot = true;
                    // Snap to the exact position when close enough
                    this.pos.copy(this.resetPos)
                    //if (Math.random() > 0.8 && distance > 0.5) {
                         //this.inPlace.play()

                    //}
               }
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e



class Dot {
     constructor(go) {

<<<<<<< HEAD
          this.go = go;

          this.center = new Vector(0,0)

          this.friction = 0.35;
          this.airFriction = 0.05 + Math.random() * 0.05//(0.05 * Math.random()) + 0.005 //0.025//0.005 + afDifference
          this.gravity = new Vector(0, 3 + Math.random() * 2);


          this.shadow = undefined;
          
     }

     //setters 
     setPos(vec) {
          this.go.pos.x = vec.x;
          this.go.pos.y = vec.y;
     }
     get vel() { return this.go.vel; }
     get pos() { return this.go.pos; }
     get resetPos() { return this.go.resetPos; }
     

     update() {}
     constrain() { };
     start(){}
=======
     //not currently being used
     constrain() {
          if (this.state === "falling") {
               //if (this.pos.x > CANVAS_WIDTH - this.radius) { this.pos.x = CANVAS_WIDTH - this.radius; }
               //if (this.pos.x < this.go.radius) { this.pos.x = this.radius; }
               if (this.pos.y > CANVAS_HEIGHT) {
                    this.pos.y = CANVAS_HEIGHT
                    if (this.hitGround === false) {
                                                       this.hitGround = true;

                         if (Math.random() > 0.8) {
                              playSound("dropped.wav")
                              //this.inPlace.play()
                         }

                    }

               }
               if (this.pos.y < this.go.radius) { this.pos.y = this.radius; }
          }
     };
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e

     render(ctx, color) {
          if (this.go.hidden) { return }
          
          if (this.activated) {
               renderCircle(ctx, this.pos.x, this.pos.y, this.go.radius, this.go.color || color)
          } else {
               //slowly increase alpha as its partner's line approaches
               ctx.globalAlpha =1.0// this.activatedFractionAlpha;
               renderCircle(ctx, this.pos.x, this.pos.y, this.go.radius, this.go.color || color)
               ctx.globalAlpha = 1.0
          }
     }
<<<<<<< HEAD
=======
     transition(state){
          this.state = state;
     }
}

*/

class dotManager{
     constructor(name, x, y, type, radius, locked, color, isShadow = false) {
                    
          const states = { IDLE: "idle", FALLING: "falling", MERGING: "merging", RESETTING: "resetting", BEFORETHEFALL: "beforeTheFall"};
          this.state = "idle"

          this.go = new GameObjectBuilder().setName(name).setType(type).setPos(x,y).setRadius(radius).setColor(color).build()
          this.pinned = locked || false;//locked in place

          this.isShadow = isShadow
          if (this.isShadow === false) {
               this.shadow = new dotManager(name, x, y, type, radius, locked, "Black", true)

          }

          this.dots = {
               "idle"     : new idleDot(this.go),
               "falling"  : new fallingDot(this.go),
               "merging"  : new mergingDot(this.go),
               "resetting": new resettingDot(this.go),
               "beforeTheFall":  new mergingDot(this.go),
          }
     }
     transition(newState) {
          this.state = newState;
          this.dots[this.state].start()
     }
     update() {
          //console.log(this.state)
          this.dots[this.state].update()
     }
     render(ctx, color) {
          this.dots[this.state].render(ctx, color)
     }

     destroy() {
          for (let i = 0; i < this.dots.length; i++){
               this.dots[i] = null;
          }
          //this = null;
     }

     //getters
     get pos() {
          if (isNaN(this.go.pos.x)) {
               //console.error("invalid position");
               this.go.pos = new Vector(this.go.startPos.x, this.go.startPos.y)
               //this.pos.copy(this.startPos)
          }
          return this.go.pos
     }
     get startPos() { return this.go.startPos }
     set startPos(vec) { this.go.startPos = vec; }
     get resetPos() { return this.go.resetPos }
     set resetPos(vec) { this.go.resetPos = vec; }
     get vel() { return this.go.vel; }
     
     set radius(radius) { this.go.radius = radius; }
     get radius(){ return this.go.radius }
     get name()  { return this.go.name }
     get mass()  { return this.go.mass }
     get type() { return this.go.type }
     get hidden() { return this.go.hidden; }
     set hidden(bool) { this.go.hidden = bool; }

     get color() { return this.go.color; }
     set color(color) { this.go.color = color; }

     get activated() { return this.go.activated; }
     get activatedFraction() { return this.go.activatedFraction; }
     set activated(b) { this.go.activated = b; }
     set activatedFraction(f) { this.go.activatedFraction = f; }
}



class Dot {
     constructor(go) {

          this.go = go;

          this.center = new Vector(0,0)

          this.friction = 0.35;
          this.airFriction = 0.05 + Math.random() * 0.05//(0.05 * Math.random()) + 0.005 //0.025//0.005 + afDifference
          this.gravity = new Vector(0, 3 + Math.random() * 2);


          this.shadow = undefined;
          
     }

     //setters 
     setPos(vec) {
          this.go.pos.x = vec.x;
          this.go.pos.y = vec.y;
     }
     get vel() { return this.go.vel; }
     get pos() { return this.go.pos; }
     get resetPos() { return this.go.resetPos; }
     

     update() {}
     constrain() { };
     start(){}

     render(ctx, color) {
          if (this.go.hidden) { return }
          
          if (this.activated) {
               renderCircle(ctx, this.pos.x, this.pos.y, this.go.radius, this.go.color || color)
          } else {
               //slowly increase alpha as its partner's line approaches
               ctx.globalAlpha =1.0// this.activatedFractionAlpha;
               renderCircle(ctx, this.pos.x, this.pos.y, this.go.radius, this.go.color || color)
               ctx.globalAlpha = 1.0
          }
     }
>>>>>>> d133142412b93745614a7b04d654f5560b904f6e
}

class idleDot extends Dot {
     constructor(go) {
          super(go)
     }
}

class fallingDot extends Dot {
     constructor(go) {
          super(go)
                    
          this.hitGround = false;
     }
     start() {
          this.hitGround = false;
     }
     update() {
          this.vel.multiply(this.friction)
          this.vel.add(this.gravity)
          this.pos.add(this.vel);

          this.constrain()
     }
     constrain() {
          //if (this.pos.x > CANVAS_WIDTH - this.radius) { this.pos.x = CANVAS_WIDTH - this.radius; }
          //if (this.pos.x < this.go.radius) { this.pos.x = this.radius; }
          if (this.pos.y > CANVAS_HEIGHT) {
               this.pos.y = CANVAS_HEIGHT
               if (this.hitGround === false) {
                    this.hitGround = true;
                    playSound("sounds/dropped.wav")
               }

          }
          if (this.pos.y < this.go.radius) { this.pos.y = this.go.radius; }
     }
}

class mergingDot extends Dot {
     constructor(go) {
          super(go)
     }
     update() {
          let vel = Vector.sub(this.center, this.pos);
          vel.multiply(this.airFriction);
          //this.pos.add(vel);
     }
}

class resettingDot extends Dot {
     constructor(go) {
          super(go)
                    
          this.returnedToSpot = false;
     }
     start() {
          this.returnedToSpot = false;
     }

     update() {
          let vel = new Vector(this.resetPos.x - this.pos.x, this.resetPos.y - this.pos.y);
          let distance = this.resetPos.distance(this.pos)//dist to goal
          let acceleration = map(distance, 0, 200, 0.35, 1.0);//accel based on remaining distance

          this.vel.add(vel.multiply(acceleration));//add acc to vel
          this.vel.multiply(this.airFriction);//apply air friction 
          this.pos.add(this.vel);//update pos

          if (distance < 10 && this.returnedToSpot === false) {
               this.returnedToSpot = true;
               playSound("sounds/merged2.wav")
          }

          //snap to resetPos when close enough
          if (distance < 1) {
               this.pos.copy(this.resetPos)
          }
     }
}

