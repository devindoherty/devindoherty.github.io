var torch = {
    name: "torch",
    location: "homepage",
    description: "A wooden stick aglow with flames.",
    room_description: "You see a torch here.",
    inventoried: false,
}

var room = {
    name: String,
    exits: String,
    description: String,
}

var player = {
    current_location: room,
}


// var detection = prompt.addEventListener("keydown", function(event));

function input() {
    const buffer = document.getElementById("buffer")
    var command = document.getElementById("cmd").value.toLowerCase();    
    
    if (event.key === "Enter") {
        if (command == "get torch") {
            // alert("you pick up the torch");
            buffer.innerHTML += "You pickup the torch. You see a young page." + "<br>";
        }
        else if (command.includes("writing")) {
            buffer.innerHTML += 
            "You find yourself in a dusty, empty library with a half finished book upon a podium. A spider watches you from its web. <p><i>I Ran Over a Rabit</i></p><p><i>And Other Essays on Select Topics</i></p><p>An allegedly humorous take on certain subjects of note, including and limited to: Art, Nature, Love, Toil, and Sadness.</p><p>" + "<br>"
            buffer.innerHTML += "<img src='bookcover1.jpg' alt='Cover of I Ran Over a Rabbit' width=35%>" + "<br>"
            buffer.innerHTML += "The spider says, 'I've read it. I'd give it a pass, if I were you.'" + "<br>"
        }
        else if (command.includes("games")) {
            buffer.innerHTML += "An old Dell hooked up to a hamster wheel for power is playing some kind of text based adventure called <a href='/CelinaSolution/index.html'>Celina Solution</a>. The hamster looks up at you, exhausted." + "<br>" + "A note on the wall reads: Beware of the Grue" + "<br>"
        }
        else if (command.includes("journal")) {
            buffer.innerHTML += "The tattered writings of a madman are strewn about this padded cell." + "<br>"
        }
        else if (command.includes("about")){
            buffer.innerHTML += "You find yourself before a half finished portrait on a easel in a dilapidated artist's studio" + "<br>"
            buffer.innerHTML += "<img src='portrait.jpg' alt='Portrait of Devin' width=35%>" + "<br>"
        }
        else if (command.includes("page")) {
            buffer.innerHTML += "The page looks lost and confused. 'It's too dark to see where I'm going, is this my home?'" + "<br>"
            buffer.innerHTML += "You certainly hope this isn't the home of the page." + "<br>"
            buffer.innerHTML += "'It's pitch black here, even with that torch,' the page says. 'We're likely to be eaten by a grue.' The page looks resigned to their fate." + "<br>"
        }
        else if (command.includes("help")) {
            buffer.innerHTML += "Traditionally, in text adventure games you can move about to different rooms and interact with objects and talk to nonplayer characters. You can't do any of that here (Yet!). Basically, follow the hints." + "<br>"
        }
        
        else if (command.trim() == "") {
            buffer.innerHTML += "What?" + "<br>"
        }
        else {
            buffer.innerHTML += "The parser is too stupid to understand you." + "<br>";
        }
        document.getElementById("cmd").value = "";
    }
}

function update() {

}

function print() {

}

function inventory() {

}