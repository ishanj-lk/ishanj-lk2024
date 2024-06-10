var app = document.getElementById('titles');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Full Stack Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Tech Geek')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Software Engineering U.G.')
    .pauseFor(2500)
    .start();