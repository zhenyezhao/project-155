AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        
        var id = `coin${i}`;
  
        
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        
        this.createcoins(id, position);
      }
    },
  
    createcoins: function (id, position) {
      var terrainEl = document.querySelector("#terrain");
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id", id);
      ringEl.setAttribute("material", "color", "#ff9100");
      ringEl.setAttribute("position", position);
      ringEl.setAttribute("geometry", { primitive: "torus", radius: 8 });
  
      //set the static body attribute of physics system
      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2,
      });
  
      coinEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      terrainEl.appendChild(coinEl);
    },
  });
  