x = 0;
y = 0;
draw_1 = "";
draw_2 = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("status").innerHTML = "System is listning please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
    if(content =="1")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "started drawing 1 ";
       draw_1 = "set";
    }
    if(content =="2")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "started drawing 2 ";
       draw_2 = "set";
    }
}

     function setup() {
        canvas = createCanvas(900, 600);
     }

     function draw() {
        if(draw_1 == "set")
        {
            radius = Math.floor(Math.random() * 100);
            1(x,y,radius);
            document.getElementById("status").innerHTML = "1 is drawn ";
            draw_1 = "";
        }
         if(draw_2 == "set")
        {
            2(x,y,70,50);
            document.getElementById("status").innerHTML = "2 is drawn ";
            draw_2 = "";
        }
     }