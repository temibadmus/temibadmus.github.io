const steveQ = [
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Don’t let the noise of others’ opinions drown out your own inner voice.",
    "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
    "Stay hungry. Stay foolish.",
    "We’re here to put a dent in the universe. Otherwise why else even be here?"
]
const shakesQ = [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
]
function generateQuote(name){
    document.getElementById('quote').innerHTML = name[(Math.floor(Math.random()*name.length))];
}