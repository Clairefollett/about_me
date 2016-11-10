'use strict';

console.log('Hello World');
var nameQuestionAnswer = prompt('What is your name?');
console.log('First question answered with: ' + nameQuestionAnswer);
alert('Hey ' + nameQuestionAnswer + '! That is a pretty cool name... I guess.');
var locationQuestionAnswer = prompt('Where are you from?');
console.log('Second question answered with: ' + locationQuestionAnswer);
alert('It is always rainy in ' + locationQuestionAnswer + '!');
var numAge = prompt('How old are you?');
console.log('Third question answered with: ' + numAge);
alert('Wow! You are ancient!');
var hobbiesAnswer = prompt('What do you like to do with your free time?');
console.log('Fourth question answered with: ' + hobbiesAnswer);
alert('Very interesting!');

var count = 0;

var firstYesOrNoQuestionAnswer = prompt('Do you like dogs?');

console.log('User responded to the first question with: ' + firstYesOrNoQuestionAnswer);

if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' || firstYesOrNoQuestionAnswer.toLowerCase() === 'y') {
  alert('Good job. I love dogs!');
  count = count++;
} else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' || firstYesOrNoQuestionAnswer.toLowerCase() === 'n') {
  alert('You have a dark soul');
} else {
  alert('Yooo what?!');
}

var questionNumTwo = prompt('Do you own any dogs?');

console.log('User responded to the second question with: ' + questionNumTwo);

if (questionNumTwo.toLowerCase() === 'yes' || questionNumTwo.toLowerCase() === 'y') {
  alert('I have two very adorable schnoodles!');
  count = count++;
} else if (questionNumTwo.toLowerCase() === 'no' || questionNumTwo.toLowerCase() === 'n') {
  alert('Incorrect times two!');
} else {
  alert('wuuuut?');
}

var questionNumThree = prompt('Would you jump off the Hawthorne bridge if you knew you would land safely and smoothly into the water?');

console.log('User responded to the third question with: ' + questionNumThree);

if (questionNumThree.toLowerCase() === 'yes' || questionNumThree.toLowerCase() === 'y') {
  alert('Im not that crazy!');
} else if (questionNumThree.toLowerCase() === 'no' || questionNumThree.toLowerCase() === 'n') {
  alert('Damn right! I think that would be terrifying and the Willamette isnt the safest water...');
  count = count++;
} else {
  alert('This is a yes or no question, dont think about it too hard!');
}

var questNumFour = prompt('Were you born in raised in Portland?');

console.log('User responded to the fourth question with: ' + questNumFour);

if(questNumFour.toLowerCase() === 'yes' || questNumFour.toLowerCase() === 'y') {
  alert('I am what they call a Portland Native');
  count = count++;
} else if (questNumFour.toLowerCase() === 'no' || questNumFour.toLowerCase() === 'n') {
  alert('Actually, I was born and raised here! Pretty crazy stuff, huh?');
} else {
  alert('A for A-ffort');
}

var lastQuest = prompt('Do you have any super natural abilities?');

console.log('User responded to the fifth question with: ' + lastQuest);

if(lastQuest.toLowerCase() === 'yes' || lastQuest.toLowerCase() === 'y') {
  alert('I might but I am not at liberty to disclose such information.');
  count = count++;
} else if (lastQuest.toLowerCase() === 'no' || lastQuest.toLowerCase() === 'n') {
  alert('Maybe... Maybe not');
} else {
  alert('I like your uniqueness!');
}

var questNumSix = prompt('How many minutes am I older than my twin?');

console.log('User responded to the sixth question with: ' + questNumSix);

for (var q = 0; q < 4; q++) {
  console.log ('Run this four times');
  if(questNumSix < 15) {
    alert('Too low, Joe!');
    questNumSix = prompt('Guess again!');
  } else if(questNumSix > 15) {
    alert('Too high like Wiz Khalifa');
    questNumSix = prompt('Guess again!');
  } else {
    alert('Correctomundo!');
    count = count++;
    break;
  }
}

var myArrayOfDogs = ['schnoodles','labs','muts','terriers', 'labradors', 'golden retrievers'];

var questSeven = prompt('Name a breed of dog I have owned');

for (var index = 0; index < myArrayOfDogs.length; index++) {
  console.log('Run this six times');
  if(questSeven === myArrayOfDogs[index]) {
    alert('Correct!');
    count = count++;
    break;
  } else {
    alert('Incorrect!');
    questSeven = prompt('Guess again!');
  }
}
