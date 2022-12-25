const steveQ = [
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Don’t let the noise of others’ opinions drown out your own inner voice.",
    "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
    "Stay hungry. Stay foolish.",
    "We’re here to put a dent in the universe. Otherwise why else even be here?",
    "Sometimes life hits you in the head with a brick. Don't lose faith.",
    "Quality is more important than quantity. One home run is much better than two doubles.",
    "Sometimes when you innovate, you make mistakes. It is best to admit them quickly and get on with improving your other innovations.",
    "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
    "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful...that’s what matters to me.",
    "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.",
    "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
    "I want to put a ding in the universe.",
    "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
    "That’s been one of my mantras—focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.",
    "We’re just enthusiastic about what we do.",
    "Things don’t have to change the world to be important.",
    "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "What is Apple, after all? Apple is about people who think ‘outside the box,’ people who want to use computers to help them change the world, to help them create things that make a difference, and not just to get a job done.",
    "My model for business is The Beatles: They were four guys that kept each others’ negative tendencies in check; they balanced each other. And the total was greater than the sum of the parts.",
    "Getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again. It freed me to enter one of the most creative periods of my life.",
    "I’m as proud of many of the things we haven’t done as the things we have done. Innovation is saying no to a thousand things."
]
const shakesQ = [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
]
function generateQuote(name){
    document.getElementById('quote').innerHTML = name[(Math.floor(Math.random()*name.length))];
}
