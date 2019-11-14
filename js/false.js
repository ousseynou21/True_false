var questionnaire = [

  {
    "question" : "Q: The earth is flat",
    "valid"    : 1, // indicates the correct array number, use 0, 1...
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is True"]
  },
  {
    "question" : "Q: There are over a million types of bugs",
    "valid"    : 1,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is False"]
  },
  {
    "question" : "Q: There is a live volcano in Colorado",
    "valid"    : 0,
    "buttons"  : ["False", "True"],
   "answers"  : [ "The correct answer is True"]
  },
    {
    "question" : "Q: Demar Derozan is taller than Lebron Games",
    "valid"    : 1,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is False"]
  },
    {
    "question" : "Q: A farmer invented basketball",
    "valid"    : 0,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is False"]
  },
    {
    "question" : "Q: The most visited place in the world is France",
    "valid"    : 0,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is True"]
  },
    {
    "question" : "Q: America has the highest rate of obesity in the world",
    "valid"    : 1,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is True"]
  },
    {
    "question" : "Q: Donald Trump is handsome",
    "valid"    : 0,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is False"]
  },
      {
    "question" : "Q:  Nepal is the only country that doesn't have a rectangular flag",
    "valid"    : 1,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is True"]
  },
    {
    "question" : "Q: The match was invented before the cigarette lighter",
    "valid"    : 0,
    "buttons"  : ["False", "True"],
    "answers"  : [ "The correct answer is True"]
  },
      {
    "question" : "Game over, check your score below.",

  }

];


var $qa       = $('#QA'),
    $question = $("h2", $qa),
    $buttons   = $("#buttons", $qa),
    $points   = $("p>span",$qa),
    questionnaireLength = questionnaire.length,
    qc        = 0, // Current Question counter
    points    = 0; // Current points

function QandA(){

  var quest = questionnaire[qc],
      question = quest.question,
      validIdx = quest.valid,
      btns     = quest.buttons,
      answer   = quest.answers;

  $question.text( question );



  //End of the game
  if(qc >= questionnaireLength -1){

    var link = document.getElementById('buttons');
    link.style.display = 'none';

  }

  // generate buttons with text:
  $buttons.empty();
  var i=0; i<btns.length;{
    $buttons.append("<button id='btnfalse'>"+ btns[i] +"</button>");
  }
    var i=1; i<btns.length;{
    $buttons.append("<button id='btntrue'>"+ btns[i] +"</button>");
  }



  // Retrieve generated buttons
  var $btn = $("button", $buttons);

  // Assign click
  $btn.one('click', function(){
    var idx = $btn.index(this); // get button index

    //var parent = document.getElementById('mkttext');
    //var p = document.createElement('p');
    //p.innerHTML = "Game says: "+ answer[idx] ;
    //parent.appendChild(p);

    points += (idx === parseInt(validIdx, 10) ? 1 : -0);
    $points.text( points );
    // Next question
    qc++; QandA();
  });

}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

questionnaire = shuffle(questionnaire);
QandA();
