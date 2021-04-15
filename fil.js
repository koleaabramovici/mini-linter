let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords);
console.log(`There are ${storyWords.length} words in this story.`)

let betterWords = storyWords.filter(bang => ! unnecessaryWords.includes(bang));

let word1 = 0;
let word2 = 0;
let word3 = 0;
for(let i=0; i < storyWords.length; i++){
  const bug = storyWords[i];
  if (bug === 'extremely'){
   word1++;
  } else if(bug === 'literraly'){
    word2++;
  } else if(bug === 'actually'){
    word3++
  }
}
console.log(`So in this story we have used ${word1} of "extremely" words, ${word2} of "literally" words and ${word3} of "actually" words.`);


let sentence = 0;
betterWords.forEach(debug => {
  if(debug[debug.length-1] === '.' || debug[debug.length-1] === '!'){
    sentence++
  } 
});
console.log(`In this story we have ${sentence} sentences.`);

console.log(betterWords.join(' '));
