new TypeIt("#h1", {
  strings: "Web Developer Skills",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();