'use strict';

var count = 0;

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();

function firstQuestion() {
  //first question
  var firstYesOrNoQuestionAnswer = prompt('Do you like dogs?');

  console.log('User responded to the first question with: ' + firstYesOrNoQuestionAnswer);

  if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' || firstYesOrNoQuestionAnswer.toLowerCase() === 'y') {
    alert('Good job. I love dogs!');
    count++;
    console.log('count equals: ', count);
  } else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' || firstYesOrNoQuestionAnswer.toLowerCase() === 'n') {
    alert('You have a dark soul');
  } else {
    alert('Yooo what?!');
  } //end first question
}

function secondQuestion() {
  //question two
  var questionNumTwo = prompt('Do you own any dogs?');

  console.log('User responded to the second question with: ' + questionNumTwo);

  if (questionNumTwo.toLowerCase() === 'yes' || questionNumTwo.toLowerCase() === 'y') {
    alert('I have two very adorable schnoodles!');
    count++;
    console.log('count is: ', count);
  } else if (questionNumTwo.toLowerCase() === 'no' || questionNumTwo.toLowerCase() === 'n') {
    alert('Incorrect times two!');
  } else {
    alert('wuuuut?');
  } //end question two
}

function thirdQuestion() {
  //question three
  var questionNumThree = prompt('Would you jump off the Hawthorne bridge if you knew you would land safely and smoothly into the water?');

  console.log('User responded to the third question with: ' + questionNumThree);

  if (questionNumThree.toLowerCase() === 'yes' || questionNumThree.toLowerCase() === 'y') {
    alert('Im not that crazy!');
  } else if (questionNumThree.toLowerCase() === 'no' || questionNumThree.toLowerCase() === 'n') {
    alert('Damn right! I think that would be terrifying and the Willamette isnt the safest water...');
    count++;
    console.log('count = ', count);
  } else {
    alert('This is a yes or no question, dont think about it too hard!');
  } //end question three
}

function fourthQuestion() {
  // question four
  var questNumFour = prompt('Were you born in raised in Portland?');

  console.log('User responded to the fourth question with: ' + questNumFour);

  if(questNumFour.toLowerCase() === 'yes' || questNumFour.toLowerCase() === 'y') {
    alert('I am what they call a Portland Native');
    count++;
    console.log('count =', count);
  } else if (questNumFour.toLowerCase() === 'no' || questNumFour.toLowerCase() === 'n') {
    alert('Actually, I was born and raised here! Pretty crazy stuff, huh?');
  } else {
    alert('A for A-ffort');
  } //end question four
}

function fifthQuestion() {
  //question five
  var lastQuest = prompt('Do you have any super natural abilities?');

  console.log('User responded to the fifth question with: ' + lastQuest);

  if(lastQuest.toLowerCase() === 'yes' || lastQuest.toLowerCase() === 'y') {
    alert('I might but I am not at liberty to disclose such information.');
    count++;
    console.log('count =', count);
  } else if (lastQuest.toLowerCase() === 'no' || lastQuest.toLowerCase() === 'n') {
    alert('Maybe... Maybe not');
  } else {
    alert('I like your uniqueness!');
  } //end question five
}

function sixthQuestion() {
  //question six
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
      count++;
      console.log('count =', count);
      break;
    }
  } //end question six
}

function seventhQuestion() {
  //question seven
  var myArrayOfDogs = ['schnoodles','labs','muts','terriers', 'labradors', 'golden retrievers'];

  var questSeven = prompt('Name a breed of dog I have owned');

  for (var index = 0; index < myArrayOfDogs.length; index++) {
    console.log('Run this six times');
    if(questSeven === myArrayOfDogs[index]) {
      alert('Correct!');
      count++;
      console.log('count = ', count);
      break;
    } else {
      alert('Incorrect!');
      questSeven = prompt('Guess again!');
    }
  } // end question seven
}
