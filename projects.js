new TypeIt("#h1", {
  strings: "Recent Projects",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();