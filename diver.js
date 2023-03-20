AFRAME .registerComponent('diver')
    schema: {
        speedOfRotation={type:'number', default: 0}
    }
    init:function(){
        windows.addEventListener
        if (e.key === "ArrowRight") {
            if (this.data.speedOfRotation < 0.1) {
              this.data.speedOfRotation += 0.01;
            }}
        if (e.key === "ArrowLeft"){
            if (this.data.speedOfRotation < 0.1){
                this.data.speedOfRotation+= 0.01;
            }
            }
        }
        tick: function () {
            var mapRotation = this.el.getAttribute("rotation");
        
            mapRotation.y += this.data.speedOfRotation;
        
            this.el.setAttribute("rotation", {
              x: mapRotation.x,
              y: mapRotation.y,
              z: mapRotation.z,
            });
          }
          //Plane rotation component
  AFRAME.registerComponent("diver-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRotation;      
        var planePosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (diverRotation.x < 10) {
            diverRotation.x += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (diverRotation.x > -10) {
            diverRotation.x -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverRotation.z < 20) {
            diverRotation.z += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y < 2) {
            diverPosition.y += 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (diverRotation.z > -10) {
            diverRotation.z -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y > -2) {
            diverPosition.y -= 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    }
  });
  
  
        