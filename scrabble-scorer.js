// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
    //console.log(letterPoints); //2.PRINT THE LETTERPOINTS
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    word = input.question("Let's play some scrabble!\n Enter a word: ");  //1.ASKING USER INPUT
   //console.log("Let's play some scrabble! Enter a word:");
};

//takes a word as a parameter and returns a numerical score.
// Each letter within the word is worth 1 point.
function simpleScorer(word)
{
let numericalScore= 0;  
let simpleScorer;
word = word.toUpperCase();   //word converts to upper case.
for (let j = 0; j < word.length; j++)   //loop run word length times
{

  // for (const pointValue in oldPointStructure) {   //for the character of given word is  in oldPointStructure has a pointvalue
      
    //  if (oldPointStructure[pointValue].includes(word[j]))  //if character of the word is in the oldpoint structure
      //{  
         numericalScore++;  //3.COUNTS THE NUMBER OF LETTERS
      //}
   //}
}
//console.log(`Simple Score is ${numericalScore}`);
return numericalScore;
}
//Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function vowelBonusScorer(word)
{ 
   let vowelBonusScorer;
   let score= 0,vowelScore=0, consonantScore=0;
   word = word.toUpperCase();
   const vowels=['A','E','I','O','U']; //4.GAVE INPUT VOWELS ARRAY THEN SEPARATED INTO 2 ARRAYS FOR COUNT
   for(let k=0; k<word.length; k++)
   {
     // for (const pointValue in oldPointStructure) //for the character of given word is  in oldPointStructure has a pointvalue
     // { 
        // if (oldPointStructure[pointValue].includes(word[k]))  //if character of the word is in the oldpoint structure
        // {  
            if(vowels.includes(word[k])) //character checks in vowels array
            {
               vowelScore+=3;   //count increments 3 times
            }
            else
            {
               consonantScore++; //count increments 1 time
            }
        // }
     // }
   } 
   //console.log("vowelScore: "+ vowelScore);
   //console.log("consonantScore: "+consonantScore);
   score=vowelScore+consonantScore;  //total score
   //console.log(`Vowel Bonus Score is ${score}`);
   return score;
}

//let scrabbleScorer;
function scrabbleScorer(word)
 {
   let lettersPoints=0;
   let scrabbleScorer;
   word = word.toLowerCase();
   for(let j=0;j<word.length;j++)
   {
      for(const key in newPointStructure)
      {
      if(key.includes(word[j])){
       //  lettersPoints =lettersPoints+ `Points for '${word[j]}':${newPointStructure[key]}\n`;
       lettersPoints = lettersPoints + newPointStructure[key];  
      }
       //console.log(lettersPoints);
      }
   }
   //console.log(lettersPoints);
   return lettersPoints;
 }

const  scoringAlgorithms = [
   {name: "Simple Score", description: "Each letter is worth 1 point.",scorerFunction:simpleScorer},
   {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction:vowelBonusScorer},
   {name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction:scrabbleScorer}];


function scorerPrompt(word) 
{ 
   let option = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: ");
   console.log(`Score for ${word} is ${scoringAlgorithms[option].scorerFunction(word)}`);
      return option;
}


let newPointStructure={};
function transform(oldPointStructure) 
{
   const newPointStructure = {};
   for(const key in oldPointStructure)
   {   // considering oldpoint structure key in a loop
      const letters = oldPointStructure[key];   
      for (let i = 0; i < letters.length; i++)
       { //keys values are stored in letters for each key in the iteration
         const letter = letters[i].toLowerCase();
         //letters.forEach(letter => {   // for each letter in letters do line 129
         newPointStructure[letter] = Number(key);//convert the key to a number and store it as a value in newpointstructure and implicitly assign each letter as a key.
      // });
      }
   }
//console.log(newPointStructure);
return newPointStructure;
}
newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   oldScrabbleScorer(word);
   simpleScorer(word);
   vowelBonusScorer(word);
   transform(oldPointStructure);
   scorerPrompt(word);
   //transform(oldPointStructure);
   scrabbleScorer(word);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
