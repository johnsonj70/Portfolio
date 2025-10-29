
new TypeIt("#h2", {
  strings: ["Junior Front-end Web Developer"],
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();
