var readlinesync=require("readline-sync");
 
 var username=readlinesync.question("what's your name? ");

 console.log("Welcome "+username + " to DO YOU KNOW Aman");
 var score=0;

 //play function
 function play(question,answer)
 {
   var useranswer=readlinesync.question(question);
   if(useranswer==answer)
   {
     console.log("You are right!");
     score++;
   }
   else
   {
     console.log("You are wrong!");
   }
   console.log("current score:",score);
     console.log("----------");
 }
    // var questionone=
    // {
    //   question:"where do i live? ",
    //   answer:"shivpuri"
    // }
    // var questiontwo=
    // {
    //   question:"My favorite food is? ",
    //   answer: "burger"
    // }
  var questions=[
    {
      question:"where do i live? ",
      answer:"shivpuri"
    },
    {
      question:"My favorite food is? ",
      answer: "burger"
    },
    {
      question:"Where do i study? ",
      answer: "iiit bhopal"
    }
    ];
  for(var i=0;i<questions.length;i++)
  {
    play(questions[i].question,questions[i].answer);
  }
  console.log("YAY! You scored: ",score);
 