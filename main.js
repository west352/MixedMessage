const names = ["West", "Janel", "Bobo", "Pikachu"];
const entertainment = ["tv show", "movie"];
const tvShows = ["stranger things", "Pokemon", "Squid Game", "One Punch Man"];
const movies = ["Avengers", "Avatar", "Justice League"];

function randomSelector(array) {
    let arrLength = array.length;
    return array[Math.floor(Math.random()*arrLength)];
}

function messageGenerator() {
    let name = randomSelector(names);
    let type = randomSelector(entertainment);
    let show;
    if (type === "tv show") {
        show = randomSelector(tvShows);
    } else {
        show = randomSelector(movies);
    }
    return (`${name}'s favorite ${type} is ${show}.`);
}

console.log(messageGenerator());