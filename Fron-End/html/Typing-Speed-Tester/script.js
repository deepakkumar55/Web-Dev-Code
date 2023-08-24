const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const accuracyLabel = document.querySelector(".accuracy");
const wordsPerMinuteLabel = document.querySelector(".wpm");

var timer = [0,0,0,0];
var interval;
var wpmInterval;
var timerRunning = false;
var errors = 0;
var timeElapsed = 0;
var randomParagraph = 0;
var wpm;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

    timeElapsed = timer[0]*60 + timer[1];
}

// Finds words per minute
function wordsPerMinute() {
  if (timeElapsed > 0) {
    var grossWpm = Math.floor((testArea.value.length/5) / (timeElapsed/60));
    console.log(grossWpm);
    wpm = Math.floor(((testArea.value.length/5) - errors)/(timeElapsed/60));
    console.log(wpm);
    if (wpm < 0) {
      wordsPerMinuteLabel.innerHTML = 0 + " WPM";
    } else {
      wordsPerMinuteLabel.innerHTML = wpm + " WPM";
    }
    accuracy(grossWpm);
  }
}

// Finds the accuracy
function accuracy(grossWpm) {
  let accuracy = Math.floor(wpm/grossWpm*100);
  if (accuracy < 0) {
    accuracyLabel.innerHTML = 0+"%";
  } else {
    accuracyLabel.innerHTML = accuracy+"%";
  }
  console.log(accuracy);
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);


    if (textEntered == originText) {
        clearInterval(interval);
        clearInterval(wpmInterval);
        testWrapper.style.borderColor = "#429890"; //Green
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3"; //Blue
        } else {
            errors++;
            if (!(event.keyCode === 8)) {
              testWrapper.style.borderColor = "#E95D0F"; //Orange
            } else {
              errors--;
            }
        }
    }
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
        wpmInterval = setInterval(wordsPerMinute, 1000);
    }
}

//Generates a new paragraph:
function randomParagraphGenerator() {
    let par1 = "A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures. A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law office. Paralegals are not allowed to offer legal services directly to the public on their own and must perform their legal work under an attorney or law firm.";
    let par2 = "This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly. Good Luck!";
    let par3 = "Proofreader applicants are tested primarily on their spelling, speed, and skill in finding errors in the sample text. Toward that end, they may be given a list of ten or twenty classically difficult words and a proofreading test, both tightly timed. The proofreading test will often have a maximum number of errors per quantity of text and a minimum amount of time to find them. The goal of this approach is to identify those with the best skill set.";
    let par4 = "The Master of Business Administration (MBA or M.B.A.) degree originated in the United States in the early 20th century when the country industrialized and companies sought scientific approaches to management. The core courses in an MBA program cover various areas of business such as accounting, applied statistics, business communication, business ethics, business law, finance, managerial economics, management, entrepreneurship, marketing and operations in a manner most relevant to management analysis and strategy. Most programs also include elective courses and concentrations for further study in a particular area, for example accounting, finance, and marketing. MBA programs in the United States typically require completing about sixty credits, nearly twice the number of credits typically required for degrees that cover some of the same material such as the Master of Economics, Master of Finance, Master of Accountancy, Master of Science in Marketing and Master of Science in Management, The MBA is a terminal degree and a professional degree. Accreditation bodies specifically for MBA programs ensure consistency and quality of education. Business schools in many countries offer programs tailored to full-time, part-time, executive (abridged coursework typically occurring on nights or weekends) and distance learning students, many with specialized concentrations.";
    let par5 = "Words per minute (WPM) is a measure of typing speed, commonly used in recruitment. For the purposes of WPM measurement a word is standardized to five characters or keystrokes. Therefore, 'brown' counts as one word, but 'accounted' counts as two. The benefits of a standardized measurement of input speed are that it enables comparison across language and hardware boundaries. The speed of an Afrikaans-speaking operator in Cape Town can be compared with a French-speaking operator in Paris. (Wikipedia)";
    let par6 = "A teacher's professional duties may extend beyond formal teaching. Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities. In some education systems, teachers may have responsibility for student discipline.";
    let par7 = "A late 20th century trend in typing, primarily used with devices with small keyboards (such as PDAs and Smartphones), is thumbing or thumb typing. This can be accomplished using one or both thumbs. Similar to desktop keyboards and input devices, if a user overuses keys which need hard presses and/or have small and unergonomic layouts, it could cause thumb tendonitis or other repetitive strain injury. (Wikipedia)";
    let par8 = "Two common terms used to describe a salesperson are 'Farmer' and 'Hunter'. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called 'sales capturing'. An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson. Their job is to find and convert buyers. A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process.";
    let par9 = "Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do. Your future may very well depend on the ways you go about finding the best job openings for you in the world of work. Some people will feel that there is one and only one job in the world for them. Hard thinking and a lot of hard work will help them find the one job that is best for them. Jobs are there for those with skills and a good work ethic. Many new young artists in the upper New England states are famous around the world as leaders in new American art. These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others. The students have had the chance to learn and use skills in oil painting, sketching with chalk, sculpting, and weaving. Learning to typewrite is a skill that will help all of us in our work today. The development of the computer will open doors for people with the keyboarding skills and will make typing a necessity. Managers, as well as secretaries, will need skill at the keyboard to input data and process words. Therefore, good keyboarding skills may be important to you.";
    let par10 = "The first personnel management department started at the National Cash Register Co. in 1900. The owner, John Henry Patterson, organized a personnel department to deal with grievances, discharges and safety, and training for supervisors on new laws and practices after several strikes and employee lockouts. During the 1970s, companies experienced globalization, deregulation, and rapid technological change which caused the major companies to enhance their strategic planning and focus on ways to promote organizational effectiveness. This resulted in developing more jobs and opportunities for people to show their skills which were directed to effective applying employees toward the fulfillment of individual, group, and organizational goals. Many years later the major/minor of human resource management was created at universities and colleges also known as business administration.";

    switch (Math.floor(Math.random() * 10)) {
      case 0:
        originText = par1;
        document.querySelector("#origin-text p").innerHTML = par1;
        break;
      case 1:
        originText = par2;
        document.querySelector("#origin-text p").innerHTML = par2;
        break;
      case 2:
        originText = par3;
        document.querySelector("#origin-text p").innerHTML = par3;
        break;
      case 3:
        originText = par4;
        document.querySelector("#origin-text p").innerHTML = par4;
        break;
      case 4:
        originText = par5;
        document.querySelector("#origin-text p").innerHTML = par5;
        break;
      case 5:
        originText = par6;
        document.querySelector("#origin-text p").innerHTML = par6;
        break;
      case 6:
        originText = par7;
        document.querySelector("#origin-text p").innerHTML = par7;
        break;
      case 7:
        originText = par8;
        document.querySelector("#origin-text p").innerHTML = par8;
        break;
      case 8:
        originText = par9;
        document.querySelector("#origin-text p").innerHTML = par9;
        break;
      case 9:
        originText = par10;
        document.querySelector("#origin-text p").innerHTML = par10;
        break;
    }

}

// Reset everything:
function reset() {
    clearInterval(interval);
    clearInterval(wpmInterval);
    interval = null;
    wpmInterval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    wpm = 0 + " WPM";
    timeElapsed = 0;
    errors = 0;

    testArea.value = "";
    testArea.disabled = false;
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    accuracyLabel.innerHTML = "100%";
    wordsPerMinuteLabel.innerHTML = wpm;
    randomParagraphGenerator();
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
