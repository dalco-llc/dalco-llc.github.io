const letterDiv = $("#letter");
const letterBtn = $("#letterBtn");
const text = $("#text");

const mock_letter = `
Guten morgen my dear.
Thats German, not exactly a romance language but whatver.
Hola mí amor, yo encanto tú... 
spanish is a lil better ig.
test
`;

let currentStep=-1;
const steps = [
    ()=>{
        text.text("Oh no it escaped! try again 🙂‍↔️")
        letterBtn.animate({right: "32px"})
    },
    ()=>{
        text.text("😳 Sneaky litte letter...");
        letterBtn.animate({top: "20px"});
    },
    ()=>{
        text.text("ok now its just playing with you. 😑");
        letterBtn.animate({top: "5px"});
    },
    ()=>{
        text.text("🐵🐒🐵");
        letterBtn.animate({ left: "4px"});
    },
    ()=>{
        text.text("It wants to know who you are before it lets you open it...")
        letterBtn.animate({top: "400px", fontSize:"124px"}, 10000)
    },
    ()=>{
        let a = prompt("Letter says: Who are you?");
        a = a.toLowerCase();
        if (a == "tigist" || a == "tig") {
            text.text("good answer 👍🏻");
            letterBtn.animate({top: "10px"});
        } else {
            text.text("uh oh. imposter alert... 🚨🚨");
            letterBtn.hide();
        }
    },
    ()=>{
        $(".overlay").slideUp(3000);
    }
]

function openLetter() {
    currentStep += 1;
    steps[currentStep]();
}