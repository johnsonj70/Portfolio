new TypeIt("#h1", {
  strings: "Contact Me",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

new TypeIt("#h2", {
  strings: "Front-end Web Development",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();