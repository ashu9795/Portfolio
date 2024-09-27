import Matter from 'matter-js';

export function runMatter(canvas) {
  const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  Matter.use("matter-attractors");
  Matter.use("matter-wrap");

  const Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Bodies = Matter.Bodies;

  // Create engine and renderer
  const engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  const render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  const runner = Runner.create();
  const world = engine.world;

  const attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      render: {
        fillStyle: '#000',
        strokeStyle: '#000',
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  // Add multiple bodies with polygons, circles, and varying sizes
  for (let i = 0; i < 60; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    let polygonNumber = Common.random(3, 6);
    
    const polygon = Bodies.polygon(x, y, polygonNumber, s, {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: "#222222",
        strokeStyle: "#000000",
        lineWidth: 2,
      },
    });
    World.add(world, polygon);

    const smallCircle = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: {
        fillStyle: Common.random(0, 1) > 0.3 ? "#27292d" : "#444444",
        strokeStyle: "#000000",
        lineWidth: 2,
      },
    });
    World.add(world, smallCircle);

    const mediumCircle = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 6,
      friction: 0,
      frictionAir: 0,
      render: {
        fillStyle: Common.random(0, 1) > 0.3 ? "#334443" : "#222222",
        strokeStyle: "#111111",
        lineWidth: 4,
      },
    });
    World.add(world, mediumCircle);

    const largeCircle = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.2,
      friction: 0.6,
      frictionAir: 0.8,
      render: {
        fillStyle: "#191919",
        strokeStyle: "#111111",
        lineWidth: 3,
      },
    });
    World.add(world, largeCircle);
  }

  // Add mouse control
  const mouse = Mouse.create(render.canvas);
  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);

  // Handle window resizing
  function setWindowSize() {
    dimensions.width = window.innerWidth;
    dimensions.height = window.innerHeight;
    render.canvas.width = dimensions.width;
    render.canvas.height = dimensions.height;
  }

  window.addEventListener('resize', debounce(setWindowSize, 250));

  // Return a cleanup function
  return () => {
    Matter.Render.stop(render);
    Matter.Runner.stop(runner);
    Engine.clear(engine);
    canvas.innerHTML = ''; // Clear the canvas
  };
}

// Debounce function to optimize resizing
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
