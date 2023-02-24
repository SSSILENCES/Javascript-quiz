
// one value variables!!!!!!
var form = document.getElementById("quiz-content");
var startb = document.getElementById("start-button");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var timerct = document.getElementById("countdown");
var scorect = document.getElementById("score");
var score = 0;
var timer = 80;
var finalmessage = document.getElementById("finalmessagge");
var restartbutton = document.getElementById("restart");
var onediv = document.getElementById("onediv");
var next1 = document.getElementById("next1")
var next2 = document.getElementById("next2")
var next3 = document.getElementById("next3")
var next4 = document.getElementById("next4")
var next5 = document.getElementById("next5")
var next6 = document.getElementById("next6")
var next7 = document.getElementById("next7")
var next8 = document.getElementById("next8")
var next9 = document.getElementById("next9")
var next10 = document.getElementById("next10")
var twodiv = document.getElementById("twodiv");
var leaderboard = document.getElementById("leaderboard")
var finalform = document.getElementById("finalform");
var finalformsubmit = document.getElementById("finalformsubmit");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var leaderboardul = document.getElementById("leaderboardul");
var finalform2 = document.getElementById("finalform2")

// start button Conditions And Reactions!!!!!!
startb.addEventListener("click", function () {

  startb.style.display = "none";
  // form.style.display = "block";
  leaderboard.style.display = "none";
  onediv.style.display = "block";
  scorect.style.display = "block"

  //  Correct answer Condictions And Reactions!!!!!
  one.addEventListener("click", function () {
    var hiddeone = document.getElementById("hidden1")
    var wrong1 = document.querySelectorAll(".wrong1")

    hiddeone.style.display = "block";
    for (let i = 0; i < wrong1.length; i++) {
      wrong1[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    one.style.display = "none";
    next1.style.display = "block"
    leaderboard.style.display = "none"


  });


  two.addEventListener("click", function () {
    var hiddetwo = document.getElementById("hidden2")

    hiddetwo.style.display = "block"
    var wrong2 = document.querySelectorAll(".wrong2")


    for (let i = 0; i < wrong2.length; i++) {
      wrong2[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    two.style.display = "none";
    next2.style.display = "block"
  });

  three.addEventListener("click", function () {
    var hiddethree = document.getElementById("hidden3")

    hiddethree.style.display = "block"
    var wrong3 = document.querySelectorAll(".wrong3")

    for (let i = 0; i < wrong3.length; i++) {
      wrong3[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    three.style.display = "none";
    next3.style.display = "block"
  });

  four.addEventListener("click", function () {
    var hiddefour = document.getElementById("hidden4")

    hiddefour.style.display = "block"
    var wrong4 = document.querySelectorAll(".wrong4")

    for (let i = 0; i < wrong4.length; i++) {
      wrong4[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    four.style.display = "none";
    next4.style.display = "block"
  });

  five.addEventListener("click", function () {
    var hiddefive = document.getElementById("hidden5")

    hiddefive.style.display = "block"
    var wrong5 = document.querySelectorAll(".wrong5")

    for (let i = 0; i < wrong5.length; i++) {
      wrong5[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    five.style.display = "none"
    next5.style.display = "block"
  });

  six.addEventListener("click", function () {
    var hiddesix = document.getElementById("hidden6")

    hiddesix.style.display = "block"
    var wrong6 = document.querySelectorAll(".wrong6")

    for (let i = 0; i < wrong6.length; i++) {
      wrong6[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    six.style.display = "none";
    next6.style.display = "block"
  });
  seven.addEventListener("click", function () {
    var hiddeseven = document.getElementById("hidden7")

    hiddeseven.style.display = "block"
    var wrong7 = document.querySelectorAll(".wrong7")

    for (let i = 0; i < wrong7.length; i++) {
      wrong7[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    seven.style.display = "none";
    next7.style.display = "block"
  });

  eight.addEventListener("click", function () {
    var hiddeight = document.getElementById("hidden8")

    hiddeight.style.display = "block"
    var wrong8 = document.querySelectorAll(".wrong8")

    for (let i = 0; i < wrong8.length; i++) {
      wrong8[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    eight.style.display = "none";
    next8.style.display = "block"
  });

  nine.addEventListener("click", function () {
    var hiddenine = document.getElementById("hidden9")

    hiddenine.style.display = "block"
    var wrong9 = document.querySelectorAll(".wrong9")

    for (let i = 0; i < wrong9.length; i++) {
      wrong9[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    nine.style.display = "none";
    next9.style.display = "block"
  });
  ten.addEventListener("click", function () {
    var hiddeten = document.getElementById("hidden10")

    hiddeten.style.display = "block"
    var wrong10 = document.querySelectorAll(".wrong10")

    for (let i = 0; i < wrong10.length; i++) {
      wrong10[i].style.display = "none";
    }
    score += 10
    scorect.textContent = score + " Points!"
    ten.style.display = "none"
    next10.style.display = "block"
    clearInterval(timeInterval);

  });

  // Wrong Answer Conditions And Reactions!!!!!!
  var wrong1_0 = document.getElementById("wrong1_0");

  wrong1_0.addEventListener("click", function () {

    var incorrect = document.getElementById("incorrect1.1")
    
    incorrect.style.display = "block"
    
   
    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong1.length; i++) {
      wrong1[i].style.display = "none";
    }
    one.style.display = "none";
    next1.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }


  });
  var wrong1_1 = document.getElementById("wrong1_1");

  wrong1_1.addEventListener("click", function () {

    var incorrect = document.getElementById("incorrect1.2")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong1.length; i++) {
      wrong1[i].style.display = "none";
    }
    one.style.display = "none";
    next1.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });

  var wrong1_2 = document.getElementById("wrong1_2");

  wrong1_2.addEventListener("click", function () {

    var incorrect = document.getElementById("incorrect1.3")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")
    next1.style.display = "block"


    for (let i = 0; i < wrong1.length; i++) {
      wrong1[i].style.display = "none";
    }
    one.style.display = "none";
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  var wrong2_0 = document.getElementById("wrong2_0");

  wrong2_0.addEventListener("click", function () {
    var wrong2 = document.querySelectorAll(".wrong2")
    var incorrect = document.getElementById("incorrect2.1")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")
    next2.style.display = "block"


    for (let i = 0; i < wrong1.length; i++) {
      wrong2[i].style.display = "none";
    }
    two.style.display = "none";
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong2_1.addEventListener("click", function () {
    var wrong2 = document.querySelectorAll(".wrong2")
    var incorrect = document.getElementById("incorrect2.2")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong1.length; i++) {
      wrong2[i].style.display = "none";
    }
    two.style.display = "none";
    next2.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong2_2.addEventListener("click", function () {
    var wrong2 = document.querySelectorAll(".wrong2")
    var incorrect = document.getElementById("incorrect2.3")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong1.length; i++) {
      wrong2[i].style.display = "none";
    }
    two.style.display = "none";
    next2.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong3_0.addEventListener("click", function () {
    var wrong3 = document.querySelectorAll(".wrong3")
    var incorrect = document.getElementById("incorrect3.1")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong3.length; i++) {
      wrong3[i].style.display = "none";
    }
    three.style.display = "none";
    next3.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }


  });
  wrong3_1.addEventListener("click", function () {
    var wrong3 = document.querySelectorAll(".wrong3")
    var incorrect = document.getElementById("incorrect3.2")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong3.length; i++) {
      wrong3[i].style.display = "none";
    }
    three.style.display = "none";
    next3.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }


  });
  wrong3_2.addEventListener("click", function () {
    var wrong3 = document.querySelectorAll(".wrong3")
    var incorrect = document.getElementById("incorrect3.3")

    incorrect.style.display = "block"

    var wrong1 = document.querySelectorAll(".wrong1")


    for (let i = 0; i < wrong3.length; i++) {
      wrong3[i].style.display = "none";
    }
    three.style.display = "none";
    next3.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }


  });
  wrong4_0.addEventListener("click", function () {
    var wrong4 = document.querySelectorAll(".wrong4")
    var incorrect = document.getElementById("incorrect4.1")

    incorrect.style.display = "block"
    next4.style.display = "block"
    
    
    
    
    for (let i = 0; i < wrong4.length; i++) {
      wrong4[i].style.display = "none";
    }
    four.style.display = "none";
    
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong4_1.addEventListener("click", function () {
    var wrong4 = document.querySelectorAll(".wrong4")
    var incorrect = document.getElementById("incorrect4.2")

    incorrect.style.display = "block"
    next4.style.display = "block"




    for (let i = 0; i < wrong4.length; i++) {
      wrong4[i].style.display = "none";
    }
    four.style.display = "none";
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong4_2.addEventListener("click", function () {
    var wrong4 = document.querySelectorAll(".wrong4")
    var incorrect = document.getElementById("incorrect4.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong4.length; i++) {
      wrong4[i].style.display = "none";
    }
    four.style.display = "none";
    next4.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong5_0.addEventListener("click", function () {
    var wrong5 = document.querySelectorAll(".wrong5")
    var incorrect = document.getElementById("incorrect5.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong5.length; i++) {
      wrong5[i].style.display = "none";
    }
    five.style.display = "none";
    next5.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }

  });
  wrong5_1.addEventListener("click", function () {
    var wrong5 = document.querySelectorAll(".wrong5")
    var incorrect = document.getElementById("incorrect5.2")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong5.length; i++) {
      wrong5[i].style.display = "none";
    }
    five.style.display = "none";
    next5.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong5_2.addEventListener("click", function () {
    var wrong5 = document.querySelectorAll(".wrong5")
    var incorrect = document.getElementById("incorrect5.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong5.length; i++) {
      wrong5[i].style.display = "none";
    }
    five.style.display = "none";
    next5.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong6_0.addEventListener("click", function () {
    var wrong6 = document.querySelectorAll(".wrong6")
    var incorrect = document.getElementById("incorrect6.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong6.length; i++) {
      wrong6[i].style.display = "none";
    }
    six.style.display = "none";
    next6.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong6_1.addEventListener("click", function () {
    var wrong6 = document.querySelectorAll(".wrong6")
    var incorrect = document.getElementById("incorrect6.2")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong6.length; i++) {
      wrong6[i].style.display = "none";
    }
    six.style.display = "none";
    next6.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong6_2.addEventListener("click", function () {
    var wrong6 = document.querySelectorAll(".wrong6")
    var incorrect = document.getElementById("incorrect6.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong6.length; i++) {
      wrong6[i].style.display = "none";
    }
    six.style.display = "none";
    next6.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong7_0.addEventListener("click", function () {
    var wrong7 = document.querySelectorAll(".wrong7")
    var incorrect = document.getElementById("incorrect7.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong7.length; i++) {
      wrong7[i].style.display = "none";
    }
    seven.style.display = "none";
    next7.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong7_1.addEventListener("click", function () {
    var wrong7 = document.querySelectorAll(".wrong7")
    var incorrect = document.getElementById("incorrect7.2")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong7.length; i++) {
      wrong7[i].style.display = "none";
    }
    seven.style.display = "none";
    next7.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong7_2.addEventListener("click", function () {
    var wrong7 = document.querySelectorAll(".wrong7")
    var incorrect = document.getElementById("incorrect7.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong7.length; i++) {
      wrong7[i].style.display = "none";
    }
    seven.style.display = "none";
    next7.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong8_0.addEventListener("click", function () {
    var wrong8 = document.querySelectorAll(".wrong8")
    var incorrect = document.getElementById("incorrect8.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong8.length; i++) {
      wrong8[i].style.display = "none";
    }
    eight.style.display = "none";
    next8.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong8_1.addEventListener("click", function () {
    var wrong8 = document.querySelectorAll(".wrong8")
    var incorrect = document.getElementById("incorrect8.2")

    incorrect.style.display = "block"
    
    
    
    for (let i = 0; i < wrong8.length; i++) {
      wrong8[i].style.display = "none";
    }
    eight.style.display = "none";
    next8.style.display = "block"
    
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong8_2.addEventListener("click", function () {
    var wrong8 = document.querySelectorAll(".wrong8")
    var incorrect = document.getElementById("incorrect8.3")

    incorrect.style.display = "block"



    for (let i = 0; i < wrong8.length; i++) {
      wrong8[i].style.display = "none";
    }
    eight.style.display = "none";

    next8.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong9_0.addEventListener("click", function () {
    var wrong9 = document.querySelectorAll(".wrong9")
    var incorrect = document.getElementById("incorrect9.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong9.length; i++) {
      wrong9[i].style.display = "none";
    }
    nine.style.display = "none";

    next9.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong9_1.addEventListener("click", function () {
    var wrong9 = document.querySelectorAll(".wrong9")
    var incorrect = document.getElementById("incorrect9.2")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong9.length; i++) {
      wrong9[i].style.display = "none";
    }
    nine.style.display = "none";

    next9.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong9_2.addEventListener("click", function () {
    var wrong9 = document.querySelectorAll(".wrong9")
    var incorrect = document.getElementById("incorrect9.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong9.length; i++) {
      wrong9[i].style.display = "none";
    }
    nine.style.display = "none";

    next9.style.display = "block"
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });

  wrong10_0.addEventListener("click", function () {
    var wrong10 = document.querySelectorAll(".wrong10")
    var incorrect = document.getElementById("incorrect10.1")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong10.length; i++) {
      wrong10[i].style.display = "none";
    }
    ten.style.display = "none";

    next10.style.display = "block"
    clearInterval(timeInterval);
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong10_1.addEventListener("click", function () {
    var wrong10 = document.querySelectorAll(".wrong10")
    var incorrect = document.getElementById("incorrect10.2")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong10.length; i++) {
      wrong10[i].style.display = "none";
    }
    ten.style.display = "none";
    next10.style.display = "block"
    clearInterval(timeInterval);
    if (timer > 0) {
      timer -= 10; // decrease timer by 5 second
      document.getElementById("timer").innerHTML = timerct; // update timer display
    }
  });
  wrong10_2.addEventListener("click", function () {
    var wrong10 = document.querySelectorAll(".wrong10")
    var incorrect = document.getElementById("incorrect10.3")

    incorrect.style.display = "block"




    for (let i = 0; i < wrong10.length; i++) {
      wrong10[i].style.display = "none";
    }
    ten.style.display = "none";
    next10.style.display = "block"
    clearInterval(timeInterval);


  });
  // Timer
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timer > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerct.textContent = timer + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timer--;
    } else if (timer === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerct.textContent = timer + ' second remaining';
      timer--;
    } else if (timer < 1) {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerct.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function

      form.style.display = "none"
      finalmessage.style.display = "none";
      finalform2.style.display = "block";





    }
  }, 1000);



  restartbutton.addEventListener("click", function () {
    window.location.reload();

  });
 // next buttonsConditions And Reactions!!!!!!
  next1.addEventListener("click", function (event) {

    twodiv.style.display = "block";
    onediv.style.display = "none";
    event.preventDefault();
  });

  next2.addEventListener("click", function (event) {

    threediv.style.display = "block";
    twodiv.style.display = "none";
    event.preventDefault();
  });

  next3.addEventListener("click", function (event) {

    fourdiv.style.display = "block";
    threediv.style.display = "none";
    event.preventDefault();
  });
  next4.addEventListener("click", function (event) {

    fivediv.style.display = "block";
    fourdiv.style.display = "none";
    event.preventDefault();
  });
  next5.addEventListener("click", function (event) {

    sixdiv.style.display = "block";
    fivediv.style.display = "none";
    event.preventDefault();
  });
  next6.addEventListener("click", function (event) {

    sevendiv.style.display = "block";
    sixdiv.style.display = "none";
    event.preventDefault();
  });
  next7.addEventListener("click", function (event) {

    eightdiv.style.display = "block";
    sevendiv.style.display = "none";
    event.preventDefault();
  });
  next8.addEventListener("click", function (event) {

    ninediv.style.display = "block";
    eightdiv.style.display = "none";
    event.preventDefault();
  });
  next9.addEventListener("click", function (event) {

    tendiv.style.display = "block";
    ninediv.style.display = "none";
    event.preventDefault();
  });
  next10.addEventListener("click", function (event) {
    tendiv.style.display = "none"
    finalform.style.display = "block"
    event.preventDefault();
    leaderboard.style.display = "none";

  });











});
// submit button Conditions And Reactions!!!!!!
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var list = document.getElementById('list');
var submitBtn = document.getElementById('submit-btn');


// submit button Conditions And Reactions!!!!!!
submitBtn.addEventListener('click', function () {
  var text1 = input1.value;
  var text2 = input2.value;
  leaderboard.style.display = "none";
  
  if (text1 === '' || text2 === '') {
    alert('WRITE Something in the blank space!');
    return;
   
  }

  var li = document.createElement('li');
  var litext = li.textContent = text1 + " " + text2 + " " + " / Points " + score + " / Timer stoped at: " + timer + " Seconds";
  litext;
  list.appendChild(li);

  input1.value = '';
  input2.value = '';
  
  for (var i = 0; i < 20; i++) 
   
  

  localStorage.setItem('items',li.innerHTML);
  



});

// localstorage Conditions And Reactions!!!!!!
window.addEventListener('load', function () {
  var storedItems = localStorage.getItem('items');
  if (storedItems) {
  
    
    
    var li = document.createElement('li');
    li.textContent = this.localStorage.getItem("items");
    list.appendChild(li);
  }
});
















