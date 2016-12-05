'use strict';

var count = 0;

//first question
var question = 'What\'s your name?';
var answer = prompt(question);

console.log('Question 1: ' + question);
console.log('Answer 1: ' + answer);


//second question
var question2 = 'Do you like dogs?';
var answer2 = prompt(question2).toLowerCase();
var response2;

console.log('Question 2: ' + question2);
console.log('Answer 2: ' + answer2);

if (answer2 === 'yes' || answer2 === 'y') {
  response2 = 'Awesome. I love dogs!';
  count++;
} else if (answer2 === 'no' || answer2 === 'n') {
  response2 = 'You have a dark soul';
} else {
  response2 = 'what?!';
}

alert(response2);

console.log('Alert: ' + response2);


//question three
var questionNum3 = 'Do you own any dogs?';
var answer3 = prompt(questionNum3).toLowerCase();
var response3;

console.log('Question 3: ' + questionNum3);
console.log('Answer 3: ' + answer3);

if (answer3 === 'yes' || answer3 === 'y') {
  response3 = 'I have two very adorable schnoodles!';
  count++;
} else if (answer3 === 'no' || answer3 === 'n') {
  response3 = 'Incorrect times two!';
} else {
  response3 = 'Que';
}

alert(response3);

console.log('Alert: ' + response3);


//question four
var questionNum4 = 'Would you jump off the Hawthorne bridge if you knew you would land safely and smoothly into the water?';
var answer4 = prompt(questionNum4).toLowerCase();
var response4;

console.log('Question 3: ' + questionNum4);

if (answer4 === 'yes' || answer4 === 'y') {
  response4 = 'Im not that crazy!';
} else if (answer4 === 'no' || answer4 === 'n') {
  response4 = 'Damn right! I think that would be terrifying and the Willamette isnt the safest water...';
  count++;
} else {
  response4 = 'This is a yes or no question, dont think about it too hard!';
}

alert(response4);

console.log('Alert: ' + response4);


//question five
var questNum5 = 'Were you born in raised in Portland?';
var answer5 = prompt(questNum5).toLowerCase();
var response5;

console.log('Question 5;: ' + questNum5);
console.log('Answer 5: ' + answer5);

if(answer5 === 'yes' || answer5 === 'y') {
  response5 = 'I am what they call a Portland Native';
  count++;
} else if (answer5 === 'no' || answer5 === 'n') {
  response5 = 'Actually, I was born and raised here! Pretty crazy stuff, huh?';
} else {
  response5 = 'A for A-ffort';
}

alert(response5);

console.log('Alert: ' + response5);


//question six
var lastQuest = ('Do you have any super natural abilities?');
var answer6 = prompt(lastQuest).toLowerCase();
var response6;

console.log('Question 6: ' + lastQuest);
console.log('Answer 6: ' + answer6);

if(answer6 === 'yes' || answer6 === 'y') {
  response6 = 'I might but I am not at liberty to disclose such information.';
  count++;
} else if (answer6 === 'no' || answer6 === 'n') {
  response6 = 'Maybe... Maybe not';
} else {
  response6 = 'I like your uniqueness!';
}

alert(response6);

console.log('Alert: ' + response6);


//question seven
var questNumSix = 'How many minutes am I older than my twin?';
var answer7;
var response7;
var number = 15;

console.log(typeof answer7);

for (var i = 0; i < 4; i++) {
  answer7 = prompt(questNumSix);

  console.log ('Question 7 (Trial ' + (i + 1) + '): ' + questNumSix);
  console.log('Answer 7 (Trial ' + (i + 1) + '): ' + answer7);

  if(answer7 < number) {
    response7 = 'Too low, Joe!';
  } else if (answer7 > number) {
    response7 = 'Too high like Wiz Khalifa';
  } else if (answer7 == number) {
    response7 = 'Correctomundo!';
    alert(response7);
    count++;
    break;
  } else {
    response7 = 'That\'s not a number, silly!';
  }
  alert(response7);
  console.log('Alert 7 (Trial ' + (i + 1) + '): ' + response7);
}

var question8 = 'Can you guess a dog that I have owned??';
var dogs = ['schnoodles','labs','muts','terriers', 'pugs'];
var response8;
var answer8 = prompt(question8).toLowerCase();

for (var a = 0; a < 6; a++) {

  console.log ('Question 8 (Trial ' + (i + 1) + '): ' + question8);
  console.log('Answer 8 (Trial ' + (i + 1) + '): ' + answer8);

  if(dogs.indexOf(answer8) >= 0) {
    response8 = 'You answered right!';
    alert(response8);
    count++;
    break;
  } else {
    response8 = 'Try again!';
    alert(response8);
  }

}

alert('You got ' + count + ' out of 7 questions correct, ' + answer + '! Better luck next time.');
