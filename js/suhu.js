let Mode = "celcius";



function GetResult(){

    const Paragraph = document.getElementById("ResParagraph");
    const Object = document.getElementById("Celcius");
    const LogicLabel = document.getElementById("LogicLabel");
    const Objectval = Object.value;
    const Text = "How to calculate: "

    if(Mode === "celcius"){
        Paragraph.innerHTML = Objectval * 9/5 + 32;
        LogicLabel.innerHTML = Text.concat(Objectval, " * 9/5 + 32");
    } else if(Mode === "farenheit"){
        Paragraph.innerHTML = (Objectval - 32) / 5/9;
        LogicLabel.innerHTML = Text.concat("(", Objectval, " - 32)/ 5/9");
    }
   


}
function ReverseResult(){

    const Uplabel = document.getElementById("UpLabel");
    const BottomLabel = document.getElementById("BottomLabel");

    if(Mode === "celcius"){
        Mode = "farenheit";
        Uplabel.innerHTML = "Fahrenheit: ";
        BottomLabel.innerHTML = "Celcius: ";
    }else if(Mode === "farenheit"){
        Mode = "celcius";
        Uplabel.innerHTML = "Celcius: ";
        BottomLabel.innerHTML = "Fahrenheit: ";
    } 
}

function AllReset(){

    const Paragraph = document.getElementById("ResParagraph");
    const LogicLabel = document.getElementById("LogicLabel");

    Paragraph.innerHTML = "";
    LogicLabel.innerHTML = "";
}