let greetings=["good morning","good afternoon","good evenimg","good night"];
let num=0;
function great_afternoon()
{
    let text = document.getElementById("great");
    text.innerText = greetings[num];
    num+=1;
    if(num>3){
        num=0;
    }
}
function turn_on()
{
    let light = document.getElementById("on");
    light.src = "light_on.jpg";
}
function turn_off()
{
    let light = document.getElementById("on");
    light.src = "light_off.jpg";
}

function change_color()
{
    let colour = document.getElementById("cap");
    colour.style.backgroundColor = "black";

    let txt1 = document.getElementById("data");
    txt1.style.backgroundColor = "white";


    let txt2 = document.getElementById("great");
    txt2.style.backgroundColor = "white";
}